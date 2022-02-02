import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import "./main.css"


const SingleCard = ({imgSrc , id , title}) => {
    const images = [
        {
          original: imgSrc,
          thumbnail: imgSrc,
        },
        {
          original: imgSrc,
          thumbnail: imgSrc,
        },
        {
          original: imgSrc,
          thumbnail: imgSrc,
        },
        {
            original: imgSrc,
            thumbnail: imgSrc,
        },
        {
            original: imgSrc,
            thumbnail: imgSrc,
        },
      ];
    return (
        <div className="singleImages" id={id}>
            <ImageGallery items={images} />
        </div>
    );
};



export default SingleCard;