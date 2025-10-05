"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorBoundary = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
class ErrorBoundary extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    componentDidCatch(error, errorInfo) {
        console.error('React Error Boundary caught an error:', error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return ((0, jsx_runtime_1.jsxs)("div", { className: "error-boundary", children: [(0, jsx_runtime_1.jsx)("h2", { children: "Something went wrong" }), (0, jsx_runtime_1.jsx)("button", { onClick: () => window.location.reload(), children: "Reload Application" })] }));
        }
        return this.props.children;
    }
}
exports.ErrorBoundary = ErrorBoundary;
