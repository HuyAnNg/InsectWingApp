import React, {memo} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  btnView: {
    width: 80,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC700',
    borderRadius: 20,
    marginVertical: 8,
    marginLeft: 290,
  },
  btnSignIn: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  header: {
    fontSize: 45,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  img: {width: 100, height: 100,justifyContent:'center'},
});

const SignUpComponent = () => (
  <View>
    <TouchableOpacity>
      <View style={styles.btnView}>
        <Text style={styles.btnSignIn}>Sign In</Text>
      </View>
    </TouchableOpacity>
    <Text style={styles.header}>Create your account</Text>
    <View>
      <Image style={styles.img} source={require('../../img/demouser.png')} />
    </View>
  </View>
);

export const SignUp = memo(SignUpComponent);
