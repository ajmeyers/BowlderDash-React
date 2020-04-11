import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import bowlingcarousel1 from '../img/bowling_carousel1.jpg';
import bowlingcarousel2 from '../img/bowling_carousel2.jpg';
import bowlingcarousel3 from '../img/bowling_carousel3.jpg';

class CarouselBowl extends Component {
    render() {
        return (
            <Carousel width="700px" useKeyboardArrows autoPlay infiniteLoop>
                <div>
                    <img src={bowlingcarousel1} alt="bc1" />
                    <p className="legend">Bowling!</p>
                </div>
                <div>
                    <img src={bowlingcarousel2} alt="bc2" />
                    <p className="legend">Arcade!</p>
                </div>
                <div>
                    <img src={bowlingcarousel3} alt="bc3" />
                    <p className="legend">Parties!</p>
                </div>
            </Carousel>
        );
    }
}

export default CarouselBowl;