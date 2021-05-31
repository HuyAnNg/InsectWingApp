import {StackScreenProps} from '@react-navigation/stack';
import React, {memo, useCallback} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {RootStackParamList, SCREEN} from '../src/navigation/ScreenType';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
    top: 20,
  },
  btnView: {
    width: 200,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC700',
    borderRadius: 20,
    marginVertical: 8,
  },
  btnSignIn: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  img: {width: 246, height: 185, alignSelf: 'center', marginTop: 50},
  twoBtn: {
    marginTop: 60,
    alignSelf: 'center',
  },
});

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
      <Image style={styles.img} source={require('./img/bee.jpg')} />

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
