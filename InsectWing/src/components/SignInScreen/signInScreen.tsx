import {StackScreenProps} from '@react-navigation/stack';
import React, { memo, useCallback, useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, Platform} from 'react-native';
import {RootStackParamList, SCREEN} from '../../navigation/ScreenType';
import {styles} from '../../components/SignInScreen/styles';

export type ScreenProps = StackScreenProps<RootStackParamList, SCREEN.Start>;

const SignInComponent = ({navigation}: ScreenProps) => {
  //state
  const [isVisiblity, setVisiblity] = useState(false);

  //function
  const signUp = useCallback(() => {
    navigation.navigate(SCREEN.SignUp);
  }, []);

  const enter = useCallback(() => {
    navigation.navigate(SCREEN.Settings);
  }, []);

  const onClickVisiblity = useCallback(() => {
    setVisiblity(!isVisiblity);
  },[isVisiblity])

  const hold = useCallback(() => {
    
  }, []);

  //render
  return (
    <View>
      <TouchableOpacity onPress={signUp}>
        <View style={styles.btnView}>
          <Text style={styles.btnSignUp}>Sign Up</Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.header}>Welcome to my App</Text>
      <View style={styles.container2}>
        <View style={styles.lineView}>
          <Image style={styles.icon} source={require('../../img/mail.png')} />
          <View style={styles.textLine}>
            <TextInput style={styles.input} placeholder="Email" />
            <View style={styles.line} />
          </View>
        </View>

        <View style={styles.lineView}>
          <Image
            style={styles.icon}
            source={require('../../img/padlock.png')}
          />
          <View style={styles.textLine}>
            <View style={styles.password}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={isVisiblity ? false : true}
                maxLength={10}
              />
              <TouchableOpacity onPress={onClickVisiblity}>
                <Image
                  source={
                      isVisiblity
                      ? require('../../img/visibility.png')
                      : require('../../img/visibility1.png')
                  }
                  style={styles.eye}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.line} />
          </View>
        </View>
      </View>

      <TouchableOpacity onPress={enter}>
        <View style={styles.btnView2}>
          <Text style={styles.btnEnter}>Enter</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const SignIn = memo(SignInComponent);
