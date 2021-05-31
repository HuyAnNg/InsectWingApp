import {StackScreenProps} from '@react-navigation/stack';
import React, {memo, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import {RootStackParamList, SCREEN} from '../../navigation/ScreenType';
import {SignIn} from './signInScreen';

const styles = StyleSheet.create({
  btnView: {
    width: 80,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC700',
    borderRadius: 20,
    marginTop: 8,
    marginLeft: 290,
  },
  btnSignIn: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  btnView2: {
    width: 80,
    height: 45,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFC700',
    borderRadius: 20,
    marginVertical: 8,
  },

  btnSignUp: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  header: {
    fontSize: 44,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  container2: {
    backgroundColor: '#FFC700',
    marginHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 60,
    height: 340,
  },

  img: {width: 90, height: 90, justifyContent: 'center', alignSelf: 'center'},

  line: {
    backgroundColor: 'black',
    height: 1,
    width: 200,
  },

  lineView: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 20,
    marginTop: 12,
  },
  textLine: {
    width: 250,
    marginLeft: 30,
  },
  input: {
    fontSize: 18,
    height: 40,
  },
});

export type ScreenProps = StackScreenProps<RootStackParamList, SCREEN.Start>;

const SignUpComponent = ({navigation}: ScreenProps) => {
  const signIn = useCallback(() => {
    navigation.navigate(SCREEN.SignIn);
  }, []);

  return (
    <View>
      <TouchableOpacity onPress={signIn}>
        <View style={styles.btnView}>
          <Text style={styles.btnSignIn}>Sign In</Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.header}>Create your account</Text>
      <View style={styles.container2}>
        <Image style={styles.img} source={require('../../img/demouser.png')} />
        <View style={styles.lineView}>
          <Image style={styles.icon} source={require('../../img/name.png')} />
          <View style={styles.textLine}>
            <TextInput style={styles.input} placeholder="User name" />
            <View style={styles.line} />
          </View>
        </View>

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
            <TextInput style={styles.input} placeholder="Password" />
            <View style={styles.line} />
          </View>
        </View>

        <View style={styles.lineView}>
          <Image
            style={styles.icon}
            source={require('../../img/padlock.png')}
          />
          <View style={styles.textLine}>
            <TextInput style={styles.input} placeholder="Repeat" />
            <View style={styles.line} />
          </View>
        </View>
      </View>

      <TouchableOpacity>
        <View style={styles.btnView2}>
          <Text style={styles.btnSignUp}>Sign Up</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const SignUp = memo(SignUpComponent);
