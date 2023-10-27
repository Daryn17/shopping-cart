import { Component } from "react";
import { Carousel } from 'react-responsive-carousel';

import '../styles/imageCarousel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

class ImageCarousel extends Component {
  render() {
    const { imagesCarousel } = this.props
    return (
      <Carousel
        className="custom-carousel"
        autoPlay
        infiniteLoop
        auto
        interval={3000}
        showArrows={false}
        showStatus={false}
        showThumbs={false}>
        {imagesCarousel.map(image => (
          <div key={image.name}>
            <img className="image-size" src={image.src} alt={image.name} />
            <p className="legend">Sofia's</p>
          </div>
        ))}
      </Carousel>
    )
  }
}

export default ImageCarousel