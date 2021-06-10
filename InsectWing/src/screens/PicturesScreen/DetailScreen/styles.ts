import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerView: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  btnView: {
    width: 90,
    height: 40,
    justifyContent: 'center',

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
  pic: {flex: 4, alignItems: 'center', justifyContent: 'center'},
  footer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  img: {},
});
