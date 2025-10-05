import React, { useState, useEffect, useCallback, useRef } from 'react';
import { AssistantViewProps } from '../../types';
import './AssistantView.css';

const AssistantView: React.FC<AssistantViewProps> = ({
    responses,
    currentResponseIndex,
    selectedProfile,
    onSendText,
    shouldAnimateResponse,
    savedResponses: initialSavedResponses,
    onResponseIndexChanged,
    onStopSession,
}) => {
    const [savedResponses, setSavedResponses] = useState(initialSavedResponses);
    const [lastAnimatedWordCount, setLastAnimatedWordCount] = useState(0);
    const responseContainerRef = useRef<HTMLDivElement>(null);
    const textInputRef = useRef<HTMLInputElement>(null);

    // Profile names mapping
    const getProfileNames = useCallback(() => {
        return {
            interview: 'Job Interview',
            sales: 'Sales Call',
            meeting: 'Business Meeting',
            presentation: 'Presentation',
            negotiation: 'Negotiation',
            exam: 'Exam Assistant',
        };
    }, []);

    // Get current response or default message
    const getCurrentResponse = useCallback(() => {
        const profileNames = getProfileNames();
        return responses.length > 0 && currentResponseIndex >= 0
            ? responses[currentResponseIndex]
            : `Hey, I'm listening to your ${profileNames[selectedProfile as keyof typeof profileNames] || 'session'}?`;
    }, [responses, currentResponseIndex, selectedProfile, getProfileNames]);

    // Load font size from localStorage
    const loadFontSize = useCallback(() => {
        const fontSize = localStorage.getItem('fontSize');
        if (fontSize !== null) {
            const fontSizeValue = parseInt(fontSize, 10) || 20;
            const root = document.documentElement;
            root.style.setProperty('--response-font-size', `${fontSizeValue}px`);
        }
    }, []);

    // Initialize component
    useEffect(() => {
        loadFontSize();
    }, [loadFontSize]);

    // Update saved responses when prop changes
    useEffect(() => {
        setSavedResponses(initialSavedResponses);
    }, [initialSavedResponses]);

    // Get response counter
    const getResponseCounter = useCallback(() => {
        return responses.length > 0 ? `${currentResponseIndex + 1}/${responses.length}` : '';
    }, [responses.length, currentResponseIndex]);

    // Check if current response is saved
    const isResponseSaved = useCallback(() => {
        const currentResponse = getCurrentResponse();
        return savedResponses.some(saved => saved.response === currentResponse);
    }, [getCurrentResponse, savedResponses]);

    // Navigation functions
    const navigateToPreviousResponse = useCallback(() => {
        if (currentResponseIndex > 0) {
            const newIndex = currentResponseIndex - 1;
            onResponseIndexChanged?.(newIndex);
        }
    }, [currentResponseIndex, onResponseIndexChanged]);

    const navigateToNextResponse = useCallback(() => {
        if (currentResponseIndex < responses.length - 1) {
            const newIndex = currentResponseIndex + 1;
            onResponseIndexChanged?.(newIndex);
        }
    }, [currentResponseIndex, responses.length, onResponseIndexChanged]);

    // Scroll functions
    const scrollResponseUp = useCallback(() => {
        if (responseContainerRef.current) {
            const container = responseContainerRef.current;
            const scrollAmount = container.clientHeight * 0.3;
            container.scrollTop = Math.max(0, container.scrollTop - scrollAmount);
        }
    }, []);

    const scrollResponseDown = useCallback(() => {
        if (responseContainerRef.current) {
            const container = responseContainerRef.current;
            const scrollAmount = container.clientHeight * 0.3;
            container.scrollTop = Math.min(container.scrollHeight - container.clientHeight, container.scrollTop + scrollAmount);
        }
    }, []);

    // IPC keyboard shortcuts setup
    useEffect(() => {
        if (window.electron?.ipcRenderer) {
            const ipcRenderer = window.electron.ipcRenderer;

            const handlePreviousResponse = () => {
                console.log('Received navigate-previous-response message');
                navigateToPreviousResponse();
            };

            const handleNextResponse = () => {
                console.log('Received navigate-next-response message');
                navigateToNextResponse();
            };

            const handleScrollUp = () => {
                console.log('Received scroll-response-up message');
                scrollResponseUp();
            };

            const handleScrollDown = () => {
                console.log('Received scroll-response-down message');
                scrollResponseDown();
            };

            ipcRenderer.on('navigate-previous-response', handlePreviousResponse);
            ipcRenderer.on('navigate-next-response', handleNextResponse);
            ipcRenderer.on('scroll-response-up', handleScrollUp);
            ipcRenderer.on('scroll-response-down', handleScrollDown);

            return () => {
                ipcRenderer.removeAllListeners('navigate-previous-response');
                ipcRenderer.removeAllListeners('navigate-next-response');
                ipcRenderer.removeAllListeners('scroll-response-up');
                ipcRenderer.removeAllListeners('scroll-response-down');
            };
        }
    }, [navigateToPreviousResponse, navigateToNextResponse, scrollResponseUp, scrollResponseDown]);

    // Handle text input
    const handleSendText = useCallback(async () => {
        if (textInputRef.current && textInputRef.current.value.trim()) {
            const message = textInputRef.current.value.trim();
            textInputRef.current.value = '';
            await onSendText(message);
        }
    }, [onSendText]);

    // Handle text input keydown
    const handleTextKeydown = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendText();
            }
        },
        [handleSendText]
    );

    // Save current response
    const saveCurrentResponse = useCallback(() => {
        const currentResponse = getCurrentResponse();
        if (currentResponse && !isResponseSaved()) {
            const newSavedResponses = [
                ...savedResponses,
                {
                    response: currentResponse,
                    timestamp: new Date().toISOString(),
                    profile: selectedProfile,
                },
            ];
            setSavedResponses(newSavedResponses);
            localStorage.setItem('savedResponses', JSON.stringify(newSavedResponses));
        }
    }, [getCurrentResponse, isResponseSaved, savedResponses, selectedProfile]);

    // Scroll to bottom
    const scrollToBottom = useCallback(() => {
        setTimeout(() => {
            if (responseContainerRef.current) {
                responseContainerRef.current.scrollTop = responseContainerRef.current.scrollHeight;
            }
        }, 0);
    }, []);

    // Render markdown content
    const renderMarkdown = useCallback((content: string) => {
        if (typeof window !== 'undefined' && (window as any).marked) {
            try {
                (window as any).marked.setOptions({
                    breaks: true,
                    gfm: true,
                    sanitize: false,
                });
                let rendered = (window as any).marked.parse(content);
                rendered = wrapWordsInSpans(rendered);
                return rendered;
            } catch (error) {
                console.warn('Error parsing markdown:', error);
                return content;
            }
        }
        console.log('Marked not available, using plain text');
        return content;
    }, []);

    // Wrap words in spans for animation
    const wrapWordsInSpans = useCallback((html: string) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const tagsToSkip = ['PRE'];

        function wrap(node: Node) {
            if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim() && !tagsToSkip.includes((node.parentNode as Element)?.tagName || '')) {
                const words = node.textContent.split(/(\s+)/);
                const frag = document.createDocumentFragment();
                words.forEach(word => {
                    if (word.trim()) {
                        const span = document.createElement('span');
                        span.setAttribute('data-word', '');
                        span.textContent = word;
                        frag.appendChild(span);
                    } else {
                        frag.appendChild(document.createTextNode(word));
                    }
                });
                (node.parentNode as Element).replaceChild(frag, node);
            } else if (node.nodeType === Node.ELEMENT_NODE && !tagsToSkip.includes((node as Element).tagName)) {
                Array.from(node.childNodes).forEach(wrap);
            }
        }
        Array.from(doc.body.childNodes).forEach(wrap);
        return doc.body.innerHTML;
    }, []);

    // Update response content with animation
    const updateResponseContent = useCallback(() => {
        console.log('updateResponseContent called');
        if (responseContainerRef.current) {
            const container = responseContainerRef.current;
            const currentResponse = getCurrentResponse();
            console.log('Current response:', currentResponse);
            const renderedResponse = renderMarkdown(currentResponse);
            console.log('Rendered response:', renderedResponse);
            container.innerHTML = renderedResponse;

            const words = container.querySelectorAll('[data-word]');
            if (shouldAnimateResponse) {
                // Show already animated words
                for (let i = 0; i < lastAnimatedWordCount && i < words.length; i++) {
                    words[i].classList.add('visible');
                }
                // Animate new words
                for (let i = lastAnimatedWordCount; i < words.length; i++) {
                    words[i].classList.remove('visible');
                    setTimeout(
                        () => {
                            words[i].classList.add('visible');
                            if (i === words.length - 1) {
                                // Animation complete event could be dispatched here
                            }
                        },
                        (i - lastAnimatedWordCount) * 100
                    );
                }
                setLastAnimatedWordCount(words.length);
            } else {
                words.forEach(word => word.classList.add('visible'));
                setLastAnimatedWordCount(words.length);
            }
        } else {
            console.log('Response container not found');
        }
    }, [getCurrentResponse, renderMarkdown, shouldAnimateResponse, lastAnimatedWordCount]);

    // Update content when responses or index changes
    useEffect(() => {
        if (currentResponseIndex !== -1) {
            setLastAnimatedWordCount(0);
        }
        updateResponseContent();
    }, [responses, currentResponseIndex, updateResponseContent]);

    // Initial content update
    useEffect(() => {
        updateResponseContent();
    }, [updateResponseContent]);

    const currentResponse = getCurrentResponse();
    const responseCounter = getResponseCounter();
    const isSaved = isResponseSaved();

    return (
        <>
            <div className="assistant-view">
                <div className="response-container" ref={responseContainerRef} id="responseContainer" />

                <div className="text-input-container">
                    <button className="nav-button" onClick={navigateToPreviousResponse} disabled={currentResponseIndex <= 0}>
                        <svg
                            width="24px"
                            height="24px"
                            strokeWidth="1.7"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#ffffff"
                        >
                            <path d="M15 6L9 12L15 18" stroke="#ffffff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>

                    {responses.length > 0 && <span className="response-counter">{responseCounter}</span>}

                    <button
                        className={`save-button ${isSaved ? 'saved' : ''}`}
                        onClick={saveCurrentResponse}
                        title={isSaved ? 'Response saved' : 'Save this response'}
                    >
                        <svg width="24px" height="24px" strokeWidth="1.7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5 20V5C5 3.89543 5.89543 3 7 3H16.1716C16.702 3 17.2107 3.21071 17.5858 3.58579L19.4142 5.41421C19.7893 5.78929 20 6.29799 20 6.82843V20C20 21.1046 19.1046 22 18 22H7C5.89543 22 5 21 5 20Z"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path d="M15 22V13H9V22" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M9 3V8H15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>

                    {onStopSession && (
                        <button className="stop-session-button" onClick={onStopSession} title="Stop Session">
                            <svg width="24px" height="24px" strokeWidth="1.7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6 6L18 18M6 18L18 6"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                        </button>
                    )}

                    <input ref={textInputRef} type="text" id="textInput" placeholder="Type a message to the AI..." onKeyDown={handleTextKeydown} />

                    <button className="nav-button" onClick={navigateToNextResponse} disabled={currentResponseIndex >= responses.length - 1}>
                        <svg
                            width="24px"
                            height="24px"
                            strokeWidth="1.7"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#ffffff"
                        >
                            <path d="M9 6L15 12L9 18" stroke="#ffffff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
};

export default AssistantView;
