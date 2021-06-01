import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {BottomTab, SettingStack, Stack} from './src/navigation/rootNavigator';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Stack />;
};

export default App;
