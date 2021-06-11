import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  btnView: {
    width: wp('20%'),
    height: hp('6%'),
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
  line2: {
    backgroundColor: 'black',
    height: 1,
    width:wp('50%')
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
    width: wp('26%'),
    height: hp('17%'),
    alignSelf: 'center',
    marginTop: 20,
  },
  lineView: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  icon: {
    width: wp('11%'),
    height: hp('7%'),
    marginLeft: 20,
    marginTop: 12,
  },
  textLine: {
    width: 200,
    marginLeft: 30,
  },
  input: {
    fontSize: 18,
    height: hp('8%'),
  },
  btnSave: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  btnSaveView: {
    alignSelf: 'center',
    width: wp('22%'),
    height: hp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC700',
    borderRadius: 20,
    marginTop: 40,
  },
  
  container: {
    marginTop: 30,
    alignItems: 'center',
  },
});
