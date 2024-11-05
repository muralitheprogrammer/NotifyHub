<template>
  <div class="notification-bell">
    <img class="bell-icon" :class="{ 'ringing': hasNewNotification }" @click="toggleNotifications" :src="bellIcon"
      alt="Notifications" />
    <span class="notification-count" v-if="notificationCount > 0">
      {{ notificationCount }}
    </span>
    <div v-if="showNotifications" class="notification-dropdown">
      <p v-if="notifications.length === 0">No new notifications</p>
      <ul>
        <li v-for="(notification, index) in notifications" :key="index">
          {{ notification }}
          <button @click="clearNotification(index)">Clear</button>
        </li>
      </ul>
      <button v-if="notifications.length > 0" @click="clearAllNotifications">
        Clear All
      </button>
    </div>
  </div>
</template>

<script src="@/assets/notificationscript.js"></script>
<style scoped src="@/assets/notificationstyle.css"></style>
