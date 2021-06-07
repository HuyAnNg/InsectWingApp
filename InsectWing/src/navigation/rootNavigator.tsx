import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React, {useMemo} from 'react';
import {RootStackParamList, SCREEN} from './ScreenType';
import {NavigationContainer} from '@react-navigation/native';

import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Start} from '../components/StartScreen/startScreen';
import {SignUp} from '../components/SignUpScreen/signUpScreen';
import {SignIn} from '../components/SignInScreen/signInScreen';
import {Camera} from '../components/CameraScreen/cameraScreen';
import {Pictures} from '../components/PicturesScreen/pictureScreen';
import {About} from '../components/SettingsScreen/AboutScreen/aboutScreen';

import {Settings} from '../components/SettingsScreen/settingsScreen';
import {TabBarAdvancedButton} from './TabBarAdvancedButton';
import {Language} from '../components/SettingsScreen/LanguageScreen/languageScreen';
import {Password} from '../components/SettingsScreen/PasswordScreen/passwordChange';
import {Profile} from '../components/SettingsScreen/ProfileScreen/profileScreen';
import {Detail} from '../components/PicturesScreen/DetailScreen/Detail';

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator<RootStackParamList>();

type Props = {
  barColor: string;
};

const styles = StyleSheet.create({
  tab: {
    shadowColor: '#7F5DF0',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export const LogInStack = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={SCREEN.Start} headerMode="none">
        <RootStack.Screen name={SCREEN.Start} component={Start} />
        <RootStack.Screen name={SCREEN.SignUp} component={SignUp} />
        <RootStack.Screen name={SCREEN.SignIn} component={SignIn} />
        <RootStack.Screen name={SCREEN.Settings} component={MainStack} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};


export const MainStack = () => {
  return (
    <RootStack.Navigator initialRouteName={SCREEN.Settings} headerMode="none">
      <RootStack.Screen name={SCREEN.Settings} component={BottomTab} />
      <RootStack.Screen name={SCREEN.Language} component={Language} />
      <RootStack.Screen name={SCREEN.About} component={About} />
      <RootStack.Screen name={SCREEN.Profile} component={Profile} />
      <RootStack.Screen name={SCREEN.Password} component={Password} />

      <RootStack.Screen name={SCREEN.Detail} component={Detail} />
    </RootStack.Navigator>
  );
};


export const BottomTab: React.FC<Props> = ({barColor}) => {
  const screenOptions = useMemo<StackNavigationOptions>(
    () => ({
      headerShown: false,
    }),
    [],
  );
  return (
    <Tab.Navigator
      initialRouteName="Settings"
      screenOptions={screenOptions}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: '#FDE695',
          position: 'absolute',
          marginVertical: 10,
          marginHorizontal: 10,
          borderRadius: 15,
          height: 60,
          ...styles.tab,
        },
      }}>
      <Tab.Screen
        name={SCREEN.Settings}
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              //style={styles.icon}
              source={require('../img/settings.png')}
              style={{
                tintColor: focused ? 'white' : 'black',
                width: 25,
                height: 25,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN.Camera}
        component={Camera}
        options={{
          tabBarButton: props => (
            <TabBarAdvancedButton bgColor={barColor} {...props} />
          ),
        }}
      />

      <Tab.Screen
        name={SCREEN.Pictures}
        component={Pictures}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                tintColor: focused ? 'white' : 'black',
                width: 25,
                height: 25,
              }}
              source={require('../img/picture.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
