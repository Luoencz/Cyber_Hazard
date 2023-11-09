import './topbar.css'
import {ReactNode} from "react";

type Props = {
    children: ReactNode[];
    className?: string;
};

export const TopBar: React.FC<Props> = ({children, className = ''}) => (
    <div className={`topbar ${className}`}>
        {children}
    </div>
);