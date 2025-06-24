import React from 'react';
import SafeAreaWrapper from '../../components/SafeAreaWrapper/SafeAreaWrapper';
import ThemedView from '../../components/ThemedView/ThemedView';
import ThemedText from '../../components/ThemedText/ThemedText';
import { StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaWrapper>
      <ThemedView style={styles.headingcontainer}>
        <ThemedText style={styles.text} selectable selectionColor={'yellowgreen'}>Hello sopan </ThemedText>
        <ThemedText style={styles.text}>Welcome to React Native World!</ThemedText>
        <ThemedText>Home Screen</ThemedText>
      </ThemedView>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headingcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});
