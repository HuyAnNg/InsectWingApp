import React, {memo, useCallback, useState} from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  Image,
  ListRenderItemInfo,
  Text,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './styles';
import {RootStackParamList, SCREEN} from '../../navigation/ScreenType';
import {DATA} from '../PicturesScreen/constants';
import {image} from '../../model/Item';
import {StackScreenProps} from '@react-navigation/stack';
import ImagePicker from 'react-native-image-crop-picker';

type ScreenProps = StackScreenProps<RootStackParamList, SCREEN.Pictures>;

// const Item = ({img}: {img: image}) => {
//   //function
//   return (
//     <View style={styles.item}>
//       <Image style={styles.title} source={img.img} />
//     </View>
//   );
// };

const PicturesComponent = ({navigation}: ScreenProps) => {
  //const [img, setImg] = useState('');
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

  // const keyExtractor = useCallback(item => {
  //   return item.id;
  // }, []);

  // const renderItem = useCallback(({item}: ListRenderItemInfo<image>) => {
  //   const onNavigateDetail = () => {
  //     navigation.navigate(SCREEN.Detail, item);
  //   };

  //   return (
  //     <TouchableOpacity onPress={onNavigateDetail}>
  //       <Item img={item} />
  //     </TouchableOpacity>
  //   );
  // }, []);

  const col = 3;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <View style={{width: 60}} />
        <Text style={styles.header}>Picture</Text>

        <View style={{width: 60}} />
      </View>

      {/* <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={col}
      /> */}
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
