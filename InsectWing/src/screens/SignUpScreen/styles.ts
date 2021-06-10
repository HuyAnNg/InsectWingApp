import { Dimensions, StyleSheet } from "react-native";



const LINE = Dimensions.get('window').width
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
const SCALE = Dimensions.get('window').scale

export const styles = StyleSheet.create({
    btnView: {
      width: WIDTH-310,
      height: HEIGHT-760,
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
      width: WIDTH-310,
      height: HEIGHT-750,
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
      marginHorizontal: 20,
      paddingVertical: 20,
      borderRadius: 60,
      height: HEIGHT-440,
    },
  
    img: {width: 90, height: 90, justifyContent: 'center', alignSelf: 'center'},
  
    line: {
      backgroundColor: 'black',
      height: 1,
      width: LINE-170
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