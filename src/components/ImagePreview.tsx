import React, { useState } from 'react';

interface ImagePreviewProps {
  src?: string;
  alt?: string;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ src = "https://placehold.co/1920x1080", alt = "This is a placeholder" }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleClick = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="relative w-full h-full">
      <img
        src={src}
        alt={alt}
        className="cursor-pointer border-2 border-black rounded-md hover:shadow-neo aspect-video"
        onClick={handleClick}
      />
      {isFullscreen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={handleClick}
        >
          <img src={src} alt={alt} className="max-h-full max-w-full" />
        </div>
      )}
    </div>
  );
};

export default ImagePreview;