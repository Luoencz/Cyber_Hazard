import './overflow-border.css'
import {ReactNode} from "react";

type Props = {
    children?: ReactNode
}

export const OverscrollBorder:React.FC<Props> = ({ children }) => {
    return (
        <div className="overflowing-border">
            {children}
        </div>
    );
};
