import { Text } from 'react-native';
import React from 'react';
import SafeAreaWrapper from '../../components/SafeAreaWrapper/SafeAreaWrapper';

const LoginScreen = () => {
  return (
    <SafeAreaWrapper avoidKeyboard={true}>
      <Text>LoginScreen</Text>
    </SafeAreaWrapper>
  );
};

export default LoginScreen;
