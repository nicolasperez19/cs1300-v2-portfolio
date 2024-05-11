import { ReactNode } from "react";
import ImagePreview from "./ImagePreview";

interface SectionProps {
  title: string;
  reverse?: boolean;
  children: ReactNode;
  image?: string;
  alt?: string;
}

// Slot component
// const CardHeader = (props) => { /* ...*/ }
// function CardFooter = (props) => { /* ... */ }
// function Card = (props) => { /* ... */ }

// Card.Header = CardHeader;
// Card.Footer = CardFooter;

// <Card>
//   <Card.Header>...</Card.Header>
//   <p>Content</p>
//   <Card.Footer>...</Card.Footer>
// </Card>

const Section: React.FC<SectionProps> = ({
  title,
  reverse = false,
  image,
  alt,
  children,
}) => {
  return (
    <div
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} mb-12 items-center`}
    >
      <div className={`flex-1 ${reverse ? "md:ml-12" : "md:mr-12"} mb-0 mb-12`}>
        <h3 className="mb-8 font-display text-4xl font-bold">{title}</h3>
        {children}
      </div>
      <div className="h-full max-h-[600px] w-full flex-1">
        <ImagePreview src={image} alt={alt} />
      </div>
    </div>
  );
};

export default Section;
