import React, {memo, useCallback, useEffect, useState} from 'react';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import {RootStackParamList, SCREEN} from '../../navigation/ScreenType';
import {RNCamera} from 'react-native-camera';
import {styles} from '../CameraScreen/styles';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-crop-picker';
import {StackScreenProps} from '@react-navigation/stack';

//import { PermissionsAndroid, Platform } from "react-native";
import CameraRoll from '@react-native-community/cameraroll';

//type ScreenProps = StackScreenProps<RootStackParamList, SCREEN.Detail>;

const CameraComponent = ({camera}: RNCamera | any) => {
  //state
  const [uri, setUri] = useState(null);

  //function
  const takePicture = async () => {
    if (camera) {
      const options = {quality: 0.5, base64: true};
      const data = await camera.takePictureAsync(options);
      console.log(data.uri);
      setUri(data.uri);
      //CameraRoll.save(data.uri);
    }
  };
  const save = ()=>{
    CameraRoll.save(uri);
    Alert.alert('Notification', 'Photo has been saved', [
      {
        text: 'OK',
      },
    ]);
  }

  
  //render
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={{width: 60}} />
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
        <View style={{width: 90}}>
          <TouchableOpacity>
            {uri && <Image source={{uri}} style={styles.img} />}
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={takePicture.bind(this)}>
          <LinearGradient
            colors={['#FFC700', '#FFE587', '#FFC700']}
            style={styles.btnView}
          />
        </TouchableOpacity>
        
          <TouchableOpacity onPress={save}>
            <Image
              source={require('../../img/direct-download.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
       
        <View style={{width: 90}} />
      </View>
    </View>
  );
};

export const Camera = memo(CameraComponent);
