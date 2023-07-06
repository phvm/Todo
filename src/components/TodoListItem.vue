<template>
  <div class="listItem">
    <button class="checkbox" @click="$emit('mark')" :class="{ done: isDone }">
      <img src="../assets/icons/doneIcon.svg" alt="Icone de item concluido" v-if="isDone" />
    </button>
    <p class="itemTitle" :style="isDone ? titleStyleDone : ''">
      {{ title }}
    </p>
    <img
      @click="$emit('deleteItem')"
      class="deleteIcon"
      src="../assets/icons/deleteIcon.svg"
      alt="Icone de deletar item"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

defineProps<{
  isDone: boolean;
  title: string;
}>();

const titleStyleDone = reactive({
  textDecoration: 'line-through',
  color: 'rgba(255,255,255,0.5)'
});
</script>

<style scoped>
.listItem {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  transition: all 0.2s ease;
  &:hover {
    padding: 10px 0;
    background-color: rgba(255, 255, 255, 0.18);
    width: 105%;
  }
}

.itemTitle {
  width: 100%;
}

.deleteIcon {
  margin-right: 8px;
  cursor: pointer;
}

.checkbox {
  border-radius: 100%;
  min-width: 24px;
  height: 24px;
  border: 2px solid transparent;
  background-color: rgba(255, 255, 255, 0.12);
  padding: 0;
  margin: 0 10px;
}
.checkbox:hover {
  border: 2px solid #00ffff;
  background-color: rgba(255, 255, 255, 0.2);
}

.done {
  background-color: rgba(255, 255, 255, 0.25);
}
</style>
