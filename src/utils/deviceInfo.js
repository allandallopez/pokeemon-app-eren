import DeviceInfo from 'react-native-device-info'
import { Platform } from 'react-native'

export const isIphone = Platform.OS === 'ios'
export const isAndroid = Platform.OS === 'android'
