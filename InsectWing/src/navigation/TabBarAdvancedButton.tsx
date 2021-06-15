import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';

const styles = StyleSheet.create({
  containerBtn: {
    position: 'relative',
    width: 75,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
  },
  button: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFC700',
  },
  buttonIcon: {
    fontSize: 16,
    color: '#F6F7EB',
  },
  icon: {width: 25, height: 25},
});

type Props = BottomTabBarButtonProps & {
  bgColor?: string;
};

export const TabBarAdvancedButton: React.FC<Props> = (
  {bgColor, ...props},
  {focused},
) => (
  <View style={styles.containerBtn} pointerEvents="box-none">
    {/* <TabBg color={bgColor} style={styles.background} /> */}
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Image
        style={{tintColor: focused ? 'white' : 'black', width: 25, height: 25}}
        source={require('../img/camera.png')}
      />
    </TouchableOpacity>
  </View>
);
