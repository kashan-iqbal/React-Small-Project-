import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "../Component/imageSlider/Style.css";

const ImageSliderReapeat = () => {
  const [img, setImg] = useState();
  const [slide, setSlide] = useState(0);

  const getImage = async () => {
    try {
      const reslut = await fetch(`https://picsum.photos/v2/list?&limit=10`);
      const data = await reslut.json();
      if (data) setImg(data);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImage();
  }, []);

  const handleNext = () => {
    setSlide((prev) => (prev === img.length ? 0 : prev + 1));
    console.log(slide, `i am slide`);
  };

  const handlePrev = () => {
    setSlide((prev) => (prev === 0 ? img.length - 1 : prev - 1));
    console.log(slide, `i am pre`);
  };
  console.log(img);

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handlePrev}
      />
      {img &&
        img.map((i, idx) => {
          return (
            <img
              src={i.download_url}
              alt={i.download_url}
              key={i.id}
              height="400px"
              width="400px"
              className={idx === slide ? "current-image" : "hide-current-image"}
            />
          );
        })}

      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handleNext}
      />
      <br/>
      {slide}
      {img &&
        img.map((_, idx) => (
          <p key={idx} onClick={() => setSlide(idx)}>
             o 
          </p>
        ))}
    </div>
  );
};

export default ImageSliderReapeat;
