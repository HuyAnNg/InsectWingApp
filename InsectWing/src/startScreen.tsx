import React, {memo, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import {SCREEN} from '../navigation/ScreenType';
import {ScreenProps} from './Settings/settingsScreen';

const styles = StyleSheet.create({
  container: {flexDirection: 'column'},
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

const startScreenComponent: React.FC<ScreenProps> = ({
  navigation,
}: ScreenProps) => {
  const signin = useCallback(() => {
    navigation.navigate(SCREEN.SignIn);
  }, []);

  //render
  return (
    <View style={styles.container}>
      <Text style={styles.header}> Detecting Insect Wing App</Text>
      <Image style={styles.img} source={require('../img/bee.jpg')} />

      <View style={styles.twoBtn}>
        <TouchableOpacity>
          <View style={styles.btnView}>
            <Text style={styles.btnSignIn}>Sign In</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.btnView}>
            <Text style={styles.btnSignIn}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const Start = memo(startScreenComponent);
