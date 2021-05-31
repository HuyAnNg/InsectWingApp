import { StackScreenProps } from '@react-navigation/stack';
import React, {memo, useCallback} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { RootStackParamList, SCREEN } from '../../navigation/ScreenType';
export type ScreenProps = StackScreenProps<RootStackParamList, SCREEN.Start>;


const styles = StyleSheet.create({
    btnView: {
      width: 90,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFC700',
      borderRadius: 20,
      marginTop: 10,
      marginLeft: 280,
    },
    btnSignUp: {
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    btnView2: {
      width: 120,
      height: 45,
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: '#FFC700',
      borderRadius: 20,
      marginTop: 50,
    },
  
    btnEnter: {
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
      marginTop:20
    },
  
    container2: {
      backgroundColor: '#FFC700',
      marginTop:50,
      marginHorizontal: 20,
      paddingVertical: 20,
      borderRadius: 40,
    },
  
    img: {width: 90, height: 90, justifyContent: 'center', alignSelf: 'center'},
  
    line: {
      backgroundColor: 'black',
      height: 1,
      width: 220,
    },
  
    lineView: {
      flexDirection: 'row',
      marginVertical: 20,
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
      fontSize: 22,
      height: 46,
    },
  });

const SignInComponent = ({navigation}: ScreenProps) => {
  const signUp = useCallback(() => {
    navigation.navigate(SCREEN.SignUp);
  }, []);

  return(<View>
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
          <TextInput style={styles.input} placeholder="Password" />
          <View style={styles.line} />
        </View>
      </View>

      
    </View>

    <TouchableOpacity>
      <View style={styles.btnView2}>
        <Text style={styles.btnEnter}>Enter</Text>
      </View>
    </TouchableOpacity>
  </View>
)}

export const SignIn = memo(SignInComponent);
