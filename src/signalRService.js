import { HubConnectionBuilder } from '@microsoft/signalr';

const signalRService = {
  connection: null,

  async startConnection() {
    this.connection = new HubConnectionBuilder()
      .withUrl('https://localhost:7101/notifications')
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
