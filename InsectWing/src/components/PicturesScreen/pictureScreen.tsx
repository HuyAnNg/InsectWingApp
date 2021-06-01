import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { memo } from 'react'
import { View, Text } from 'react-native'
import { RootStackParamList, SCREEN } from '../../navigation/ScreenType'

export interface ScreenProps {
    navigation: BottomTabNavigationProp<RootStackParamList, SCREEN.Camera>;
  }

const PicturesComponent: React.FC<ScreenProps> = () => {
    return (
        <View>
            <Text>Picture</Text>
        </View>
    )
}

export default PicturesComponent