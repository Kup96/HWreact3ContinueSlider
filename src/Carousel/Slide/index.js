import React, { Component } from 'react'

export class Slide extends Component {
    constructor(props){
        super(props);
        const img = new Image();
        this.state= {
            img,
        }
    }
    load = () => {
        const {img} = this.state;
        const {currentImage: {src}} = this.props;
        img.src = src;
    }
    componentDidMount(){ this.load(); }
    render() {
        const {img} = this.state;
        const {currentImage} = this.props;
        return (
            
            <div>
                <img src={currentImage.src}>
                <figcaption>{currentImage.title}</figcaption>
                </img>                
            </div>

        )
    }
}

export default Slide;
