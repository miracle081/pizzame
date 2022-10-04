import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNaviator } from './architecture/components/AuthNavigator.js';
import { Maps } from './architecture/screens/Maps.js'; 

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <AuthNaviator /> 
      </NavigationContainer>
      {/* <Maps /> */}
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
