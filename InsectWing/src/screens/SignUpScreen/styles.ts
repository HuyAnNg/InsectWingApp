import { Dimensions, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const LINE = Dimensions.get('window').width
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
const SCALE = Dimensions.get('window').scale

export const styles = StyleSheet.create({
    btnView: {
      width: wp('24%'),
      height: hp('6%'),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFC700',
      borderRadius: 20,
      marginTop: 8,
      marginLeft: 290,
    },
    btnSignIn: {
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold',
    },
      btnView2: {
      width: wp('24%'),
      height: hp('6%'),
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: '#FFC700',
      borderRadius: 20,
      marginTop: 20,
      
    },
  
    btnSignUp: {
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold',
     
    },
  
    header: {
      fontSize: 44,
      alignSelf: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  
    container2: {
      backgroundColor: '#FFC700',
      
      paddingVertical: 20,
      borderRadius: 60,
      width: wp('90%'),
      height: hp('60%'),
      alignSelf:'center'
    },
  
    img: {width: 90, height: 90, justifyContent: 'center', alignSelf: 'center'},
  
    line: {
      backgroundColor: 'black',
      height: 1,
      width: wp('60%')
    },
  
    lineView: {
      flexDirection: 'row',
      marginVertical: 4,
    },
    icon: {
      width: 30,
      height: 30,
      marginLeft: 20,
      marginTop: 12,
    },
    textLine: {
      width: 250,
      marginLeft: 30,
    },
    input: {
      fontSize: 18,
      height: 44,
    },
  });