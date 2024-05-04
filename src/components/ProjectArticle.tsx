import { ReactNode } from "react";

interface ProjectArticleProps {
    children: ReactNode;
}

const ProjectArticle: React.FC<ProjectArticleProps> = ({children}) => {
    return (<>{children}</>);
}

export default ProjectArticle;