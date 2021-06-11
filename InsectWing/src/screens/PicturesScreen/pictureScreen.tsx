import React, {memo, useCallback, useState} from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  Image,
  ListRenderItemInfo,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './styles';
import {RootStackParamList, SCREEN} from '../../navigation/ScreenType';
import {DATA} from '../PicturesScreen/constants';
import {image} from '../../model/Item';
import {StackScreenProps} from '@react-navigation/stack';
import ImagePicker from 'react-native-image-crop-picker';


type ScreenProps = StackScreenProps<RootStackParamList, SCREEN.Pictures>;

const Item = ({img}: {img: image}) => {
  //function
  return (
    <View style={styles.item}>
      <Image style={styles.title} source={img.img}/>
    </View>
  );
};

//const choosePicFromLib = () => {
  //   ImagePicker.openPicker({width: 300, height: 400, cropping: true}).then(
  //     image => {
  //       console.log(image);
  //     },
  //   );
  // };

const PicturesComponent = ({navigation}: ScreenProps) => {

  const [img, setImg] = useState('');

  const keyExtractor = useCallback(item => {
    return item.id;
  }, []);


  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<image>) => {
      const onNavigateDetail = () => {
        navigation.navigate(SCREEN.Detail, item);
      };

      return(
      <TouchableOpacity onPress={onNavigateDetail}>
        <Item img={item} />
      </TouchableOpacity>)
    },
    [],
  );

  const col = 3;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={col}
      />
    </SafeAreaView>
  );
};

export const Pictures = memo(PicturesComponent);
