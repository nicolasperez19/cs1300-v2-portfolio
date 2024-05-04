import { ChatCenteredText } from "@phosphor-icons/react";
import { ReactNode } from "react";

interface BlockquoteProps {
    children: ReactNode;
  }

const Blockquote: React.FC<BlockquoteProps> = ({children}) => {
    return (
        <div className="grid grid-cols-1 gap-8 mb-12">
            <article className="bg-secondary text-primary p-6 border-2 border-black rounded-md">
                <ChatCenteredText size={48} weight="fill" className="mb-4" />
                <blockquote>
                    <p className="text-lg mb-4">{children}</p>
                </blockquote>
            </article>
        </div>
    );
  };
  
  export default Blockquote;