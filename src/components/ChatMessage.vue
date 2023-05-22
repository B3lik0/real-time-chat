<template>
    <div id="chat-container">
        <div id="chat-window">
            <div id="output">
                <CardChat :content="message" v-for="(message, index) in messages" :key="index" />
            </div>
            <div id="actions">{{ actions }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { socket } from '../services/SocketServices'
import CardChat from '../components/CardChat.vue'
const messages = ref([])
const actions = ref('')
socket.on('chat:message', (data: any) => {
    messages.value.push(data)
});

socket.on('chat:typing', (data: any) => {
    actions.value = `${data} esta escribiendo`;
});
</script>

<style scope></style>