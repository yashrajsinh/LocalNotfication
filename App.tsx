import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TabNav from './src/navigation/TabNav';
//nav ref
import {
  navigationRef,
  setNavigationReady,
} from './src/services/navigationService';

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          setNavigationReady();
        }}
      >
        <TabNav />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
