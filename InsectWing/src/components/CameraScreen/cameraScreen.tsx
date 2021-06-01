import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import React, { memo } from 'react'
import { View, Text } from 'react-native'
import { RootStackParamList, SCREEN } from '../../navigation/ScreenType'

export interface ScreenProps {
    navigation: BottomTabNavigationProp<RootStackParamList, SCREEN.Camera>;
  }

const cameraScreenComponent: React.FC<ScreenProps> = () => {
    return (
        <View>
            <Text>Camera</Text>
        </View>
    )
}
export default cameraScreenComponent
//export const camera = memo(cameraScreenComponent)