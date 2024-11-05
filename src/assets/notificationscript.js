import signalRService from '../signalRService';
import bellIconImage from '@/assets/bell.png';

export default {
    data() {
        return {
            showNotifications: false,
            notificationCount: 0,
            notifications: [],
            bellIcon: bellIconImage,
            hasNewNotification: false,
        };
    },
    methods: {
        toggleNotifications() {
            this.showNotifications = !this.showNotifications;
            if (this.showNotifications) {
                this.hasNewNotification = false;
            }
        },
        handleNotification(notification) {
            this.notifications.unshift(notification);
            this.notificationCount++;
            this.hasNewNotification = true;
        },
        clearAllNotifications() {
            this.notifications = [];
            this.notificationCount = 0;
        },
        clearNotification(index) {
            this.notifications.splice(index, 1);
            this.notificationCount--;
        },
    },
    async mounted() {
        await signalRService.startConnection();
        signalRService.onNotificationReceived(this.handleNotification);
    },
};