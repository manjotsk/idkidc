import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emergencyButton: {
    padding: 20,
    backgroundColor: '#ff0000',
    borderRadius: 40,
  },
  emergencyButtonText: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: 22,
    color: '#fff',
    textAlign: 'center',
  },
  reportText: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default styles;
