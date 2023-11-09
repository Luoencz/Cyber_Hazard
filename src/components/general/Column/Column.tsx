import React, { forwardRef, CSSProperties} from "react";
import './column.css'

type Props = {
    children?: React.ReactNode;
    className?: string;
    style?: CSSProperties;
};

export const Column = forwardRef<HTMLDivElement, Props> (({ children, className = '', style = {} }, ref) => (
    <div ref={ref} className={`column ${className}`} style={{...style}}>
        {children}
    </div>
));

