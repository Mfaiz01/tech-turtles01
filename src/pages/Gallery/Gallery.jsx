import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import './Gallery.css';

const WSPGallery = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setFadeIn(false); // Reset fadeIn state
    setTimeout(() => setOpenModal(false), 500); // Wait for the animation to complete before closing modal
  };

  const prevSlide = () => {
    setSlideNumber((prevNumber) => (prevNumber === 0 ? galleryImages.length - 1 : prevNumber - 1));
    setFadeIn(true);
  };

  const nextSlide = () => {
    setSlideNumber((prevNumber) => (prevNumber + 1 === galleryImages.length ? 0 : prevNumber + 1));
    setFadeIn(true);
  };

  useEffect(() => {
    if (openModal) {
      setFadeIn(true);
    }
  }, [openModal]);

  return (
    <div>

      {openModal &&
        <div className={`sliderWrap ${fadeIn ? 'fade-in' : ''}`}>
          <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal} />
          <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide} />
          <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextSlide} />
          <div className='fullScreenImage'>
            <img src={galleryImages[slideNumber].img} alt='' />
          </div>
        </div>
      }

      <div className='galleryWrap'>
        {galleryImages &&
          galleryImages.map((slide, index) => (
            <div
              className={`single ${fadeIn ? 'fade-in' : ''}`}
              key={index}
              onClick={() => handleOpenModal(index)}
            >
              <img src={slide.img} alt='' />
            </div>
          ))}
      </div>
    </div>
  );
};

export default WSPGallery;
