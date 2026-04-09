import notifee, { TriggerType } from '@notifee/react-native';

export async function sendAnswerNotification() {
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  await notifee.createTriggerNotification(
    {
      title: 'React Native',
      body: 'TS with AI is OG',
      data: {
        type: 'answer',
        postId: '42',
      },
      android: {
        channelId,
        pressAction: {
          id: 'default',
        },
      },
    },
    {
      type: TriggerType.TIMESTAMP,
      timestamp: Date.now() + 10000, //10 SEC after
    },
  );
}
