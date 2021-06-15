import {StackScreenProps} from '@react-navigation/stack';
import React, {memo, useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RootStackParamList, SCREEN} from '../../../navigation/ScreenType';
import {styles} from './styles';
import database from '@react-native-firebase/database';
import {Value} from 'react-native-reanimated';

export type ScreenProps = StackScreenProps<RootStackParamList, SCREEN.Settings>;

const showProfileScreenComponent = ({navigation}: ScreenProps) => {
  //state
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [sex, setSex] = useState('');

  //function
  const back = useCallback(() => {
    navigation.navigate(SCREEN.Settings);
  }, []);

  const edit = useCallback(() => {
    navigation.navigate(SCREEN.Profile);
  }, []);

  const showName = useCallback(() => {
    database()
      .ref('/user/name')
      .on('value', snapshot => {
        setName(snapshot.val());
      });
  }, []);
  const showEmail = useCallback(() => {
    database()
      .ref('/user/email')
      .on('value', snapshot => {
        setEmail(snapshot.val());
      });
  }, []);
  const showAge = useCallback(() => {
    database()
      .ref('/user/age')
      .on('value', snapshot => {
        setAge(snapshot.val());
      });
  }, []);
  const showSex = useCallback(() => {
    database()
      .ref('/user/sex')
      .on('value', snapshot => {
        setSex(snapshot.val());
      });
  }, []);

  useEffect(() => {
    showName();
    showAge();
    showEmail();
    showSex();
  }, []);

  //render
  return (
    <View>
      <ScrollView>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={back}>
            <View style={styles.btnView}>
              <Text style={styles.btnBack}>Back</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.header}>Profile</Text>

          <TouchableOpacity onPress={edit}>
            <View style={styles.btnView}>
              <Text style={styles.btnBack}>Edit</Text>
            </View>
          </TouchableOpacity>
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
              <Text style={styles.infoText}>{name}</Text>
              <View style={styles.line2} />
            </View>
          </View>

          <View style={styles.lineView}>
            <Image
              style={styles.icon}
              source={require('../../../img/circular-line-with-word-age-in-the-center.png')}
            />
            <View style={styles.textLine}>
              <Text style={styles.infoText}>{age}</Text>
              <View style={styles.line2} />
            </View>
          </View>

          <View style={styles.lineView}>
            <Image
              style={styles.icon}
              source={require('../../../img/sex.png')}
            />
            <View style={styles.textLine}>
              <Text style={styles.infoText}>{sex}</Text>
              <View style={styles.line2} />
            </View>
          </View>

          <View style={styles.lineView}>
            <Image
              style={styles.icon}
              source={require('../../../img/mail.png')}
            />
            <View style={styles.textLine}>
              <Text style={styles.infoText}>{email}</Text>
              <View style={styles.line2} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export const showProfile = memo(showProfileScreenComponent);
