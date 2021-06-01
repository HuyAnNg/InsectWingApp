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
import {styles} from '../../components/SignUpScreen/styles'

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
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
            />
            <View style={styles.line} />
          </View>
        </View>

        <View style={styles.lineView}>
          <Image
            style={styles.icon}
            source={require('../../img/padlock.png')}
          />
          <View style={styles.textLine}>
            <TextInput
              style={styles.input}
              placeholder="Repeat"
              secureTextEntry={true}
            />
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
