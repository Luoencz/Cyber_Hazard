import Introduction from './pages/introduction'
import './styles/index.css'
import {TopBar} from "./components/pwa/TopBar/TopBar";
import {Column} from "./components/general/Column/Column";
import {Router} from "react-router-dom";
import {BoundedRootColumn} from "./components/pwa/BoundedRootColumn/BoundedRootColumn";
import {useEffect, useState} from "react";
import HistoryManager from "./components/general/OPA_Linking/HistoryManager";

const PWA = () => {
    const [currentHash, setCurrentHash] = useState(window.location.hash);
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    // Listen for hash changes
    useEffect(() => {
        const handleHashChange = () => {
            setCurrentHash(window.location.hash);
        };

        window.addEventListener('hashchange', handleHashChange);

        // After initial setup, set isInitialLoad to false
        setIsInitialLoad(false);

        // Cleanup
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    // Handle highlighting
    useEffect(() => {
        if (!isInitialLoad && currentHash) {
            const element = document.getElementById(currentHash.slice(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });

                // Add the highlight effect
                element.classList.add('blink-effect');

                // Remove highlight and overlay after 2 seconds
                setTimeout(() => {
                    element.classList.remove('blink-effect');
                }, 4000);
            }
        }
    }, [currentHash, isInitialLoad]);

    return (
        <div>
            <TopBar className='black-background dashed-border'> This is my Topbar! </TopBar>
            <HistoryManager/>
            <BoundedRootColumn>
                    <Column>
                        <Introduction/>
                    </Column>
            </BoundedRootColumn>

        </div>
    )
}

export default PWA;

