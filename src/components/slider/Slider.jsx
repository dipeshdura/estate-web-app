import React, { useState } from 'react'
import './slider.scss';
import arrow from "../../assets/arrow.png";
const Slider = ({images}) => {
    const [imageIndex, setImageIndex] =useState(null);

    const changeSlide =(direction)=>{
        if(direction==="left"){
            if(imageIndex ===0){
                setImageIndex(images.length-1)
            }else{
                setImageIndex(imageIndex-1)
            }
        }else{
            if(imageIndex === images.length-1){
                setImageIndex(0)
            }else{
                setImageIndex(imageIndex+1)
            }
        }
    }

  return (
   <div className="slider">
    {imageIndex !==null &&(
    <div className="fullSlider">
        <div className="arrow" role="button" onClick={()=>changeSlide("left")}>
            <img src={arrow} alt={arrow} />
        </div>
        <div className="imgContainer">
        <img src={images[imageIndex]} alt={images[imageIndex]} />
        </div>
        <div className="arrow" role="button" onClick={()=>changeSlide("right")}>
            <img src={arrow} className="right" alt={arrow} />
        </div>
        <div className="close" role="button" onClick={()=>setImageIndex(null)}>X</div>
    </div>
    )}


    <div className="bigImage">
        <img 
        src={images[0]}
        alt={images[0]}
        onClick={()=>setImageIndex(0)}
         />
    </div>
    <div className="smallImages">
        {images.slice(1).map((image,index)=>(
            <img
            src={image}
            alt={image}
            key={index}
            onClick={()=>setImageIndex(index+1)}
            />
        ))}
        </div> 
   </div>
  )
}

export default Slider