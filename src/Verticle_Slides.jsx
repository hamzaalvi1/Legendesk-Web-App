import React from "react"
import Slider from "react-slick";
const VerticleSlider = ({children})=>{
 
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        beforeChange: function(currentSlide, nextSlide) {
          console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function(currentSlide) {
          console.log("after change", currentSlide);
        }
      };


 return(
     <div>
         <Slider {...settings}> 
        {children}
        </Slider>
     </div>
 )

}
export default VerticleSlider