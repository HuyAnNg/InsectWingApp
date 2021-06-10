import {StackScreenProps} from '@react-navigation/stack';
import React, {memo, useCallback, useState} from 'react';
import {View, Text, Switch, Image, Modal} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from '../../components/SettingsScreen/styles';
import { LogOutModal} from '../SettingsScreen/logOutModal';
import {RootStackParamList, SCREEN} from '../../navigation/ScreenType';

// export interface ScreenProps {
//   navigation: BottomTabNavigationProp<RootStackParamList, SCREEN.Camera>;
// }

export type ScreenProps = StackScreenProps<RootStackParamList, SCREEN.Settings>;

const SettingsComponent = ({navigation}: ScreenProps) => {
  // state
  const [isModalVisible, setisModalVisible] = useState(false);
  
  //switch
  const [switchValue, setSwitchValue] = useState(false);

  const toggleSwitch = (value: any) => {
    //To handle switch toggle
    setSwitchValue(value);
    //State changes according to switch
  };

  //function
  const changeLanguage = useCallback(() => {
    navigation.navigate(SCREEN.Language);
  }, []);
  const changeAbout = useCallback(() => {
    navigation.navigate(SCREEN.About);
  }, []);
  const changeProfile = useCallback(() => {
    navigation.navigate(SCREEN.Profile);
  }, []);
  const onLogOut = useCallback(() => {
    navigation.navigate(SCREEN.Start);
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
  },[])

  //render
  return (
    <ScrollView style={styles.headerView}>
      <View>
        <Text style={styles.header}>Settings</Text>
      </View>
      <View style={styles.line} />

      <LinearGradient
        colors={['#D7D7D7', '#FFFFFF', '#D7D7D7']}
        style={styles.lineView}>
        {/* <View style={styles.itemView}> */}
        <Text style={styles.text}>Notification</Text>
        <View style={{height: 50}} />
        <Switch
          trackColor={{false: '#D7D7D7', true: '#B9CDC3'}}
          style={styles.switch}
          onValueChange={toggleSwitch}
          value={switchValue}
        />
        {/* </View> */}
      </LinearGradient>

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
        animationType='fade'
        visible={isModalVisible}
        onRequestClose={() => setisModalVisible(false)}
        >
          <LogOutModal onCancel = {onCloseModal} onOK={onLogOut}/>
        </Modal>
    </ScrollView>
  );
};

export const Settings = memo(SettingsComponent);
