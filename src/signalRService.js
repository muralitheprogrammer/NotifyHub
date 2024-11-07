import { HubConnectionBuilder } from '@microsoft/signalr';

const signalRService = {
  connection: null,

  async startConnection() {
    this.connection = new HubConnectionBuilder()
      .withUrl('https://35b4e4vg24nlplmvzxhzrj2hcu0rnufz.lambda-url.eu-north-1.on.aws/notifications')
      .withAutomaticReconnect()
      .build();

    try {
      await this.connection.start();
    } catch (err) {
      console.error('Error while starting SignalR connection: ', err);
    }
  },

  onNotificationReceived(callback) {
    this.connection.on('ReceiveNotification', (notification) => {
      callback(notification);
    });
  },
};

export default signalRService;
