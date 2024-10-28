<template>
  <div id="todoList">
    <h1 id="title">T O D O</h1>
    <div id="wrapper">
      <div id="insertMenu">
        <button id="addItem" type="button" @click="pushListItem">
          <img alt="Icon para adicionar item na lista" src="../assets/icons/addIcon.svg" />
        </button>
        <input
          id="itemDescription"
          v-model="input"
          placeholder="O que você precisa fazer?"
          type="text"
          @keydown.enter="pushListItem"
        />
      </div>

      <div id="itemsList">
        <TransitionGroup name="list">
          <TodoListItem
            v-for="(item, index) in filteredItems"
            :key="index"
            :is-done="item.isDone"
            :title="item.title"
            @mark="markCheckbox(index)"
            @delete-item="deleteListItem(index)"
          />
        </TransitionGroup>
      </div>

      <footer id="moreOptions">
        <div id="itemsRemaining">
          <p v-if="filteredItems.length !== 0" id="itemAmount">
            {{ filteredItems.length }}
            {{ filteredItems.length === 1 ? 'item restante' : 'items restantes' }}
          </p>
          <p v-else>Nenhum item registrado</p>
        </div>
        <div id="filterListOptions">
          <button @click="filter = 'all'">Todas</button>
          <button @click="filter = 'active'">Ativas</button>
          <button @click="filter = 'done'">Concluídas</button>
        </div>
        <div id="clearList">
          <button type="button" @click="clearCompletedTasks">Limpar Concluídas</button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TodoListItem from './TodoListItem.vue';
import type { TodoListItemType } from '@/utils/interfaces';
import { computed, ref } from 'vue';

const savedItems = ref<TodoListItemType[]>([]);
const filter = ref<string>('all');

const filteredItems = computed(() => {
  if (filter.value === 'done') {
    return savedItems.value.filter((item) => item.isDone);
  }
  if (filter.value === 'active') {
    return savedItems.value.filter((item) => !item.isDone);
  }
  return savedItems.value;
});
const input = ref<string>('');

function pushListItem(): void {
  if (input.value !== '') {
    savedItems.value.push({ isDone: false, title: input.value });
    input.value = '';
  }
  alert('Você precisa inserir um valor!');
}

function deleteListItem(index: number): void {
  savedItems.value.splice(index, 1);
}

function markCheckbox(index: number) {
  return (savedItems.value[index].isDone = !savedItems.value[index].isDone);
}

function clearCompletedTasks() {
  savedItems.value = savedItems.value.filter((listItem) => {
    return !listItem.isDone;
  });
}
</script>

<style scoped>
#todoList {
  max-width: max(28dvw, 600px);
  min-width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 50px;

  &,
  #title {
    margin: 0 auto;
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 0.25s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(15px);
}

#itemAmount {
  font-size: 0.8rem;
}

#wrapper {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#itemsList {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f2f0f2;
}

#title {
  color: #ffffff;
}

#moreOptions {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;
  border-radius: 0 0 4px 4px;
  min-height: 30px;
  background-color: rgba(255, 255, 255, 0.1);

  & p {
    text-align: center;
    color: rgba(255, 255, 255, 0.5);

    &:hover {
      color: #ffffff;
    }
  }

  & button {
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.5);

    &:hover {
      color: #ffffff;
    }
  }
}

#itemsRemaining {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  font-size: 0.65rem;
}

#filterListOptions {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 0.75rem;
  width: 40%;

  & button:hover {
    cursor: pointer;
  }
}

#clearList {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);

  & button:hover {
    color: #ffffff;
    cursor: pointer;
  }
}

#insertMenu {
  & {
    background-color: rgba(255, 255, 255, 0.1);
  }

  height: 50px;
  width: 100%;
  border-radius: 4px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

#addItem {
  border-radius: 100%;
  border: 2px solid transparent;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 0 10px;
  color: #00ffff;
  min-width: 24px;
  min-height: 24px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border: 2px solid #00ffff;
  }
}

#itemDescription {
  font-size: 1rem;
  height: 80%;
  width: 80%;
  background-color: rgba(255, 255, 255, 0.1);
  caret-color: #f2f0f2;
  color: #f2f0f2;
  border-radius: inherit;
  border: 0;
  padding: 0 0 0 10px;

  &:focus {
    outline: 0;
  }
}
</style>
