<template>
  <div class="todo-list">
    <transition-group name="fade">
      <TodoItem
        v-for="todo in todos" 
        :key="todo.id"
        :todo="todo"
        :is-editing="editingTodo === todo.id"
        :edit-text="editText"
        :is-loading="isLoading"
        @toggle-complete="$emit('toggle-complete', todo.id)"
        @start-edit="$emit('start-edit', todo)"
        @save-edit="$emit('save-edit', todo.id)"
        @cancel-edit="$emit('cancel-edit')"
        @delete-todo="$emit('delete-todo', todo.id)"
        @update-edit-text="$emit('update-edit-text', $event)"
      />
    </transition-group>

    <EmptyState v-if="todos.length === 0" />
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
import EmptyState from './EmptyState.vue'

export default {
  name: 'TodoList',
  components: {
    TodoItem,
    EmptyState
  },
  props: {
    todos: {
      type: Array,
      required: true
    },
    editingTodo: {
      type: Number,
      default: null
    },
    editText: {
      type: String,
      default: ''
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  emits: ['toggle-complete', 'start-edit', 'save-edit', 'cancel-edit', 'delete-todo', 'update-edit-text']
}
</script>

<style scoped>
.todo-list {
  padding: 0 1rem 1rem;
}
</style>