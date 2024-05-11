import { ReactNode } from "react";

interface ProjectArticleProps {
    children: ReactNode;
}

const ProjectArticle: React.FC<ProjectArticleProps> = ({children}) => {
    // return (<div className="prose">{children}</div>);
    return (<>{children}</>);
}

export default ProjectArticle;