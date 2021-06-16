import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  headerView: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  line: {
    height: 1.5,
    width: wp('100%'),
    backgroundColor:'black'
  },
  lineView: {
    flexDirection: 'row',
    height: hp('11.5%'),
    backgroundColor: 'gray',
    borderRadius: 15,
    marginTop: 5,
    marginHorizontal: 4,
    justifyContent: 'space-between',
  },
  itemView: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: 'gray',
    borderRadius: 15,
    marginTop: 5,
    marginHorizontal: 4,
    justifyContent: 'space-between',
  },
  text: {
    marginLeft: 20,
    alignSelf: 'center',
    fontSize: 24,
  },
  switch: {marginRight: 30, alignSelf: 'center'},
  rectangle: {
    transform: [{rotate: '90deg'}],
    marginRight: 36,
    alignSelf: 'center',
  },
  power: {width: 30, height: 30, marginRight: 36, alignSelf: 'center'},
});
