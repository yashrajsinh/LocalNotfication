import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TabNav from './src/navigation/TabNav';
//nav ref
import {
  navigationRef,
  setNavigationReady,
} from './src/services/navigationService';
import { useEffect } from 'react';
import notifee from '@notifee/react-native';
import { handleNotificationNavigation } from './src/utils/noficationHandler';
//BG noti
import { sendAnswerNotification } from './src/utils/backGroundNotificaiton';

function App() {
  useEffect(() => {
    sendAnswerNotification();
    async function checkInitialNotification() {
      const initial = await notifee.getInitialNotification();
      if (!initial) return;
      const data = initial.notification?.data;
      if (data) {
        const interval = setInterval(() => {
          if (navigationRef.isReady()) {
            handleNotificationNavigation(data);
            clearInterval(interval);
          }
        }, 100);
      }
    }
    checkInitialNotification();
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
