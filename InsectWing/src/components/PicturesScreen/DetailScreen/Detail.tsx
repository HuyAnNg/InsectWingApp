import {StackScreenProps} from '@react-navigation/stack';
import React, {memo, useCallback, useMemo} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {RootStackParamList, SCREEN} from '../../../navigation/ScreenType';
import {styles} from '../DetailScreen/styles';

type ScreenProps = StackScreenProps<RootStackParamList, SCREEN.Detail>;

const DetailComponent = ({navigation, route}: ScreenProps) => {
  //state
  const IMAGE = useMemo(() => {
    return route.params.img;
  }, []);

  //function
  const back = useCallback(() => {
    navigation.navigate(SCREEN.Pictures);
  }, []);

  //render
  return (
    <View style={{flex: 1,}}>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={back}>
          <View style={styles.btnView}>
            <Text style={styles.btnBack}>Back</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.header}>Detail</Text>
        <View style={{width: 60}} />
      </View>
      <View style={styles.line} />
      <View style={styles.pic}>
        <Image source={IMAGE} style={styles.img} />
      </View>
      <View style={styles.line} />
      <View style={styles.footer}>
        <TouchableOpacity>
          <View style={styles.btnView}>
            <Text style={styles.btnBack}>Crop</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.btnView}>
            <Text style={styles.btnBack}>Rotate</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const Detail = memo(DetailComponent);
