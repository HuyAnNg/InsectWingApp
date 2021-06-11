import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import auth from '@react-native-firebase/auth';
import {MainStack, LogInStack} from './src/navigation/rootNavigator';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { authen } from './src/firebase/authProvider';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

 // return <LogInStack />;

 // Set an initializing state whilst Firebase connects
 const [initializing, setInitializing] = useState(true);
 const [user, setUser] = useState();

 // Handle user state changes
 function onAuthStateChanged(user:any) {
   setUser(user);
   if (initializing) setInitializing(false);
 }

 useEffect(() => {
   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
   return subscriber; // unsubscribe on unmount
 }, []);

 if (initializing) return null;

 if (!user) {
   return (
     <LogInStack/>
    // <View>
    //     <Text>Login</Text>
    //   </View>
   );
 }

 return (
   <NavigationContainer><MainStack/></NavigationContainer>
   
//   <View>
//   <Text>Welcome </Text>
// </View>
 );
};

export default App;