<template>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{ props.content.username }}</h5>
            <p class="card-text">{{ props.content.message }}</p>
        </div>
    </div>
</template>


<script lang="ts" setup>
const props = defineProps(['content'])
</script>

<style scope></style>