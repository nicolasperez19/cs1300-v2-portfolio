import { ReactNode } from "react";
import ImagePreview from "./ImagePreview"

interface SectionProps {
    title: string;
    reverse?: boolean;
    children: ReactNode;
    image?: string;
    alt?: string;
}

const Section: React.FC<SectionProps> = ({title, reverse = false, image,
    alt, children}) => {
    return (
            <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' :'md:flex-row'} items-center mb-12`}>
                <div className={`flex-1 ${reverse ? 'md:ml-12' :'md:mr-12'} mb-12 mb-0`}>
                    <h3 className="text-4xl font-display font-bold mb-8">{title}</h3>
                    {children}
                </div>
                <div className="flex-1 w-full h-full max-h-[600px]">
                    <ImagePreview src={`/cs1300-v2-portfolio/assets/${image}`} alt={alt} />
                </div>
            </div>
        );
}

export default Section;