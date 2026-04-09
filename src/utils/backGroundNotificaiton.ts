import notifee, { TriggerType } from '@notifee/react-native';

export async function sendAnswerNotification() {
  await notifee.createTriggerNotification(
    {
      title: 'New Answer',
      body: 'Someone replied to your question',
      data: {
        type: 'answer',
        postId: '42',
      },
      android: {
        channelId: 'default',
        pressAction: {
          id: 'default',
        },
      },
    },
    {
      type: TriggerType.TIMESTAMP,
      timestamp: Date.now() + 10000, //10 sec later
    },
  );
}
