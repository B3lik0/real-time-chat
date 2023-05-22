<template>
    <h1>{{ msg }}</h1>
    <ChatPrincipal />
    <ChatMessage />
    <!-- user and message -->
</template>
  
  
<script setup lang="ts">
defineProps<{ msg: string }>()
import ChatPrincipal from '../components/ChatPrincipal.vue';
import ChatMessage from '../components/ChatMessage.vue';
</script>
  
  
<style scoped></style>
  