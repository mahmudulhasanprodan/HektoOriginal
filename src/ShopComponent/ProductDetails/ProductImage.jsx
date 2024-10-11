import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";


const ProductImage = ({ProductDataImage}) => {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#e5e7eb",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          position: "absolute",
          right: "-20px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer"
        }}
        onClick={onClick}
      >
        <div className="flex items-center justify-center h-full cursor-pointer">
          <MdArrowForwardIos className="font-bold text-2xl cursor-pointer"/>
        </div>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#e5e7eb",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          position: "absolute",
          left: "-20px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <div className="flex items-center justify-center h-full cursor-pointer">
          <MdArrowBackIosNew className="font-bold text-2xl cursor-pointer" />
        </div>
      </div>
    );
  }


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <>
      <Slider {...settings}>
        {ProductDataImage.images?.map((item, index) => (
          <div key={item}>
            <div className="flex items-center justify-center w-full">
              <picture>
                <img src={item} alt={item} className="w-[430px] h-[400px]" />
              </picture>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default ProductImage
