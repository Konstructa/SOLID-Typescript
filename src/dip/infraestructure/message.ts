import { MessagingProtocol } from '../interfaces/messaging-protocol';

export class Messaging implements MessagingProtocol {
  sendMessage(message: string) {
    console.log(message);
  }
}
