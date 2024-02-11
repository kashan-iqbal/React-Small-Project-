import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Style.css";

const ImageSlider = ({ url, limit }) => {
  const [image, setImage] = useState([]);
  const [slide, setSlide] = useState(1);

  const getData = async (url) => {
    try {
      const responce = await fetch(`${url}?page=${1}&limit=${limit}`);
      const data = await responce.json();
      console.log(data);
      setImage(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData(url);
    // eslint-disable-next-line
  }, []);

  console.log(slide);

  const handlePrev = () => {
    setSlide(slide === 1 ? image.length : slide - 1);
  };
  const handleNext = () => {
    setSlide(slide === image.length ? 1 : slide + 1);
  };

  return (
    <>
      <h3>image slider</h3>
      <div className="container">
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={handlePrev}
        />
        {image &&
          image.map((img, idx) => {
            const newIdx = idx + 1;
            return (
              <img
                key={img.id}
                src={img.download_url}
                alt={img.url}
                height="400px"
                width="400px"
                className={
                  newIdx === slide ? "current-image" : "hide-current-image"
                }
              />
            );
          })}
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={handleNext}
        />
        <span className="circle-indicators">
          {image && image.length
            ? image.map((_, idx) => {
                const newIdx = idx + 1;
                return (
                  <button
                    key={idx}
                    onClick={() => setSlide(newIdx)}
                    className={
                      slide === newIdx
                        ? "current-indicator "
                        : "current-indicator inactive-indicator"
                    }
                  ></button>
                );
              })
            : null}
        </span>
      </div>
    </>
  );
};

export default ImageSlider;
