import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
    top: 20,
  },
  btnView: {
    width: 200,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC700',
    borderRadius: 20,
    marginVertical: 8,
  },
  btnSignIn: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  img: {width: 246, height: 185, alignSelf: 'center', marginTop: 50},
  twoBtn: {
    marginTop: 40,
    alignSelf: 'center',
  },
});
