import React from 'react'
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context'
import RootNavigator from './src/navigation/RootNavigator'
import { AuthProvider } from './src/context/AuthContext'

const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </SafeAreaProvider>
  )
}

export default App