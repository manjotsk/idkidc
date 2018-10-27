import React from 'react';
import LottieView from 'lottie-react-native';

export default class Thumb extends React.Component {
  componentDidUpdate() {
    if (this.props.play) {
      this.animation.play();
    } else {
      this.animation.reset();
    }
  }

  render() {
    return (
      <LottieView
        ref={animation => {
          this.animation = animation;
        }}
        autoPlay={false}
        source={require('../../assets/healthtap_spinner.json')}
      />
    );
  }
}
