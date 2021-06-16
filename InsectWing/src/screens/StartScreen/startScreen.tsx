import {StackScreenProps} from '@react-navigation/stack';
import React, {memo, useCallback} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {RootStackParamList, SCREEN} from '../../navigation/ScreenType';
import {styles} from '../../screens/StartScreen/styles';
import LinearGradient from 'react-native-linear-gradient';

export type ScreenProps = StackScreenProps<RootStackParamList, SCREEN.Start>;

const startScreenComponent = ({navigation}: ScreenProps) => {
  //function
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
          <LinearGradient
            style={styles.btnView}
            colors={['#FFC700', '#E8EB61']}>
            <Text style={styles.btnSignIn}>Sign In</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={signUp}>
          <LinearGradient
            style={styles.btnView}
            colors={['#FFC700', '#E8EB61']}>
            <Text style={styles.btnSignIn}>Sign Up</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const Start = memo(startScreenComponent);
