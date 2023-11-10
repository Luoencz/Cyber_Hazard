import React, { useEffect } from 'react';

interface ScrollManagerProps {
    children: React.ReactNode;
}

const ScrollManager: React.FC<ScrollManagerProps> = ({ children }) => {
    useEffect(() => {
        const handleAnchorClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
                event.preventDefault();
                const id = target.getAttribute('href')?.substring(1);
                const element = document.getElementById(id!);
                if (element) {
                    window.history.pushState({}, '', '#' + id);
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);

        return () => {
            document.removeEventListener('click', handleAnchorClick);
        };
    }, []);

    return <>{children}</>;
};

export default ScrollManager;
