import {StyleSheet, StatusBar} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    marginHorizontal: 2,
    marginVertical: 2,
    width: 124,
    height: 56,
  },
  title: {width: undefined, height: undefined, flex: 1, resizeMode: 'contain'},
  headerView: {
    flexDirection: 'row',
    marginHorizontal: 10,
    // marginVertical: 10,
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  line: {
    backgroundColor: 'black',
    height: 1,
    width: wp('100%'),
  },
  img: {width: wp('100%'), height: hp('50%')},
  btnView: {
    width: 90,
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#FFC700',
    borderRadius: 20,
    // marginBottom: 150,
    // marginLeft: 200,
  },
  containBtn: {
    flexDirection: 'row',
    height: hp('10%'),
    justifyContent: 'space-evenly',
    marginTop: 60,
    backgroundColor:'blue'
  },
  btn: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
