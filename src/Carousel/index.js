import React, { Component } from 'react'
import Slide from './Slide';
import Slider from './Slider';



export default class Carousel extends Component {
    constructor(props){
        super(props);
        this.state = {
            index: 0,
            width: 300,
            height: 300,
            slides: [
                {
                    title: "panda",
                    src: "https://tinypng.com/images/social/website.jpg"
                },
                {
                    title: "mushroom",
                    src: "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270"
                },
                {
                    title: "book",
                    src: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
                },
            ]
        };
    };
    setFullScreenMode = (isFullScreen) => {
        const {width, height } = this.state;
        if (isFullScreen) {
            this.setState ({width: window.innerWidth, height: window.innerHeight,});}
        else {this.setState ({width: 300 , height: 300})}
        }
        

    setNextImage= ()=> {
        const { index, slides } = this.state;
        this.setState({index: index+1 % slides.length} );
    }
    setPrevImage= ()=> {
        const { index, slides } = this.state;
        this.setState({index: (index-1 + slides.length) % slides.length});
    }
    render() {
        const {index, slides} = this.state;
        return (
            <div>
                <Slide currentImage={slides[index]} />
                <Slider next={this.setNextImage} prev={this.setPrevImage}  setFullScreenMode={this.setFullScreenMode} />                
            </div>
        );
    }
}