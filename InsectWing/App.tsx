import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import auth from '@react-native-firebase/auth';
import {MainStack, LogInStack} from './src/navigation/rootNavigator';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
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
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
// ok chưa?
// mấy cái import thì mình add lại hả ằ
// ừ đây là anh clone lại rồi copy changes qua thôi, copy thiếu thì em thêm nhé,
// clone lại thì yarrn lại mấy cái config trên firebase cũng phải sửa lại hả <i class="fa fa-anchor"
// aria-hidden="true"></i>
// không, sửa nếu code thiếu thôi. cos goole.json rồi đó.
// thư mục src là copy từ phần nãy chắc là mới nhất rồi
// còn thư mục android cũng copy rồi
// chạy thử đi