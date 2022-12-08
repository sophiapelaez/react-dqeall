import React, { useState } from 'react';
import { Discography } from './Discography.js';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Carousel = ({ album }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  return (
    <section id="carousel">
      <h1 id="text-2"> Click to listen </h1>

      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {Discography.map((album, index) => {
        return (
          <div id="album-display">
            {index === current && (
              <a href={album.link}>
                <img id="album-cover" src={album.image} />
              </a>
            )}
          </div>
        );
      })}
    </section>
  );
};
export default Carousel;
