<template>
  <div 
    class="todo-item"
    :class="{ completed: todo.completed, loading: isLoading }"
  >
    <div class="todo-content">
      <!-- Checkbox -->
      <div 
        class="todo-checkbox"
        :class="{ completed: todo.completed }"
        @click="$emit('toggle-complete')"
      >
        <i v-if="todo.completed" class="fas fa-check"></i>
      </div>

      <!-- Text / Edit Input -->
      <input 
        v-if="isEditing"
        :value="editText"
        @input="$emit('update-edit-text', $event.target.value)"
        @keyup.enter="$emit('save-edit')"
        @keyup.escape="$emit('cancel-edit')"
        class="todo-edit-input"
        ref="editInput"
      >
      <span 
        v-else
        class="todo-text"
        :class="{ completed: todo.completed }"
      >
        {{ todo.text }}
      </span>

      <!-- Actions -->
      <div class="todo-actions">
        <template v-if="isEditing">
          <button 
            @click="$emit('save-edit')"
            class="btn btn-success"
          >
            <i class="fas fa-save"></i>
          </button>
          <button 
            @click="$emit('cancel-edit')"
            class="btn btn-secondary"
          >
            <i class="fas fa-times"></i>
          </button>
        </template>
        <template v-else>
          <button 
            @click="$emit('start-edit')"
            class="btn btn-secondary"
          >
            <i class="fas fa-edit"></i>
          </button>
          <button 
            @click="$emit('delete-todo')"
            class="btn btn-danger"
          >
            <i class="fas fa-trash"></i>
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      required: true
    },
    isEditing: {
      type: Boolean,
      default: false
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
.todo-item {
  background: rgba(255,255,255,0.9);
  margin-bottom: 1rem;
  padding: 1.5rem;
  border-radius: 15px;
  border: 1px solid rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  animation: slideIn 0.3s ease;
}

.todo-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(0,0,0,0.1);
}

.todo-item.completed {
  opacity: 0.7;
  background: rgba(240,240,240,0.9);
}

.todo-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.todo-checkbox {
  width: 24px;
  height: 24px;
  border: 2px solid #4CAF50;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  background: white;
}

.todo-checkbox.completed {
  background: #4CAF50;
  color: white;
}

.todo-text {
  flex: 1;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  color: #333;
}

.todo-text.completed {
  text-decoration: line-through;
  color: #666;
}

.todo-edit-input {
  flex: 1;
  padding: 0.5rem 1rem;
  border: 2px solid #4CAF50;
  border-radius: 8px;
  font-size: 1.1rem;
  background: rgba(255,255,255,0.95);
}

.todo-actions {
  display: flex;
  gap: 0.5rem;
}

@media (max-width: 768px) {
  .todo-content {
    flex-wrap: wrap;
  }
}
</style>