import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RoleBasedNavigator from './RoleBasedNavigator';
import AuthNavigator from './AuthNavigator';
import PublicNavigator from './PublicNavigator';
import { useAuth } from '../context/AuthContext';


const RootNavigator = () => {

  const { isLoggedIn, role } = useAuth()

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