import React, { useEffect, useRef, useState } from 'react';
import '../Pages/Users/Form.css';

const PageImage = () => {
  const AllImage = [
    '/Images/bigCloths1.jpg',
    '/Images/bigCloth2.jpg',
    '/Images/bigCloth3.jpg',
    '/Images/bigCloth4.jpg',
    '/Images/bigCloth5.jpg',
    '/Images/bigCloth6.jpg',
  ];

  const imageGroupRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % AllImage.length); // Cycle through images
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-container">
      <div
        className="image-group"
        ref={imageGroupRef}
        style={{
          transform: `translateX(-${currentIndex * 600}px)`,
        }}
      >
        {AllImage.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default PageImage;
