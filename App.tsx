import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TabNav from './src/navigation/TabNav';

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <TabNav />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
