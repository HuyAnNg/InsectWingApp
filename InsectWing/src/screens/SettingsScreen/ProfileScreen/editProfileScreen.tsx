import {StackScreenProps} from '@react-navigation/stack';
import React, {memo, useCallback, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import {RootStackParamList, SCREEN} from '../../../navigation/ScreenType';
import {styles} from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import database from '@react-native-firebase/database';

export type ScreenProps = StackScreenProps<RootStackParamList, SCREEN.Settings>;

const ProfileComponent = ({navigation}: ScreenProps) => {
  //state
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [sex, setSex] = useState('');

  //function

  const back = useCallback(() => {
    navigation.navigate(SCREEN.showProfile);
  }, []);

  const updateName = (name: any) => {
    database().ref('/user').update({name: name});
    setName('');
  };
  const updateAge = (age: any) => {
    database().ref('/user').update({age: age});
    setAge('');
  };
  const updateSex = (sex: any) => {
    database().ref('/user').update({sex: sex});
    setSex('');
  };
  const updateEmail = (email: any) => {
    database().ref('/user').update({email: email});
    setEmail('');
  };
  const updateInfo = () => {
    if (email == '' || age == '' || name == '' || sex == '') {
      Alert.alert('Please fill all texts to edit', '', [
        {
          text: 'OK',
        },
      ]);
    } else {
      updateAge(age);
      updateEmail(email);
      updateName(name);
      updateSex(sex);
      Alert.alert('Update successful!!', '', [
        {
          text: 'OK',
        },
      ]);
      navigation.navigate(SCREEN.showProfile);
    }
  };

  //render
  return (
    <View>
      <ScrollView>
        <View style={styles.headerView}>
          <View style={styles.view}></View>
          <Text style={styles.header}>Edit</Text>
          <View style={styles.view} />
        </View>
        <View style={styles.line} />
        <Image
          style={styles.img}
          source={require('../../../img/demouser.png')}
        />

        <View style={styles.container}>
          <View style={styles.lineView}>
            <Image
              style={styles.icon}
              source={require('../../../img/name.png')}
            />
            <View style={styles.textLine}>
              <TextInput
                style={styles.input}
                placeholder="User name"
                placeholderTextColor="gray"
                value={name}
                onChangeText={setName}
              />

              <View style={styles.line2} />
            </View>
          </View>

          <View style={styles.lineView}>
            <Image
              style={styles.icon}
              source={require('../../../img/circular-line-with-word-age-in-the-center.png')}
            />
            <View style={styles.textLine}>
              <TextInput
                style={styles.input}
                placeholder="Age"
                placeholderTextColor="gray"
                value={age}
                onChangeText={setAge}
              />

              <View style={styles.line2} />
            </View>
          </View>

          <View style={styles.lineView}>
            <Image
              style={styles.icon}
              source={require('../../../img/sex.png')}
            />
            <View style={styles.textLine}>
              <TextInput
                style={styles.input}
                placeholder="Sex"
                placeholderTextColor="gray"
                value={sex}
                onChangeText={setSex}
              />

              <View style={styles.line2} />
            </View>
          </View>

          <View style={styles.lineView}>
            <Image
              style={styles.icon}
              source={require('../../../img/mail.png')}
            />
            <View style={styles.textLine}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="gray"
                value={email}
                onChangeText={setEmail}
              />

              <View style={styles.line2} />
            </View>
          </View>

          <TouchableOpacity onPress={updateInfo}>
            <View style={styles.btnSaveView}>
              <Text style={styles.btnSave}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export const editProfile = memo(ProfileComponent);
