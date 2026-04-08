import notifee, {
  AndroidImportance,
  AuthorizationStatus,
} from '@notifee/react-native';
import { Platform } from 'react-native';

class NotificationService {
  private channelId: string = 'default';

  // Request permission (Android + iOS)
  async requestPermission() {
    const settings = await notifee.requestPermission();

    switch (settings.authorizationStatus) {
      case AuthorizationStatus.AUTHORIZED:
        console.log('Permission granted');
        break;

      case AuthorizationStatus.DENIED:
        console.log(' Permission denied');
        break;

      default:
        console.log('Unknown permission state');
    }

    return settings;
  }

  // Create Android channel
  async createChannel() {
    if (Platform.OS !== 'android') return;

    this.channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      importance: AndroidImportance.HIGH,
    });

    return this.channelId;
  }

  // Initialize everything
  async init() {
    await this.requestPermission();
    await this.createChannel();
  }

  // Show local notification
  async showNotification(title: string, body: string) {
    await notifee.displayNotification({
      title,
      body,
      android: {
        channelId: this.channelId,
      },
    });
  }

  // Check permission status
  async hasPermission() {
    const settings = await notifee.getNotificationSettings();
    return settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED;
  }
}

// Export single instance
export const notificationService = new NotificationService();
