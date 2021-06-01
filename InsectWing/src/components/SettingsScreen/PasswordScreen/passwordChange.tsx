import { StackScreenProps } from '@react-navigation/stack';
import React, {memo, useCallback} from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import { RootStackParamList, SCREEN } from '../../../navigation/ScreenType';
import {styles} from '../PasswordScreen/styles';



export type ScreenProps = StackScreenProps<RootStackParamList, SCREEN.Settings>;

const passwordChangeComponent = ({navigation}:ScreenProps) => {
    
    //navigate
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

      <View style={styles.container}><View style={styles.lineView}>
        <Image style={styles.icon} source={require('../../../img/lock.png')} />
        <View style={styles.textLine}>
          <TextInput
            style={styles.input}
            placeholder="Recent Password"
            secureTextEntry={true}
          />
          <View style={styles.line} />
        </View>
      </View>

      <View style={styles.lineView}>
        <Image style={styles.icon} source={require('../../../img/lock.png')} />
        <View style={styles.textLine}>
          <TextInput
            style={styles.input}
            placeholder="New Password"
            secureTextEntry={true}
          />
          <View style={styles.line} />
        </View>
      </View>

      <View style={styles.lineView}>
        <Image style={styles.icon} source={require('../../../img/lock.png')} />
        <View style={styles.textLine}>
          <TextInput
            style={styles.input}
            placeholder="Repeat"
            secureTextEntry={true}
          />
          <View style={styles.line} />
        </View>
      </View></View>
      <TouchableOpacity>
          <View style={styles.btnSaveView}>
            <Text style={styles.btnSave}>Save</Text>
          </View>
        </TouchableOpacity>

    </View>
  );
};

export const Password = memo(passwordChangeComponent);
