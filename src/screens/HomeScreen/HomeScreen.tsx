import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SafeAreaWrapper from '../../components/SafeAreaWrapper/SafeAreaWrapper'
import ThemedView from '../../components/ThemedView/ThemedView'
import ThemedText from '../../components/ThemedText/ThemedText'

const HomeScreen = () => {
  return (
    <SafeAreaWrapper>
      <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ThemedText style={{ fontSize: 18 }} selectable selectionColor={'yellowgreen'}>Hello sopan </ThemedText>
        <ThemedText style={{ fontSize: 18 }}>Welcome to React Native World!</ThemedText>
        <ThemedText>Home Screen</ThemedText>
      </ThemedView>
    </SafeAreaWrapper>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})