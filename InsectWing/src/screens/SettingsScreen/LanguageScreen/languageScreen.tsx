import React, {memo, useCallback} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import {styles} from '../../SettingsScreen/LanguageScreen/styles';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList, SCREEN} from '../../../navigation/ScreenType';

export type ScreenProps = StackScreenProps<RootStackParamList, SCREEN.Settings>;

const LanguageComponent = ({navigation}: ScreenProps) => {
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
        <Text style={styles.header}>Language</Text>
        <View style={{width: 60}} />
      </View>
      <View style={styles.line} />

      {/* <LinearGradient
        colors={['gray', 'white', 'gray']}
        style={styles.lineView}> */}
      <TouchableOpacity>
        <LinearGradient
          colors={['#D7D7D7', '#FFFFFF', '#D7D7D7']}
          style={styles.lineView}>
          <Image
            style={styles.icon}
            source={require('../../../img/vietnam.png')}
          />
          <Text style={styles.text2}>Vietnamese</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity>
        <LinearGradient
          colors={['#D7D7D7', '#FFFFFF', '#D7D7D7']}
          style={styles.lineView}>
          <Image
            style={styles.icon}
            source={require('../../../img/united-kingdom.png')}
          />
          <Text style={styles.text2}>English</Text>
        </LinearGradient>
      </TouchableOpacity>
      {/* </LinearGradient> */}
    </View>
  );
};

export const Language = memo(LanguageComponent);