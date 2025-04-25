import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RoleBasedNavigator from './RoleBasedNavigator';
import AuthNavigator from './AuthNavigator';
import PublicNavigator from './PublicNavigator';
import { useAuth } from '../context/AuthContext';
import { linking } from './linking';


const RootNavigator = () => {

  const { isLoggedIn, role } = useAuth()

  return (
    <NavigationContainer linking={linking}>
      {
        !isLoggedIn ?
          (
            <PublicNavigator />
          )
          :
          role === 'admin' || role === 'user' ?
            (
              <RoleBasedNavigator />
            )
            :
            (
              <AuthNavigator />
            )
      }
    </NavigationContainer>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})