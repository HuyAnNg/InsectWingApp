import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {BottomTab, MainStack, LogInStack} from './src/navigation/rootNavigator';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <LogInStack />;
};

export default App;