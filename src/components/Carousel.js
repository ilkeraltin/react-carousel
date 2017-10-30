import React from 'react';
import Slide from './Slide';

import RightArrow from 'react-icons/lib/fa/chevron-right';
import LeftArrow from 'react-icons/lib/fa/chevron-left';

class Carousel extends React.Component {
    state = {
        images: [],
        loaded: false,
        activeItemIndex: 0,
        showControls: false,
        showIndicators: false,
        auto: false,
        width: undefined,
        arrowColor: "#ffffff"
    }

    showTools = () => {
        this.setState(() => ({
            showControls: true,
            showIndicators: true,
        }));
    }

    hideTools = () => {
        if (this.state.width > 400) {
            this.setState(() => ({
                showControls: false,
                showIndicators: false,
            }));   
        }
    }

    

    buildSlides = () => {
        if (this.state.loaded) {
            return (
                <ul className="carousel-slides">
                    {this.state.images.map((image, index) => {
                        return (
                            <Slide
                                itemNo={index}
                                key={index}
                                data={image}
                                active={this.state.activeItemIndex === index ? true : false } 
                            />
                        );
                    })}
                </ul>

            )
        }
    }

    indicators = () => {
        if (this.state.showIndicators) {
            return (
                <div className="carousel-dots">
                    {
                        this.state.images.map((image, index) => {
                            return (
                                <li 
                                key={index}
                                id={"dot-" + index}
                                className={this.state.activeItemIndex === index ? "carousel-dots__dot active" : "carousel-dots__dot" }
                                onClick={() => this.goToSlide(index)}
                                >
                                </li>
                            )
                        })
                    }
            </div>
            );
        }
    }

    controls = () => {
        if (this.state.showControls) {
            return (
                <div className="carousel-controls">
                    <a className="carousel-controls__prev" onClick={this.prevSlide}>
                        <LeftArrow size={30} color={this.state.arrowColor}/>
                    </a>
                    <a className="carousel-controls__next" onClick={this.nextSlide}>
                        <RightArrow size={30} color={this.state.arrowColor}/>
                    </a>
                </div>
            );
        }
    }



    nextSlide = () => {
        if (this.state.activeItemIndex === this.state.images.length - 1) {
            this.setState((prevState) => ({
                activeItemIndex: 0
            }));
        } else {
            this.setState((prevState) => ({
                activeItemIndex: prevState.activeItemIndex + 1
            }));
        }
    }

    goToSlide = (index) => {
        if (this.state.width > 400) {
            this.setState(() => ({
                activeItemIndex: index
            }));  
        }
    }

    prevSlide = () => {
        if (this.state.activeItemIndex === 0) {
            this.setState((prevState) => ({
                activeItemIndex: prevState.images.length - 1
            }));
        } else {
            this.setState((prevState) => ({
                activeItemIndex: prevState.activeItemIndex - 1
            }));
        }
    }

    updateDimensions = () => {
        let w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = documentElement.clientWidth || body.clientWidth;

        this.setState(() => ({
            width,
        }));

        return { width }
    }

    autoPlay = (delay) => {
        setInterval(this.nextSlide, delay !== undefined ? delay : 3000 );
    }

    componentDidMount () {
        const screenSize = this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);

        if (screenSize.width < 769) {
            this.setState(() => ({
                showControls: true,
                showIndicators: true,
            }));
        }

        if (this.props.data) {
                this.setState(() => ({
                    images: this.props.data,
                    loaded: true,
                    auto: this.props.auto,
                    delay: this.props.delay,
                    arrowColor: this.props.arrowColor !== undefined ? this.props.arrowColor: "#ffffff"
                }))
        }
        if (this.props.auto) {
            this.autoPlay(this.props.delay);
        }
    }

    componentWillMount () {
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount () {
        window.removeEventListener("resize", this.updateDimensions);
    }

    render() {
        return (
            <div
                className="carousel"
                onMouseEnter={this.showTools}
                onMouseLeave={this.hideTools}
            >
                {this.controls()}
                {this.buildSlides()}
                {this.indicators()}
            </div>
        );
    }
}

Carousel.defaultProps = {

}

export default Carousel;