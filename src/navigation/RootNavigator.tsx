import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RoleBasedNavigator from './RoleBasedNavigator';
import AuthNavigator from './AuthNavigator';
import PublicNavigator from './PublicNavigator';


const isLoggedIn = true;
const role = 'admin'; // simulate role; could be 'user' | 'admin' | 'guest' | 'creator'


const RootNavigator = () => {
  return (
    <NavigationContainer>
      {
        isLoggedIn ?
          (role === 'admin' || role === 'user') ?
            (
              <RoleBasedNavigator />
            )
            :
            (
              <AuthNavigator />
            )
          :
          (
            <PublicNavigator />
          )
      }
    </NavigationContainer>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})