import { StackScreenProps } from '@react-navigation/stack';
import React, {memo, useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './styles'
import { RootStackParamList, SCREEN } from '../../../navigation/ScreenType';

export type ScreenProps = StackScreenProps<RootStackParamList, SCREEN.Settings>;

const AboutComponent = ({navigation}:ScreenProps) => {
  //function
  const back = useCallback(() => {
    navigation.navigate(SCREEN.Settings);
  }, []);
  
  //render
  return (
    <View>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={back}>
          <View style={styles.btnView}>
            <Text style={styles.btnBack}>Back</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.header}>About</Text>
        <View style={{width: 60}} />
      </View>
      <View style={styles.line} />
      <View style={styles.info}>
        <Text style={styles.text}>Author: Nguyen Huy An</Text>
        <Text />
        <Text style={styles.text}>Email: annh1@vmodev.com</Text>
        <Text />
        <Text style={styles.text}>Mentor: Le Hong Ngoc</Text>
      </View>
    </View>
  );
};

export const About = memo(AboutComponent);
