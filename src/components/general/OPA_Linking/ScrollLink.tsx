import React from 'react';

const ScrollLink = ({ toId, children }) => {
    // Function to save the current scroll position
    const saveScrollPosition = () => {
        const scrollPosition = window.scrollY;
        const backStack = JSON.parse(localStorage.getItem('backStack')) || [];

        /*
        const viewportHeight = window.innerHeight;

        // Check if the last position is within half the viewport height
        if (backStack.length > 0) {
            const lastPosition = backStack[backStack.length - 1];
            const distance = Math.abs(scrollPosition - lastPosition);

            if (distance < viewportHeight / 2) {
                // If within half viewport, pop the last position
                backStack.pop();
            }
        } */

        backStack.push(scrollPosition);
        const forwardStack = [];

        localStorage.setItem('backStack', JSON.stringify(backStack));
        localStorage.setItem('forwardStack', JSON.stringify(forwardStack));
    };

    // Function to scroll to the target component
    const scrollToComponent = () => {
        saveScrollPosition();
        const element = document.getElementById(toId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <a style={{color: '#C91F37', textDecoration: 'underline'}} onClick={scrollToComponent}>
            {children}
        </a>
    );
};

export default ScrollLink;