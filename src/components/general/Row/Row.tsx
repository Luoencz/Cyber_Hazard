import {CSSProperties} from "react";
import './row.css'

type Props = {
    children?: React.ReactNode;
    className?: string;
    style?: CSSProperties;
};

const Row: React.FC<Props> = ({ children, className = '', style = {} }) => (
    <div className={`row ${className}`} style={{...style }}>
        {children}
    </div>
);

