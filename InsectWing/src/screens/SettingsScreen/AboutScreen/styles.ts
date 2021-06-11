import { StyleSheet } from "react-native";

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
      fontWeight:'bold'
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
  });