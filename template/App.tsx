/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';

import {Provider} from 'react-redux';
import SplashScreen from 'react-native-bootsplash';
import ErrorBoundary from 'react-native-error-boundary';
import {PersistGate} from 'redux-persist/integration/react';
import { KeyboardProvider } from 'react-native-keyboard-controller';

import {Colors} from './src/utils/colors';
import {ErrorFallback} from './src/components';
import {AppContainer} from './src/containers/AppContainer';
import {SPLASH_HIDE_DURATION} from './src/utils/constants';
import {persistor, store} from './src/appRedux/store.utils';

function App(): React.JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      // Perform computations...
      SplashScreen.hide(); // Hide splash screen when done
    }, SPLASH_HIDE_DURATION);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <ActivityIndicator
            size="large"
            color={Colors.BLACK}
            style={StyleSheet.absoluteFill}
          />
        }
        persistor={persistor}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
        <KeyboardProvider>
          <AppContainer />
        </KeyboardProvider>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
}

export default App;
