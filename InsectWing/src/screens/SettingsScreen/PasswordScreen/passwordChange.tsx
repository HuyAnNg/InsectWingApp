import {StackScreenProps} from '@react-navigation/stack';
import React, {memo, useCallback, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import {RootStackParamList, SCREEN} from '../../../navigation/ScreenType';
import {styles} from '../PasswordScreen/styles';
import auth, {firebase} from '@react-native-firebase/auth';

export type ScreenProps = StackScreenProps<RootStackParamList, SCREEN.Settings>;

const passwordChangeComponent = ({navigation}: ScreenProps) => {
  //state
  const [isVisiblity, setVisiblity] = useState(false);
  const [isVisiblityNew, setVisiblityNew] = useState(false);
  const [password, setPassword] = useState('');

  //function
  const onClickVisiblity = useCallback(() => {
    setVisiblity(!isVisiblity);
  }, [isVisiblity]);

  const onClickVisiblityNew = useCallback(() => {
    setVisiblityNew(!isVisiblityNew);
  }, [isVisiblityNew]);

  const back = useCallback(() => {
    navigation.navigate(SCREEN.Settings);
  }, []);

  //render
  return (
    <View>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={back}>
          <View style={styles.btnView}>
            <Text style={styles.btnBack}>Back</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.header}>Profile</Text>
        <View style={{width: 60}} />
      </View>
      <View style={styles.line} />

      <View style={styles.container}>
        <View style={styles.lineView}>
          <Image
            style={styles.icon}
            source={require('../../../img/lock.png')}
          />
          <View style={styles.textLine}>
            <View style={styles.password}>
              <TextInput
                style={styles.input}
                placeholder="Recently Password"
                placeholderTextColor="gray"
                maxLength={12}
                secureTextEntry={isVisiblity ? false : true}
              />
              <TouchableOpacity onPress={onClickVisiblity}>
                <Image
                  source={
                    isVisiblity
                      ? require('../../../img/visibility.png')
                      : require('../../../img/visibility1.png')
                  }
                  style={styles.eye}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.line} />
          </View>
        </View>

        <View style={styles.lineView}>
          <Image
            style={styles.icon}
            source={require('../../../img/lock.png')}
          />
          <View style={styles.textLine}>
            <View style={styles.password}>
              <TextInput
                style={styles.input}
                placeholder="New Password"
                placeholderTextColor="gray"
                maxLength={12}
                secureTextEntry={isVisiblityNew ? false : true}
              />
              <TouchableOpacity onPress={onClickVisiblityNew}>
                <Image
                  source={
                    isVisiblityNew
                      ? require('../../../img/visibility.png')
                      : require('../../../img/visibility1.png')
                  }
                  style={styles.eye}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.line} />
          </View>
        </View>

        <View style={styles.lineView}>
          <Image
            style={styles.icon}
            source={require('../../../img/lock.png')}
          />
          <View style={styles.textLine}>
            <View style={styles.password}>
              <TextInput
                style={styles.input}
                placeholder="Repeat"
                placeholderTextColor="gray"
                maxLength={12}
                secureTextEntry={isVisiblityNew ? false : true}
              />
              {/* <TouchableOpacity onPress={onClickVisiblityNew}>
                <Image
                  source={
                    isVisiblityNew
                      ? require('../../../img/visibility.png')
                      : require('../../../img/visibility1.png')
                  }
                  style={styles.eye}
                />
              </TouchableOpacity> */}
            </View>
            <View style={styles.line} />
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <View style={styles.btnSaveView}>
          <Text style={styles.btnSave}>Save</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const Password = memo(passwordChangeComponent);
