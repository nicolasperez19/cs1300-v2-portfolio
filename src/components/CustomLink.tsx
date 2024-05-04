import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface CustomLinkProps {
    className?: string;
    to: string;
    target?: string;
    rel?: string;
    children: ReactNode;
    onClick?: () => void;
}

const CustomLink: React.FC<CustomLinkProps> = ({className = "text-blue-400 hover:underline hover:underline-offset-8", to, children, target, rel, onClick}) => {
    return (
        to.match(/^(https?:)?\/\//) ? <a className={className} href={to} target={target} rel={rel} onClick={onClick}>{children}</a> :
        <Link className={className} to={to} onClick={onClick}>{children}</Link>
    );
}

export default CustomLink;