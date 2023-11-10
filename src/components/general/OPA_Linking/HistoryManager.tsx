import React, { useEffect } from 'react';

const goBack = () => {
    const backStack = JSON.parse(localStorage.getItem('backStack')) || [];
    const forwardStack = JSON.parse(localStorage.getItem('forwardStack')) || [];
    const lastPosition = backStack.pop();

    if (lastPosition !== undefined) {
        forwardStack.push(window.scrollY);
        window.scrollTo(0, lastPosition);
    }

    console.log(forwardStack)
    console.log(backStack)
    localStorage.setItem('backStack', JSON.stringify(backStack));
    localStorage.setItem('forwardStack', JSON.stringify(forwardStack));
};

const goForward = () => {
    const backStack = JSON.parse(localStorage.getItem('backStack')) || [];
    const forwardStack = JSON.parse(localStorage.getItem('forwardStack')) || [];
    const nextPosition = forwardStack.pop();

    if (nextPosition !== undefined) {
        backStack.push(window.scrollY);
        window.scrollTo(0, nextPosition);
    }

    console.log(forwardStack)
    console.log(backStack)
    localStorage.setItem('backStack', JSON.stringify(backStack));
    localStorage.setItem('forwardStack', JSON.stringify(forwardStack));
};

const NavigationShortcuts = () => {

    useEffect(() => {
        const handleKeyDown = (event) => {
            // Check for 'Alt + B' for goBack
            if (event.key === 'o') {
                console.log("backwards")
                goBack();
            }

            // Check for 'Alt + F' for goForward
            if (event.key === 'p') {
                console.log("forward")
                goForward();
            }
        };

        // Add event listener
        window.addEventListener('keydown', handleKeyDown);

        // Clean up
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [goBack]);

    return null; // This component does not render anything
};

export default NavigationShortcuts;
