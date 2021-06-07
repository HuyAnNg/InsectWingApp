import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import React, {memo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {RootStackParamList, SCREEN} from '../../navigation/ScreenType';
import {RNCamera} from 'react-native-camera';

import ImagePicker from 'react-native-image-crop-picker';

export interface ScreenProps {
  navigation: BottomTabNavigationProp<RootStackParamList, SCREEN.Camera>;
}

const cameraScreenComponent = () => {
  //function
  const openCamera = () => {
    ImagePicker.openCamera({width: 300, height: 400, cropping: true}).then(
      image => {
        console.log(image);
      },
    );
  };

  // const chooseFromLib = () => {
  //   ImagePicker.openPicker({width: 300, height: 400, cropping: true}).then(
  //     image => {
  //       console.log(image);
  //     },
  //   );
  // };

  //render
  return (
    <View>
      <View>
        <Text>CAMERA</Text>
      </View>
      {/* <View> */}
        {/* <RNCamera
          captureAudio={false}
          //style={{position: 'absolute', top: 0, right: 0, left: 0, bottom: 0}}
          style={{width: '100%', height: '80%', marginVertical: 40}}
        /> */}
      {/* </View> */}
      <TouchableOpacity onPress={openCamera}><Text>Take photos</Text></TouchableOpacity>
    </View>
  );
};

export const Camera = memo(cameraScreenComponent);
