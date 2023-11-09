import React, { forwardRef, CSSProperties} from "react";
import './column.css'

type Props = {
    children?: React.ReactNode;
    className?: string;
    style?: CSSProperties;
    id?: string;
};

export const Column = forwardRef<HTMLDivElement, Props> (({ children, className = '', style = {}, id }, ref) => (
    <div ref={ref} id={id} className={`column ${className}`} style={{...style}}>
        {children}
    </div>
));

