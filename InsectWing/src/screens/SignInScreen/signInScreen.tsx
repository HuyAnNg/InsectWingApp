import {StackScreenProps} from '@react-navigation/stack';
import React, {memo, useCallback, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
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

 

  const logIn = (email: any, password: any,) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        
        Alert.alert('Welcome!', '', [
          {
            text: 'OK',
            onPress:()=>{navigation.navigate(SCREEN.Settings)}
          },
        ]);
        console.log('ok');
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
  // firebase.auth().onAuthStateChanged(user => {
  //   this.props.navigation.navigate(user ? 'Main' : 'SignUp')
  // })

  const signUp = useCallback(() => {
    navigation.navigate(SCREEN.SignUp);
  }, []);

  const enter = useCallback(() => {
    navigation.navigate(SCREEN.Settings);
  }, []);

  const onClickVisiblity = useCallback(() => {
    setVisiblity(!isVisiblity);
  }, [isVisiblity]);

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
                //maxLength={13}
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
    </View>
  );
};

export const SignIn = memo(SignInComponent);
