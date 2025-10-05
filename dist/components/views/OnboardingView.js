"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnboardingView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./OnboardingView.css");
const button_1 = require("@/components/ui/button");
const OnboardingView = ({ onComplete, onClose }) => {
    // State management - converted from Lit properties
    const [currentSlide, setCurrentSlide] = (0, react_1.useState)(0);
    const [contextText, setContextText] = (0, react_1.useState)('');
    // Animation state
    const [isTransitioning, setIsTransitioning] = (0, react_1.useState)(false);
    const [transitionStartTime, setTransitionStartTime] = (0, react_1.useState)(0);
    const [previousColorScheme, setPreviousColorScheme] = (0, react_1.useState)(null);
    // Canvas refs and animation
    const canvasRef = (0, react_1.useRef)(null);
    const animationIdRef = (0, react_1.useRef)(null);
    // Transition properties
    const transitionDuration = 800; // 800ms fade duration
    // Color schemes - converted from Lit static property
    const colorSchemes = [
        // Slide 1 - Welcome (Very dark purple/gray)
        [
            [25, 25, 35], // Dark gray-purple
            [20, 20, 30], // Darker gray
            [30, 25, 40], // Slightly purple
            [15, 15, 25], // Very dark
            [35, 30, 45], // Muted purple
            [10, 10, 20], // Almost black
        ],
        // Slide 2 - Privacy (Dark blue-gray)
        [
            [20, 25, 35], // Dark blue-gray
            [15, 20, 30], // Darker blue-gray
            [25, 30, 40], // Slightly blue
            [10, 15, 25], // Very dark blue
            [30, 35, 45], // Muted blue
            [5, 10, 20], // Almost black
        ],
        // Slide 3 - Context (Dark neutral)
        [
            [25, 25, 25], // Neutral dark
            [20, 20, 20], // Darker neutral
            [30, 30, 30], // Light dark
            [15, 15, 15], // Very dark
            [35, 35, 35], // Lighter dark
            [10, 10, 10], // Almost black
        ],
        // Slide 4 - Features (Dark green-gray)
        [
            [20, 30, 25], // Dark green-gray
            [15, 25, 20], // Darker green-gray
            [25, 35, 30], // Slightly green
            [10, 20, 15], // Very dark green
            [30, 40, 35], // Muted green
            [5, 15, 10], // Almost black
        ],
        // Slide 5 - Complete (Dark warm gray)
        [
            [30, 25, 20], // Dark warm gray
            [25, 20, 15], // Darker warm
            [35, 30, 25], // Slightly warm
            [20, 15, 10], // Very dark warm
            [40, 35, 30], // Muted warm
            [15, 10, 5], // Almost black
        ],
    ];
    // Slide content - converted from getSlideContent method
    const slides = [
        {
            icon: 'assets/onboarding/welcome.svg',
            title: 'Welcome to Cheating Daddy',
            content: 'Your AI assistant that listens and watches, then provides intelligent suggestions automatically during interviews and meetings.',
        },
        {
            icon: 'assets/onboarding/security.svg',
            title: 'Completely Private',
            content: 'Invisible to screen sharing apps and recording software. Your secret advantage stays completely hidden from others.',
        },
        {
            icon: 'assets/onboarding/context.svg',
            title: 'Add Your Context',
            content: 'Share relevant information to help the AI provide better, more personalized assistance.',
            showTextarea: true,
        },
        {
            icon: 'assets/onboarding/customize.svg',
            title: 'Additional Features',
            content: '',
            showFeatures: true,
        },
        {
            icon: 'assets/onboarding/ready.svg',
            title: 'Ready to Go',
            content: 'Add your Gemini API key in settings and start getting AI-powered assistance in real-time.',
        },
    ];
    // Easing function - converted from Lit method
    const easeInOutCubic = (0, react_1.useCallback)((t) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }, []);
    // Interpolate between color schemes - converted from Lit method
    const interpolateColorSchemes = (0, react_1.useCallback)((scheme1, scheme2, progress) => {
        return scheme1.map((color1, index) => {
            const color2 = scheme2[index];
            return [
                color1[0] + (color2[0] - color1[0]) * progress,
                color1[1] + (color2[1] - color1[1]) * progress,
                color1[2] + (color2[2] - color1[2]) * progress,
            ];
        });
    }, []);
    // Handle context input - converted from Lit method
    const handleContextInput = (0, react_1.useCallback)((e) => {
        setContextText(e.target.value);
    }, []);
    // Complete onboarding - converted from Lit method
    const completeOnboarding = (0, react_1.useCallback)(() => {
        if (contextText.trim()) {
            localStorage.setItem('customPrompt', contextText.trim());
        }
        localStorage.setItem('onboardingCompleted', 'true');
        onComplete();
    }, [contextText, onComplete]);
    // Start color transition - converted from Lit method
    const startColorTransition = (0, react_1.useCallback)((newSlide) => {
        setPreviousColorScheme([...colorSchemes[currentSlide]]);
        setCurrentSlide(newSlide);
        setIsTransitioning(true);
        setTransitionStartTime(performance.now());
    }, [colorSchemes, currentSlide]);
    // Navigation methods - converted from Lit methods
    const nextSlide = (0, react_1.useCallback)(() => {
        if (currentSlide < 4) {
            startColorTransition(currentSlide + 1);
        }
        else {
            completeOnboarding();
        }
    }, [currentSlide, startColorTransition, completeOnboarding]);
    const prevSlide = (0, react_1.useCallback)(() => {
        if (currentSlide > 0) {
            startColorTransition(currentSlide - 1);
        }
    }, [currentSlide, startColorTransition]);
    // Handle dot click
    const handleDotClick = (0, react_1.useCallback)((index) => {
        if (index !== currentSlide) {
            startColorTransition(index);
        }
    }, [currentSlide, startColorTransition]);
    // Canvas animation effect - converted from firstUpdated and startGradientAnimation
    (0, react_1.useEffect)(() => {
        const canvas = canvasRef.current;
        if (!canvas)
            return;
        const ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        // Resize canvas to match container
        const resizeCanvas = () => {
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
        };
        // Initial resize
        resizeCanvas();
        // Animation loop
        const animate = (timestamp) => {
            drawGradient(timestamp);
            animationIdRef.current = requestAnimationFrame(animate);
        };
        // Start animation
        animate(0);
        // Handle window resize
        const handleResize = () => resizeCanvas();
        window.addEventListener('resize', handleResize);
        // Cleanup
        return () => {
            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array - only run once on mount
    // Load saved context from localStorage on mount
    (0, react_1.useEffect)(() => {
        const savedContext = localStorage.getItem('customPrompt');
        if (savedContext) {
            setContextText(savedContext);
        }
    }, []);
    // Draw gradient function - converted from Lit method
    const drawGradient = (0, react_1.useCallback)((timestamp) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!ctx || !canvas)
            return;
        const { width, height } = canvas;
        let colors = colorSchemes[currentSlide];
        // Handle color scheme transitions
        if (isTransitioning && previousColorScheme) {
            const elapsed = timestamp - transitionStartTime;
            const progress = Math.min(elapsed / transitionDuration, 1);
            // Use easing function for smoother transition
            const easedProgress = easeInOutCubic(progress);
            colors = interpolateColorSchemes(previousColorScheme, colorSchemes[currentSlide], easedProgress);
            // End transition when complete
            if (progress >= 1) {
                setIsTransitioning(false);
                setPreviousColorScheme(null);
            }
        }
        const time = timestamp * 0.0005; // Much slower animation
        // Create moving gradient with subtle flow
        const flowX = Math.sin(time * 0.7) * width * 0.3;
        const flowY = Math.cos(time * 0.5) * height * 0.2;
        const gradient = ctx.createLinearGradient(flowX, flowY, width + flowX * 0.5, height + flowY * 0.5);
        // Very subtle color variations with movement
        colors.forEach((color, index) => {
            const offset = index / (colors.length - 1);
            const wave = Math.sin(time + index * 0.3) * 0.05; // Very subtle wave
            const r = Math.max(0, Math.min(255, color[0] + wave * 5));
            const g = Math.max(0, Math.min(255, color[1] + wave * 5));
            const b = Math.max(0, Math.min(255, color[2] + wave * 5));
            gradient.addColorStop(offset, `rgb(${r}, ${g}, ${b})`);
        });
        // Fill with moving gradient
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        // Add a second layer with radial gradient for more depth
        const centerX = width * 0.5 + Math.sin(time * 0.3) * width * 0.15;
        const centerY = height * 0.5 + Math.cos(time * 0.4) * height * 0.1;
        const radius = Math.max(width, height) * 0.8;
        const radialGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
        // Very subtle radial overlay
        radialGradient.addColorStop(0, `rgba(${colors[0][0] + 10}, ${colors[0][1] + 10}, ${colors[0][2] + 10}, 0.1)`);
        radialGradient.addColorStop(0.5, `rgba(${colors[2][0]}, ${colors[2][1]}, ${colors[2][2]}, 0.05)`);
        radialGradient.addColorStop(1, `rgba(${colors[colors.length - 1][0]}, ${colors[colors.length - 1][1]}, ${colors[colors.length - 1][2]}, 0.03)`);
        ctx.globalCompositeOperation = 'overlay';
        ctx.fillStyle = radialGradient;
        ctx.fillRect(0, 0, width, height);
        ctx.globalCompositeOperation = 'source-over';
    }, [
        currentSlide,
        isTransitioning,
        previousColorScheme,
        transitionStartTime,
        colorSchemes,
        easeInOutCubic,
        interpolateColorSchemes,
        transitionDuration,
    ]);
    return ((0, jsx_runtime_1.jsx)("div", { className: "onboarding-view-root", children: (0, jsx_runtime_1.jsxs)("div", { className: "onboarding-view-onboardingContainer", children: [(0, jsx_runtime_1.jsx)("canvas", { ref: canvasRef, className: "onboarding-view-gradientCanvas" }), (0, jsx_runtime_1.jsxs)("div", { className: "onboarding-view-contentWrapper", children: [(0, jsx_runtime_1.jsx)("img", { className: "onboarding-view-slideIcon", src: slides[currentSlide].icon, alt: `${slides[currentSlide].title} icon` }), (0, jsx_runtime_1.jsx)("div", { className: "onboarding-view-slideTitle", children: slides[currentSlide].title }), (0, jsx_runtime_1.jsx)("div", { className: "onboarding-view-slideContent", children: slides[currentSlide].content }), slides[currentSlide].showTextarea && ((0, jsx_runtime_1.jsx)("textarea", { className: "onboarding-view-contextTextarea", placeholder: "Paste your resume, job description, or any relevant context here...", value: contextText, onChange: handleContextInput })), slides[currentSlide].showFeatures && ((0, jsx_runtime_1.jsxs)("div", { className: "onboarding-view-featureList", children: [(0, jsx_runtime_1.jsxs)("div", { className: "onboarding-view-featureItem", children: [(0, jsx_runtime_1.jsx)("span", { className: "onboarding-view-featureIcon", children: "\uD83C\uDFA8" }), "Customize AI behavior and responses"] }), (0, jsx_runtime_1.jsxs)("div", { className: "onboarding-view-featureItem", children: [(0, jsx_runtime_1.jsx)("span", { className: "onboarding-view-featureIcon", children: "\uD83D\uDCDA" }), "Review conversation history"] }), (0, jsx_runtime_1.jsxs)("div", { className: "onboarding-view-featureItem", children: [(0, jsx_runtime_1.jsx)("span", { className: "onboarding-view-featureIcon", children: "\uD83D\uDD27" }), "Adjust capture settings and intervals"] })] }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "onboarding-view-navigation", children: [(0, jsx_runtime_1.jsx)("button", { className: "onboarding-view-navButton", onClick: prevSlide, disabled: currentSlide === 0, children: (0, jsx_runtime_1.jsx)("svg", { width: "16px", height: "16px", strokeWidth: "2", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0, jsx_runtime_1.jsx)("path", { d: "M15 6L9 12L15 18", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "onboarding-view-progressDots", children: [0, 1, 2, 3, 4].map(index => ((0, jsx_runtime_1.jsx)("div", { className: `onboarding-view-dot ${index === currentSlide ? 'onboarding-view-dotActive' : ''}`, onClick: () => handleDotClick(index) }, index))) }), (0, jsx_runtime_1.jsx)(button_1.Button, { className: "onboarding-view-navButton", variant: "default", onClick: nextSlide, children: currentSlide === 4 ? ('Get Started') : ((0, jsx_runtime_1.jsx)("svg", { width: "16px", height: "16px", strokeWidth: "2", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0, jsx_runtime_1.jsx)("path", { d: "M9 6L15 12L9 18", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }) })) })] })] }) }));
};
exports.OnboardingView = OnboardingView;
