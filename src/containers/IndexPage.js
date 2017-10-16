import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import ReactS3Uploader from 'react-s3-uploader';
import Input from '../components/Input';
import styles from './indexPage.less';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
        // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <div>
        <div className={'{styles.codeStyleLineBreaks}'}>
          <NavBar />
          <div className={'{styles.App-header} fixedTop'}>
            <p className={'{styles.codeStyleLineBreaks}'}>
              <code className={styles.codeStyleLineBreaks}>Index Page</code>
            </p>
            <button onClick={this.handleClick}>
              {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
            <ReactS3Uploader />
            <Input />
          </div>
        </div>
      </div>
    );
  }
}

IndexPage.propTypes = {

};

export default IndexPage;
