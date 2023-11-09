import * as React from 'react';
import selectText from "../../../tsx_scripts/SelectTextByID";
import {CSSProperties} from "react";
import './dice-roller.css'

interface DiceRollProps {
    ids: string[];
    style?: CSSProperties
}

export const DiceRoll: React.FC<DiceRollProps> = ({ids, style}) => {
    const [rolling, setRolling] = React.useState(false);
    const [roll, setRoll] = React.useState<number | null>(null);
    const [idle, setIdle] = React.useState(true);
    const [firstClick, setFirstClick] = React.useState(true);

    let idleTimer: NodeJS.Timeout;

    React.useEffect(() => {
        let rollInterval: NodeJS.Timeout;
        if (rolling) {
            setIdle(false);
            if (firstClick) setFirstClick(false);
            rollInterval = setInterval(() => {
                setRoll(Math.floor(Math.random() * ids.length) + 1);
            }, 100);

            setTimeout(() => {
                clearInterval(rollInterval);
                setRolling(false);
            }, 1000);
        } else if (!firstClick){
            idleTimer = setTimeout(() => {
                setIdle(true)
                setRoll(null)
            }, 5000);
        }
        return () => {
            clearInterval(rollInterval);
            clearTimeout(idleTimer);
        };
    }, [ids, rolling, firstClick])

    React.useEffect(() => {
        if (roll !== null && !rolling) {
            const element = document.getElementById(ids[roll-1]);
            if (element) {
                selectText(ids[roll-1])
            }
        }
    }, [ids, roll, rolling]);

    return (
        <button className={`body-Cygnito dice-roller dice-dashed-border clickable`} style={{...style}} onClick={() => setRolling(true)}>
           {idle ? `d${ids.length}` : roll}
        </button>
    );
};