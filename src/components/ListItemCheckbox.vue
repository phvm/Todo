<template>
  <button class="checkbox" :class="{ done: isDone }" @click="$emit('onClick')">
    <img src="../assets/icons/doneIcon.svg" alt="Icone de item concluido" v-if="isDone" />
  </button>
</template>

<script setup lang="ts">
defineProps({
  isDone: Boolean
});
</script>

<style scoped>
.checkbox {
  border-radius: 100%;
  min-width: 24px;
  height: 24px;
  border: 2px solid transparent;
  background-color: rgba(255, 255, 255, 0.12);
  padding: 0;
}
.checkbox:hover {
  border: 2px solid #00ffff;
  background-color: rgba(255, 255, 255, 0.2);
}

.done {
  background-color: rgba(255, 255, 255, 0.25);
}
</style>
