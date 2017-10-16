import React, { Component } from 'react';
import { render } from 'react-dom';

class SplitScreenSlider extends Component {
  render() {
    return (
      <section id="wrapper" className="skewed">
      <div className="layer bottom">
        <div className="content-wrap">
        <div className="content-body">
          <h1>Look Sharp</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quisquam temporibus dolore vero reiciendis atque debitis. Sequi at consequatur deserunt?</p>
        </div>
        <img src="../images/chef.jpg" alt="" />
      </div>
      </div>

      <div className="layer top">
        <div className="content-wrap">
        <div className="content-body">
            <h1>Stay Cool</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quisquam temporibus dolore vero reiciendis atque debitis. Sequi at consequatur deserunt?</p>
          </div>
        <img src="../images/event.jpg" alt="" />
      </div>
      </div>

      <div className="handle" />
    </section>
    );
  }
}

export default SplitScreenSlider;
