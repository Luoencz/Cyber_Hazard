import './bounded-root-column.css'
import React, {CSSProperties, ReactNode, useEffect, useState} from "react";

type BoundaryProps = {
    inverse: boolean,
};

type ColumnProps = {
    children?: ReactNode
    className?: string;
    style?: CSSProperties
}

const Boundary: React.FC<BoundaryProps> = ({inverse}) => inverse
    ? <div className="right-striped-background"/>
    : <div className="left-striped-background"/>

export const BoundedRootColumn: React.FC<ColumnProps> = ({children, className, style}) => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const breakpoint: number = 700;

    useEffect(() => {
        const handleResizeWindow = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);

        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    return (
        <div className={`bounded-root-column ${className}`} style={{...style}}>
            {windowWidth > breakpoint ? <Boundary inverse={false}/> : null}
            {children}
            {windowWidth > breakpoint ? <Boundary inverse={true}/> : null}
        </div>
    )
}