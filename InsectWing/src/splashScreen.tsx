import React, {memo} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  view: {flexDirection: 'column'},
  pic1: {width: '100%', height: 100,marginTop:30,},
  pic2: {width: 310, height: 220,alignSelf:'center',marginTop:60},
});

const splashscreenComponent = () => {
  return (
    <View style={styles.view}>
      <Image
        style={styles.pic1}
        // source={{
        //   uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-vector%2Fwelcome-different-languages_2651433.htm&psig=AOvVaw0C_MlcUyfrvoZXf5SnFqyJ&ust=1621995826862000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCT28Dj4_ACFQAAAAAdAAAAABAD',
        // }}
        source={require('../img/welcome-sign-handwritten-inscription-welcome-calligraphic-text_110464-469.jpg')}
      />
      <Image
        style={styles.pic2}
        // source={{
        //   uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freevector.com%2Fvector%2Fbee&psig=AOvVaw3BddXv3axwh6d-hbhtWusI&ust=1621996116968000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLD8l8jk4_ACFQAAAAAdAAAAABAQ',
        // }}
        source={require('../img/bee.jpg')}
      />
    </View>
  );
};

export const Splash = memo(splashscreenComponent);
