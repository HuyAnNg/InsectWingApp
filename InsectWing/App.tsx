import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import auth from '@react-native-firebase/auth';
import {MainStack, LogInStack} from './src/navigation/rootNavigator';
import {
  NavigationContainer,
} from '@react-navigation/native';
import {
  AppearanceProvider,
} from 'react-native-appearance';

const App = () => {
  //state
  const [mode, setMode] = useState(false);

  //effect
  useEffect(() => {
    SplashScreen.hide();

    // let eventListener:any = EventRegister.addEventListener('changeTheme', data => {
    //   setMode(data);
    // });
    // return () => {
    //   EventRegister.removeEventListener(eventListener);
    // };
  }, []);

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return <LogInStack />;
  }

  return (
    <AppearanceProvider>
      {/* <NavigationContainer theme={mode ? DefaultTheme : DarkTheme}> */}
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </AppearanceProvider>
  );
};
export default App;
