import {StackScreenProps} from '@react-navigation/stack';
import React, {memo, useCallback, useState, useContext} from 'react';
import {View, Text, Switch, Image, Modal} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from '../../screens/SettingsScreen/styles';
import {LogOutModal} from '../SettingsScreen/logOutModal';
import {RootStackParamList, SCREEN} from '../../navigation/ScreenType';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import auth from '@react-native-firebase/auth';
import {EventRegister} from 'react-native-event-listeners';

export type ScreenProps = StackScreenProps<RootStackParamList, SCREEN.Settings>;

const SettingsComponent = ({navigation}: ScreenProps) => {
  // state
  const [isModalVisible, setisModalVisible] = useState(false);

  //switch
  const [mode, setMode] = useState(true);

  //function
  const changeLanguage = useCallback(() => {
    navigation.navigate(SCREEN.Language);
  }, []);
  const changeAbout = useCallback(() => {
    navigation.navigate(SCREEN.About);
  }, []);
  const changeProfile = useCallback(() => {
    navigation.navigate(SCREEN.showProfile);
  }, []);
  const onLogOut = useCallback(() => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
    //navigation.navigate(SCREEN.Start);
    onCloseModal();
  }, []);
  const changePass = useCallback(() => {
    navigation.navigate(SCREEN.Password);
  }, []);

  const changeModalVisible = () => {
    setisModalVisible(true);
    //console.log("out")
  };

  const onCloseModal = useCallback(() => {
    setisModalVisible(false);
  }, []);

  //render
  return (
    <ScrollView style={styles.headerView}>
      <View>
        <Text
          //style={styles.header}
          style={styles.header}>
          Settings
        </Text>
      </View>
      <View style={styles.line} />

      <TouchableOpacity onPress={changeAbout}>
        <LinearGradient
          colors={['#D7D7D7', '#FFFFFF', '#D7D7D7']}
          style={styles.lineView}>
          <Text style={styles.text}>About</Text>
          <Image
            style={styles.rectangle}
            source={require('../../img/bleach.png')}
          />
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity onPress={changeProfile}>
        <LinearGradient
          colors={['#D7D7D7', '#FFFFFF', '#D7D7D7']}
          style={styles.lineView}>
          <Text style={styles.text}>Profile</Text>
          <Image
            style={styles.rectangle}
            source={require('../../img/bleach.png')}
          />
        </LinearGradient>
      </TouchableOpacity>


      <TouchableOpacity onPress={changeLanguage}>
        <LinearGradient
          colors={['#D7D7D7', '#FFFFFF', '#D7D7D7']}
          style={styles.lineView}>
          <Text style={styles.text}>Language</Text>
          <Image
            style={styles.rectangle}
            source={require('../../img/bleach.png')}
          />
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity onPress={changePass}>
        <LinearGradient
          colors={['#D7D7D7', '#FFFFFF', '#D7D7D7']}
          style={styles.lineView}>
          <Text style={styles.text}>Change Password</Text>
          <Image
            style={styles.rectangle}
            source={require('../../img/bleach.png')}
          />
        </LinearGradient>
      </TouchableOpacity>

      
      <LinearGradient
        colors={['#D7D7D7', '#FFFFFF', '#D7D7D7']}
        style={styles.lineView}>
        <Text style={styles.text}>Dark mode (not yet)</Text>
        <View style={{height: hp('11.5%')}} />
        <Switch
          trackColor={{false: '#D7D7D7', true: '#B9CDC3'}}
          style={styles.switch}
          onValueChange={() => {
            setMode(value => !value);
            EventRegister.emit('changeTheme', mode);
          }}
          value={mode}
        />
      </LinearGradient>

      <TouchableOpacity onPress={changeModalVisible}>
        <LinearGradient
          colors={['#D7D7D7', '#FFFFFF', '#D7D7D7']}
          style={styles.lineView}>
          <Text style={styles.text}>Log out</Text>
          <Image
            style={styles.power}
            source={require('../../img/power-button.png')}
          />
        </LinearGradient>
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => setisModalVisible(false)}>
        <LogOutModal onCancel={onCloseModal} onOK={onLogOut} />
      </Modal>
    </ScrollView>
  );
};

export const Settings = memo(SettingsComponent);
