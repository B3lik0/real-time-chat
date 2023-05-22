<template>
  <div>
    <input id="username" type="text" placeholder="username" v-model="username">
    <input id="message" type="text" placeholder="message" v-model="message" @keyup="Typing">
    <button id="send" @click="sendMessage">Send</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const username = ref('')
const message = ref('')
import { socket } from '../services/SocketServices'
const sendMessage = async () => {
  socket.emit('chat:message', {
    message: message.value,
    username: username.value
  });
  message.value = ''
}
const Typing = async () => {
  // setTimeout(() => { socket.emit('chat:typing', username.value) }, 3000)
  socket.emit('chat:typing', username.value)
}
</script>

<style scope></style>