import React, {memo, useEffect, useState} from 'react';
import {View, SafeAreaView, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './styles';
import {RootStackParamList, SCREEN} from '../../navigation/ScreenType';
import {StackScreenProps} from '@react-navigation/stack';
import ImagePicker from 'react-native-image-crop-picker';

type ScreenProps = StackScreenProps<RootStackParamList, SCREEN.Pictures>;

const PicturesComponent = ({navigation}: ScreenProps) => {
  //state
  const [pic, setPic] = useState('../../img/demouser.png');

  //function
  const choosePicFromLib = () => {
    ImagePicker.openPicker({width: 300, height: 400, cropping: true}).then(
      image => {
        //console.log(image);
        setPic(image.path);
      },
    );
  };

  const col = 3;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <View style={{width: 60}} />
        <Text style={styles.header}>Picture</Text>

        <View style={{width: 60}} />
      </View>

      <Image source={{uri: pic}} style={styles.img} />
      <View style={styles.containBtn}>
        <TouchableOpacity onPress={choosePicFromLib}>
          <View style={styles.btnView}>
            <Text style={styles.btn}>Choose</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.btnView}>
            <Text style={styles.btn}>Detect</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export const Pictures = memo(PicturesComponent);
