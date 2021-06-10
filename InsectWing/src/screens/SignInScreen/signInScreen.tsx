import {StackScreenProps} from '@react-navigation/stack';
import React, {memo, useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
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
  //const [list, setList] = useState()
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();


  

  // //function

  // function onAuthStateChanged(user:any) {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  // if (initializing) return null;

  // if (!user) {
  //   return (
  //     <View>
  //       <Text>Login</Text>
  //     </View>
  //   );
  // }

  // return (
  //   <View>
  //     <Text>Welcome {user.email}</Text>
  //   </View>
  // );

//////
  const logIn = (email: any, password: any) => {
    auth()
      .signInWithEmailAndPassword(email, password)
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
                maxLength={10}
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

      <TouchableOpacity onPress={enter}>
        <View style={styles.btnView2}>
          <Text style={styles.btnEnter}>Enter</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const SignIn = memo(SignInComponent);
