import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  emergencyButton: {
    padding: 20,
    backgroundColor: '#ff0000',
    borderRadius: 40,
    marginHorizontal: 20,
  },
  emergencyButtonText: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: 22,
    color: '#fff',
    textAlign: 'center',
  },
  reportText: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  userDetails: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#dfdfdf',
  },
  userDetailsText: {
    fontFamily: 'ProximaNova-Light',
    fontSize: 16,
  },
  searchStatus: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 60,
  },
});

export default styles;
