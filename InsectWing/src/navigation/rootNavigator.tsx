import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React, {useMemo} from 'react';
import {RootStackParamList, SCREEN} from './ScreenType';
import {NavigationContainer} from '@react-navigation/native';

import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Start} from '../startScreen';
import {SignUp} from '../components/Account/signUpScreen';
import {SignIn} from '../components/Account/signInScreen';

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator<RootStackParamList>();

const styles = StyleSheet.create({
  icon: {width: 25, height: 25},
  tab: {
    shadowColor: '#7F5DF0',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

// export const MyTab = () => {
//   const screenOptions = useMemo<StackNavigationOptions>(
//     () => ({
//       headerShown: false,
//     }),
//     [],
//   );
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         initialRouteName="Settings"
//         screenOptions={screenOptions}
//         tabBarOptions={{
//           showLabel: false,
//           style: {
//             backgroundColor: '#FDE695',
//             position:'absolute',
//             marginVertical:10,
//             marginHorizontal:10,
//             borderRadius:15,height:60,
//             ...styles.tab
//           },
//         }}>
//         <Tab.Screen
//           name={SCREEN.Camera}
//           component={cameraScreenComponent}
//           options={{
//             tabBarIcon: () => (
//               <Image
//                 style={styles.icon}
//                 source={require('../img/camera.png')}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name={SCREEN.Settings}
//           component={MyStack}
//           options={{
//             tabBarIcon: () => (
//               <Image
//                 style={styles.icon}
//                 source={require('../img/settings.png')}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name={SCREEN.Pictures}
//           component={PicturesComponent}
//           options={{
//             tabBarIcon: () => (
//               <Image
//                 style={styles.icon}
//                 source={require('../img/picture.png')}
//               />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };
// export const MyStack = () => {
//   return (
//     <Stack.Navigator initialRouteName={SCREEN.Settings} headerMode="none">
//       <Stack.Screen name={SCREEN.Settings} component={SettingsComponent} />
//       <Stack.Screen name={SCREEN.Language} component={Language} />
//       <Stack.Screen name={SCREEN.About} component={About} />
//       <Stack.Screen name={SCREEN.Profile} component={Profile} />
//     </Stack.Navigator>
//   );
// };

export const Stack = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={SCREEN.Start} headerMode="none">
        <RootStack.Screen name={SCREEN.Start} component={Start} />
        <RootStack.Screen name={SCREEN.SignUp} component={SignUp} />
        <RootStack.Screen name={SCREEN.SignIn} component={SignIn} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
