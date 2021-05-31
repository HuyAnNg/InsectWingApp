import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Stack} from './src/navigation/rootNavigator';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Stack />;
};

export default App;
