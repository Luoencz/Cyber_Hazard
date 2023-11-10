import { Element, Events } from 'react-scroll';
import { useEffect, useState } from 'react';

export default function ScrollHighlight({ name, children }) {
    const [highlight, setHighlight] = useState(false);

    useEffect(() => {
        const onStartScroll = (to, element) => {
            if (element && element.name === name) {
                setHighlight(true);
                setTimeout(() => setHighlight(false), 1000);
            }
        };

        Events.scrollEvent.register('begin', onStartScroll);

        return () => {
            Events.scrollEvent.remove('begin');
        };
    }, [name]);

    return (
        <Element name={name} className={highlight ? 'highlight' : ''}>
            {children}
        </Element>
    );
}