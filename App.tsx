import React from 'react'
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context'
import RootNavigator from './src/navigation/RootNavigator'
import { AuthProvider } from './src/context/AuthContext'
import { Provider } from 'react-redux'
import store, { persistor } from './src/redux/store'
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <AuthProvider>
        <Provider store={store}>
          <PersistGate loading={false} persistor={persistor}>
            <RootNavigator />
          </PersistGate>
        </Provider>
      </AuthProvider>
    </SafeAreaProvider>
  )
}

export default App