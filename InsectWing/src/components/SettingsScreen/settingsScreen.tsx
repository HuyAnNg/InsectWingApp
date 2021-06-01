import { StackScreenProps } from '@react-navigation/stack';
import React, {memo, useCallback, useState} from 'react';
import {View, Text, Switch, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../../components/SettingsScreen/styles';

import {RootStackParamList, SCREEN} from '../../navigation/ScreenType';

// export interface ScreenProps {
//   navigation: BottomTabNavigationProp<RootStackParamList, SCREEN.Camera>;
// }



export type ScreenProps = StackScreenProps<RootStackParamList, SCREEN.Settings>;

 const SettingsComponent = ({navigation}:ScreenProps)=>{
// const SettingsComponent: React.FC<ScreenProps> = ({
//   navigation,}: ScreenProps) => {

  //switch
  const [switchValue, setSwitchValue] = useState(false);

  const toggleSwitch = (value: any) => {
    //To handle switch toggle
    setSwitchValue(value);
    //State changes according to switch
  };

  //navigate
  const changeLanguage = useCallback(() => {
    navigation.navigate(SCREEN.Language);
  }, []);
  const changeAbout = useCallback(() => {
    navigation.navigate(SCREEN.About);
  }, []);
  const changeProfile = useCallback(() => {
    navigation.navigate(SCREEN.Profile);
  }, []);
  const LogOut = useCallback(() => {
    navigation.navigate(SCREEN.SignIn);
  }, []);
  const changePass = useCallback(() => {
    navigation.navigate(SCREEN.Password);
  }, []);


  //render
  return (
    <ScrollView style={styles.headerView}>
    <View >
      <Text style={styles.header}>Settings</Text>
    </View>
    <View style={styles.line} />

    <View style={styles.itemView}>
      <Text style={styles.text}>Notification</Text>
      <View style={{height: 50}} />
      <Switch
        style={styles.switch}
        onValueChange={toggleSwitch}
        value={switchValue}
      />
    </View>

    <TouchableOpacity onPress={changeLanguage}>
      <View style={styles.itemView}>
        <Text style={styles.text}>Language</Text>
        <Image
          style={styles.rectangle}
          source={require('../../img/bleach.png')}
        />
      </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={changeProfile}>
      <View style={styles.itemView}>
        <Text style={styles.text}>Profile</Text>
        <Image
          style={styles.rectangle}
          source={require('../../img/bleach.png')}
        />
      </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={changeAbout}>
      <View style={styles.itemView}>
        <Text style={styles.text}>About</Text>
        <Image
          style={styles.rectangle}
          source={require('../../img/bleach.png')}
        />
      </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={changePass}>
      <View style={styles.itemView}>
        <Text style={styles.text}>Change Password</Text>
        <Image
          style={styles.rectangle}
          source={require('../../img/bleach.png')}
        />
      </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={LogOut}>
      <View style={styles.itemView}>
        <Text style={styles.text}>Log out</Text>
        <Image
          style={styles.power}
          source={require('../../img/power-button.png')}
        />
      </View>
    </TouchableOpacity>
  
</ScrollView>
    );
};

export const Settings = memo(SettingsComponent);

