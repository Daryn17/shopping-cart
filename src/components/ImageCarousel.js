import { Component } from "react";
import { Carousel } from 'react-responsive-carousel';

import '../styles/imageCarousel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

class ImageCarousel extends Component {
  render() {
    const { imageCarousel } = this.props
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
        {imageCarousel.map(image => (
          <div>
            <img className="image-size" src={image.src} alt={image.name} />
            <p className="legend">{image.name}</p>
          </div>
        ))}
      </Carousel>
    )
  }
}

export default ImageCarousel