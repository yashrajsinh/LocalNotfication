import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TabNav from './src/navigation/TabNav';
//nav ref
import {
  navigationRef,
  setNavigationReady,
} from './src/services/navigationService';
import { useEffect } from 'react';
//BG noti
import { sendAnswerNotification } from './src/utils/backGroundNotificaiton';

function App() {
  useEffect(() => {
    sendAnswerNotification();
  }, []);
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
