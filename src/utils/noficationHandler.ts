import { navigate } from '../services/navigationService';

export function handleNotificationNavigation(data: any) {
  if (!data) return;

  switch (data.type) {
    case 'answer':
      navigate('Profile', { postId: data.postId });
      break;

    default:
      navigate('Home');
  }
}
