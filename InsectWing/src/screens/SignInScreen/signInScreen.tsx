import {StackScreenProps} from '@react-navigation/stack';
import React, {memo, useCallback, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import {RootStackParamList, SCREEN} from '../../navigation/ScreenType';
import {styles} from '../../screens/SignInScreen/styles';
import auth from '@react-native-firebase/auth';

export type ScreenProps = StackScreenProps<RootStackParamList, SCREEN.Start>;

const SignInComponent = ({navigation}: ScreenProps) => {
  //state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisiblity, setVisiblity] = useState(false);

  const logIn = (email: any, password: any) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Welcome!', '', [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate(SCREEN.Settings);
            },
          },
        ]);
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

  const signUp = useCallback(() => {
    navigation.navigate(SCREEN.SignUp);
  }, []);

  const forgot = () => {
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        if (email == '') {
          Alert.alert('Enter your email', '', [
            {
              text: 'OK',
            },
          ]);
        } else {
          Alert.alert('Sent to your email', '', [
            {
              text: 'OK',
            },
          ]);
        }
      });
  };

  const onClickVisiblity = useCallback(() => {
    setVisiblity(!isVisiblity);
  }, [isVisiblity]);

  //render
  return (
    <View>
      <ScrollView>
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
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="gray"
                value={email}
                onChangeText={setEmail}
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
              <View style={styles.password}>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="gray"
                  secureTextEntry={isVisiblity ? false : true}
                  value={password}
                  onChangeText={setPassword}
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

        <TouchableOpacity onPress={() => logIn(email, password)}>
          <View style={styles.btnView2}>
            <Text style={styles.btnEnter}>Enter</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={forgot}>
          <View style={styles.forgot}>
            <Text>Forgot Password?</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export const SignIn = memo(SignInComponent);
