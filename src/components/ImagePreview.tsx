import React, { useState } from "react";
import { getImageUrl } from "@/utils/utils";

interface ImagePreviewProps {
  src?: string;
  alt?: string;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({
  src = "https://placehold.co/1920x1080",
  alt = "This is a placeholder",
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleClick = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="relative aspect-video">
      <img
        src={getImageUrl(src)}
        alt={alt}
        className="h-full w-full cursor-pointer rounded-md border-2 border-black object-cover hover:shadow-neo"
        loading="lazy"
        onClick={handleClick}
      />
      {isFullscreen && (
        <div
          className="fixed bottom-0 left-0 right-0 top-0 z-50 flex cursor-pointer items-center justify-center bg-black bg-opacity-75"
          onClick={handleClick}
        >
          <img
            src={getImageUrl(src)}
            alt={alt}
            className="max-h-full max-w-full"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
};

export default ImagePreview;
