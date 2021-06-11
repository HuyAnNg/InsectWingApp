import {StackScreenProps} from '@react-navigation/stack';
import React, {memo, useCallback, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import {RootStackParamList, SCREEN} from '../../../navigation/ScreenType';
import {styles} from '../ProfileScreen/styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


export type ScreenProps = StackScreenProps<RootStackParamList, SCREEN.Settings>;

const ProfileComponent = ({navigation}: ScreenProps) => {
  //state
  const [isVisiblity, setVisiblity] = useState(false);

  //function
  const onClickVisiblity = useCallback(() => {
    setVisiblity(!isVisiblity);
  }, [isVisiblity]);

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
        <View style={{width: wp('20%'),}} />
      </View>
      <View style={styles.line} />
      <Image style={styles.img} source={require('../../../img/demouser.png')} />
      <View style={styles.container}>
        <View style={styles.lineView}>
          <Image
            style={styles.icon}
            source={require('../../../img/name.png')}
          />
          <View style={styles.textLine}>
            <TextInput style={styles.input} placeholder="User name"  placeholderTextColor="gray"/>
            <View style={styles.line2} />
          </View>
        </View>

        <View style={styles.lineView}>
          <Image
            style={styles.icon}
            source={require('../../../img/circular-line-with-word-age-in-the-center.png')}
          />
          <View style={styles.textLine}>
            <TextInput style={styles.input} placeholder="Age"  placeholderTextColor="gray"/>
            <View style={styles.line2} />
          </View>
        </View>

        <View style={styles.lineView}>
          <Image style={styles.icon} source={require('../../../img/sex.png')} />
          <View style={styles.textLine}>
            <TextInput style={styles.input} placeholder="Sex"  placeholderTextColor="gray"/>
            <View style={styles.line2} />
          </View>
        </View>

        <View style={styles.lineView}>
          <Image
            style={styles.icon}
            source={require('../../../img/mail.png')}
          />
          <View style={styles.textLine}>
            <TextInput style={styles.input} placeholder="Email"  placeholderTextColor="gray"/>
            <View style={styles.line2} />
          </View>
        </View>

        <TouchableOpacity>
          <View style={styles.btnSaveView}>
            <Text style={styles.btnSave}>Save</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const Profile = memo(ProfileComponent);
