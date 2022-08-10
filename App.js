import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { AuthNaviator } from './architecture/components/AuthNavigator.js';
import { Order } from './architecture/screens/Order';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        {/* <AuthNaviator /> */}
      </NavigationContainer>
      <Order/>
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    // backgroundColor: '#FFBC80',
    flex: 1,
    paddingVertical: 10,
  },
});
