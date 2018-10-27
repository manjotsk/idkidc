import { Platform } from 'react-native';
import { Constants } from 'expo';

const style = {
  statusBar: {
    backgroundColor: '#F3F4F5',
    height: Constants.statusBarHeight,
  },
  viewStyle: {
    backgroundColor: '#F3F4F5',
    height: 60,
  },
  headerContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginTop: Platform.OS === 'ios' ? 8 : 0,
    marginBottom: 8,
  },
  imageStyle: {
    width: '80%',
  },
  textStyle: {
    fontSize: 22,
    fontFamily: 'ProximaNova-Bold',
    color: '#070A24',
    width: '80%',
    textAlign: 'center',
  },
  rightIcon: {
    width: '10%',
    flexDirection: 'row',
    paddingRight: 14,
    justifyContent: 'flex-end',
  },
  leftIcon: {
    width: '10%',
    flexDirection: 'row',
    paddingLeft: 14,
    justifyContent: 'flex-start',
  },
};

export default style;
