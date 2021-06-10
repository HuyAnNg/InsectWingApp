import {StackScreenProps} from '@react-navigation/stack';
import React, {memo, useCallback, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import {RootStackParamList, SCREEN} from '../../navigation/ScreenType';
import {styles} from '../../components/SignUpScreen/styles';
import auth from '@react-native-firebase/auth';
import {ScrollView} from 'react-native-gesture-handler';

export type ScreenProps = StackScreenProps<RootStackParamList, SCREEN.Start>;

const SignUpComponent = ({navigation}: ScreenProps) => {
  //state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeat, setRepeat] = useState('');

  //fucntion
  const signIn = useCallback(() => {
    navigation.navigate(SCREEN.SignIn);
  }, []);

  const checkLogin = (email: any, password: any) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  const checkPass = (password: any, repeat: any, email: any) => {
    if (password !== repeat) {
      Alert.alert('ERROR', 'Please check your password', [
        {
          text: 'OK',
        },
      ]);
    } else {
      checkLogin(email, password);
      Alert.alert('Sign Up Success!', 'Sign in with your account', [
        {
          text: 'OK',
        },
      ]);
    }
  };

  //render
  return (
    <View>
      <ScrollView>
        <TouchableOpacity onPress={signIn}>
          <View style={styles.btnView}>
            <Text style={styles.btnSignIn}>Sign In</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.header}>Create your account</Text>
        
        <View style={styles.container2}>
          <Image
            style={styles.img}
            source={require('../../img/demouser.png')}
          />
          <View style={styles.lineView}>
            <Image style={styles.icon} source={require('../../img/name.png')} />
            <View style={styles.textLine}>
              <TextInput
                style={styles.input}
                placeholder="User name"
                placeholderTextColor="gray"
              />
              <View style={styles.line} />
            </View>
          </View>

          <View style={styles.lineView}>
            <Image style={styles.icon} source={require('../../img/mail.png')} />
            <View style={styles.textLine}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="gray"
                onChangeText={setEmail}
                value={email}
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
                placeholder="Password"
                placeholderTextColor="gray"
                secureTextEntry={true}
                onChangeText={setPassword}
                value={password}
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
                placeholderTextColor="gray"
                secureTextEntry={true}
                //value={()=>{}}
              />
              <View style={styles.line} />
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={() => checkPass(email, password, repeat)}>
          <View style={styles.btnView2}>
            <Text style={styles.btnSignUp}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export const SignUp = memo(SignUpComponent);
