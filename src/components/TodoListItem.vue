<template>
  <div class="listItem">
    <ListItemCheckbox :is-done="isDone" :on-click="markCheckbox" />
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
import ListItemCheckbox from './ListItemCheckbox.vue';

defineProps({
  isDone: Boolean,
  title: String,
  markCheckbox: Function
});

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
.checkbox {
  margin: 0 10px;
}

.deleteIcon {
  margin-right: 8px;
  cursor: pointer;
}
</style>
