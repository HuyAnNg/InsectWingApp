import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const LogOutModal = ({onCancel, onOK,}: {onCancel: () => void; onOK: () => void;}) => {
  //render
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.textView}>
          <Text style={styles.text}>Do you want to log out?</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.btnView}>
          <TouchableOpacity style={styles.touch2} onPress={onCancel}>
            <Text style={styles.text}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touch1} onPress={onOK}>
            <Text style={styles.text}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
//const HEIGHT_MODAL = Dimensions.get('window').height;
//const WIDTH_MODAL = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {flex: 1},
  modal: {
    height: hp('20%'),
    width: wp('60%'),
    paddingTop: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: 200,
  },
  touch1: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  touch2: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRightWidth: 1,
  },
  text: {margin: 5, fontSize: 16, fontWeight: 'bold'},
  textView: {flex: 1, alignItems: 'center'},
  btnView: {width: '100%', flexDirection: 'row'},
  line: {backgroundColor: 'black', height: 1},
});
