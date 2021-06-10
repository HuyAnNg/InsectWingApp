import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headerView: {
      flexDirection: 'row',
      marginHorizontal: 10,
      marginVertical: 10,
      justifyContent: 'space-between',
    },
    header: {
      fontSize: 30,
      fontWeight: 'bold',
      justifyContent: 'center',
      
    },
    headerText: {fontSize: 30, fontWeight: 'bold'},
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      backgroundColor: '#fff',
      borderRadius: 20,
      padding: 20,
      alignSelf: 'center',
  
      margin: 20,
    },

    btnView: {
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: '#FFC700',
      borderRadius: 30,
      padding: 20,
      marginBottom: 110,
      marginTop:20
    },
    btnViewBack: {
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
    img:{width:40,height:40,marginTop:30,marginLeft:50},
    footer: {flexDirection:'row',justifyContent:'space-between',},
  });