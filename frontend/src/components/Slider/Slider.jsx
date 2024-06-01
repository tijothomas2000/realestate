import { useState } from 'react'
import './Slider.scss';

export default function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);
  function changeSlide(direction) {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1)
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1)
      }
    }
  }
  return (
    <div className='slider'>
      {imageIndex !== null && <div className="mainslider">
        <div className="arrow" onClick={() => changeSlide("left")}>
          <img src="/arrow.png" alt="" />
        </div>
        <div className="displayimage">
          <img src={images[imageIndex]} alt="" />
        </div>
        <div className="arrow" onClick={() => changeSlide("right")}>
          <img src='/arrow.png' alt="" className='right' />
        </div>
        <div className="closebutton" onClick={() => setImageIndex(null)}>
          X
        </div>
      </div>}
      <div className="mainimage">
        <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallimages">
        {images.slice(1).map((image, index) => (
          <img src={image} key={index} onClick={() => setImageIndex(index + 1)} />
        ))}
      </div>
    </div>
  )
}
