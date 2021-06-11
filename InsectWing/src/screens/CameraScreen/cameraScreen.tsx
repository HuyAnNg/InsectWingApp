import React, {memo, useEffect, useState} from 'react';
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

  //function

  // const takePicture = async () => {
  //   if (camera) {
  //     const options = {quality: 0.5, base64: true};
  //     const data = await camera.takePictureAsync(options);
  //     console.log(data.uri);
  //   }
  // };

  // //render
  // return (
  //   <View style={styles.container}>
  //     <View style={styles.headerView}>
  //       <View style={{width: 60}} />
  //       {/* <TouchableOpacity >
  //         <View style={styles.btnViewBack}>
  //           <Text style={styles.btnBack}>Back</Text>
  //         </View>
  //       </TouchableOpacity> */}
  //       <Text style={styles.header}>Camera</Text>
  //       <View style={{width: 60}} />
  //     </View>
  //     <RNCamera
  //       ref={ref => {
  //         camera = ref;
  //       }}
  //       style={styles.preview}
  //       type={RNCamera.Constants.Type.back}
  //       //flashMode={RNCamera.Constants.FlashMode.on}
  //       captureAudio={false}

  //     />

  //     <View style={styles.footer}>
  //       <TouchableOpacity onPress={showPic}>
  //         <Image
  //          source={require('../../img/demouser.png')}

  //          style={styles.img}/>
  //       </TouchableOpacity>

  //       <TouchableOpacity onPress={takePicture.bind(this)}>
  //         <LinearGradient
  //           colors={['#FFC700', '#FFE587', '#FFC700']}
  //           style={styles.btnView}
  //         />
  //       </TouchableOpacity>
  //       <View style={{width: 90}} />
  //     </View>
  //   </View>
  // );
  const [img, setImg] = useState('');

  const takePhoto = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  const choosePhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImg(image.path);
    });
  };

  useEffect(() => {
    takePhoto();
  }, []);

  return (
    // <View/>
    <View style={{flex: 1}}>
      <View style={{}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={takePhoto} style={{width: 50,
          height: 50,
          borderRadius: 10,
          borderColor: 'black',
          borderWidth: 0.5,
          justifyContent: 'center',
          alignSelf: 'center',}}>
            <Text>Access Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={choosePhoto} style={{width: 50,
          height: 50,
          borderRadius: 10,
          borderColor: 'black',
          borderWidth: 0.5,
          justifyContent: 'center',
          alignSelf: 'center',}}>
            <Text>Access Library</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export const Camera = memo(CameraComponent);
