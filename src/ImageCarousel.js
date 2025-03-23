import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ImageCarousel.css";

const ImageCarousel = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  React.useEffect(() => {
    const timer = setInterval(nextImage, interval);
    return () => clearInterval(timer);
  }, [currentIndex, interval]);

  return (
    <div className="carousel">
      <button className="prev" onClick={prevImage}>
        &lt;
      </button>
      <img
        src={images[currentIndex]}
        alt="carousel"
        className="carousel-image"
      />
      <button className="next" onClick={nextImage}>
        &gt;
      </button>
    </div>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.array.isRequired,
  interval: PropTypes.number,
};

ImageCarousel.defaultProps = {
  interval: 3000,
};

export default ImageCarousel;
