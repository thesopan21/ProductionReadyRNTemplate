import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FeedScreen from '../screens/FeedScreen/FeedScreen'


const Stack = createNativeStackNavigator()

const PublicNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Feed' component={FeedScreen} />
    </Stack.Navigator>
  )
}

export default PublicNavigator

const styles = StyleSheet.create({})