import notifee, { EventType } from '@notifee/react-native';
import { navigate } from '../services/navigationService';

export function initNotificationHandler() {
  // Foreground tap
  notifee.onForegroundEvent(({ type, detail }) => {
    if (type === EventType.PRESS) {
      const data = detail.notification?.data;

      if (data?.type === 'answer') {
        navigate('Profile', { postId: data.postId });
      }
    }
  });

  // App opened from background/quit
  notifee.getInitialNotification().then(initial => {
    if (!initial) return;

    const data = initial.notification?.data;

    if (data?.type === 'answer') {
      navigate('Profile', { postId: data.postId });
    }
  });
}
