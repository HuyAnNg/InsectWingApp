import { StyleSheet, StatusBar } from "react-native";

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
  });