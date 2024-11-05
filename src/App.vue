<script>
import NotificationView from './components/NotificationView.vue';
export default {
  components: {
    NotificationView,
  },
};
</script>

<template>
  <div id="app">
    <nav class="navbar">
      <h1>NotifyHub</h1>
      <NotificationView />
    </nav>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #42b983;
  color: white;
  padding: 10px 20px;
}
</style>