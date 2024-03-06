import line from '@line/bot-sdk';
import { config } from '../config';

// Initialize Line Client with credentials
const { messagingApi } = line;

new line.messagingApi.MessagingApiClient({
    channelAccessToken: config.line.channelAccessToken,
});

line.middleware({
    channelAccessToken: config.line.channelAccessToken,
    channelSecret: config.line.channelSecret,
  });


class LineService {
//   /**
//    * Sends a reply message to a user.
//    * @param replyToken The token for replying to an event.
//    * @param messages The messages to be sent.
//    */
//   static async replyMessage(replyToken: string, messages: Message | Message[]) {
//     try {
//       await lineClient.replyMessage(replyToken, messages);
//       console.log('Message sent successfully');
//     } catch (error) {
//       console.error('Failed to send message:', error);
//     }
//   }

//   /**
//    * Pushes messages to a user.
//    * @param userId The ID of the user to whom the message will be sent.
//    * @param messages The messages to be sent.
//    */
//   static async pushMessage(userId: string, messages: Message | Message[]) {
//     try {
//       await lineClient.pushMessage(userId, messages);
//       console.log('Message pushed successfully');
//     } catch (error) {
//       console.error('Failed to push message:', error);
//     }
//   }

//   /**
//    * Handles incoming events from Line webhook.
//    * @param event A webhook event from Line.
//    */
//   static async handleEvent(event: WebhookEvent) {
//     // Example: Log event type
//     console.log('Received event with type:', event.type);

//     // Add your event handling logic here
//     // This could involve calling `replyMessage`, `pushMessage`, or other methods based on the event type
//   }
}

export { LineService };
