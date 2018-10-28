import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar, Text, Dimensions } from 'react-native';

import style from './style';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    };
  }

  onLayout = () => {
    this.setState({
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    });
  };

  render() {
    return (
      <View>
        <View style={style.statusBar} />
        <View style={{ ...style.viewStyle }}>
          <StatusBar backgroundColor={'#F3F4F5'} barStyle="dark-content" hidden={false} />
          <View style={style.headerContainerStyle}>
            <View style={style.leftIcon}>{this.props.leftIcon ? this.props.leftIcon() : null}</View>
            <Text style={style.textStyle}>{this.props.text}</Text>
            <View style={style.rightIcon}>
              {this.props.rightIcon ? this.props.rightIcon() : null}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

Header.propTypes = {
  text: PropTypes.string,
  hideStatusBar: PropTypes.bool,
  logo: PropTypes.bool,
  rightIcon: PropTypes.func,
  leftIcon: PropTypes.func,
  statusBarStyle: PropTypes.oneOf(['default', 'light-content', 'dark-content']),
};

export default Header;
