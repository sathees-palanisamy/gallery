import React from 'react';
import { useStep } from 'react-hooks-helper';

const ImageRenderer = ({ initialStep, images }) => {
  const { step, navigation, index, isPaused, autoAdvanceDuration } = useStep({
    initialStep,
    autoAdvanceDuration: 5000,
    steps: images,
  });
  const { src, alt = '' } = step;

  return (
    <div className="imageRenderer">
      <img alt={alt} src={src} />
    </div>
  );
};

export default ImageRenderer;
