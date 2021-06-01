import {StackScreenProps} from '@react-navigation/stack';
import React, {memo, useCallback} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {RootStackParamList, SCREEN} from '../../navigation/ScreenType';
import {styles} from '../../components/StartScreen/styles';

export type ScreenProps = StackScreenProps<RootStackParamList, SCREEN.Start>;

const startScreenComponent = ({navigation}: ScreenProps) => {
  const signIn = useCallback(() => {
    navigation.navigate(SCREEN.SignIn);
  }, []);
  const signUp = useCallback(() => {
    navigation.navigate(SCREEN.SignUp);
  }, []);

  //render
  return (
    <View style={styles.container}>
      <Text style={styles.header}> Detecting Insect Wing App</Text>
      <Image style={styles.img} source={require('../../img/bee.jpg')} />

      <View style={styles.twoBtn}>
        <TouchableOpacity onPress={signIn}>
          <View style={styles.btnView}>
            <Text style={styles.btnSignIn}>Sign In</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={signUp}>
          <View style={styles.btnView}>
            <Text style={styles.btnSignIn}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const Start = memo(startScreenComponent);
