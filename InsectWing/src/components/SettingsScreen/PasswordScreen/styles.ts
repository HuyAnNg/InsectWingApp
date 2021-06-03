import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  btnView: {
    width: 60,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC700',
    borderRadius: 20,
  },
  btnBack: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  line: {
    backgroundColor: 'black',
    height: 1,
  },
  info: {
    marginHorizontal: 60,
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    fontWeight: '800',
  },
  img: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
  },

  eye: {width: 24,
        height: 24,
        marginTop: 6},
  password: {flexDirection: 'row'},
  lineView: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginTop: 12,
  },
  textLine: {
    width: 200,
    marginLeft: 30,
  },
  input: {
    fontSize: 16,
    height: 40,
    width: '99%',
    // backgroundColor:'red'
  },
  btnSave: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  btnSaveView: {
    alignSelf: 'center',
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC700',
    borderRadius: 20,
    marginTop: 40,
  },
  container: {
    marginTop: 60,
    marginLeft: 40,
  },
});
