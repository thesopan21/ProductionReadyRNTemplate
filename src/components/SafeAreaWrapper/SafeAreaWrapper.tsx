import { KeyboardAvoidingView, Platform, StyleProp, StyleSheet, ViewStyle } from 'react-native'
import React, { FC, ReactNode } from 'react'
import { Edge, SafeAreaView } from 'react-native-safe-area-context';


type SafeAreaWrapperProps = {
  children: ReactNode;
  edges?: Edge[];
  style?: StyleProp<ViewStyle>;
  avoidKeyboard?: boolean;
}

const defaultPadding = '6%';

const SafeAreaWrapper: FC<SafeAreaWrapperProps> = ({
  children,
  style,
  edges = ['top', 'left', 'right'],
  avoidKeyboard = false
}) => {


  return avoidKeyboard ?
    (
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <SafeAreaView
          style={[styles.container, { padding: defaultPadding, backgroundColor:'#f7e1f7' }, style]}
          edges={edges}
        >
          {children}
        </SafeAreaView>
      </KeyboardAvoidingView>
    )
    :
    (
      <SafeAreaView
        style={[styles.container, { padding: defaultPadding, backgroundColor: '#e6e4e1' }, style]}
        edges={edges}
      >
        {children}
      </SafeAreaView>
    )
}

export default SafeAreaWrapper

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})