import React from 'react';


import './slider.css'


class Slider extends React.Component {
    constructor() {
      super();
      this.state = {
        activeIndex: 0
      }
      this.onNextClick = this.onNextClick.bind(this);
      this.onPrevClick = this.onPrevClick.bind(this);
    }
    onNextClick() {
      if(this.state.activeIndex < 4){
        this.setState({activeIndex: this.state.activeIndex + 1});
      } else {
        this.setState({activeIndex: 0})
      } 
    }
    
      onPrevClick() {
        if(this.state.activeIndex > 0) {
          this.setState({activeIndex: this.state.activeIndex - 1});
        } else {
          this.setState({activeIndex: 4})
        }
    }
    render() {
      let sliderStyle ={
        transform:`translateX(${this.state.activeIndex * -100}%)`,
        transition: '0.2s'
      }
      return (
        <div className='container'>
          <div className='buttons'>
            <button onClick={this.onPrevClick}>◀</button>
            <button onClick={this.onNextClick}>▶</button>
          </div>
          <ol className='slide-container' style={sliderStyle}>
            <li className="slide-container_item" key={0}>{1}</li>
            <li className="slide-container_item" key={1}>{2}</li>
            <li className="slide-container_item" key={2}>{3}</li>
            <li className="slide-container_item" key={3}>{4}</li>
            <li className="slide-container_item"key={4}>{5}</li>
          </ol>
      </div>
      );
    }
  }

export default Slider