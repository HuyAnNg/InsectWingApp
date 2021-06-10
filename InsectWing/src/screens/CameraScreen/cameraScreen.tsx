import React, {memo, useState} from 'react';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {RootStackParamList, SCREEN} from '../../navigation/ScreenType';
import {RNCamera} from 'react-native-camera';
import {styles} from '../CameraScreen/styles';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-crop-picker';

export interface ScreenProps {
  navigation: BottomTabNavigationProp<RootStackParamList, SCREEN.Camera>;
}

const CameraComponent = ({camera}: RNCamera | any) => {
  //state
  const [pic, setPic] = useState();

  //function

  const showPic = () => {
    const data = camera.uri;
    setPic
  };
  const takePicture = async () => {
    if (camera) {
      const options = {quality: 0.5, base64: true};
      const data = await camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
  // const takePicture = async () => {
  //   if (camera) {
  //     const options = {quality: 0.5, base64: true};
  //     const data = await camera.takePictureAsync(options);
  //     console.log(data.path);
  //     console.log(data.width),
  //     console.log(data.height),

  // }
  // };

  
  //render
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={{width: 60}} />
        {/* <TouchableOpacity >
          <View style={styles.btnViewBack}>
            <Text style={styles.btnBack}>Back</Text>
          </View>
        </TouchableOpacity> */}
        <Text style={styles.header}>Camera</Text>
        <View style={{width: 60}} />
      </View>
      <RNCamera
        ref={ref => {
          camera = ref;
        }}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        //flashMode={RNCamera.Constants.FlashMode.on}
        captureAudio={false}
      />

      <View style={styles.footer}>
        <TouchableOpacity onPress={showPic}>
          <Image
           source={require('../../img/demouser.png')} 
           
           style={styles.img}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={takePicture.bind(this)}>
          <LinearGradient
            colors={['#FFC700', '#FFE587', '#FFC700']}
            style={styles.btnView}
          />
        </TouchableOpacity>
        <View style={{width: 90}} />
      </View>
    </View>
  );
};
export const Camera = memo(CameraComponent);
