<template>
  <div class="card add-todo-form" :class="{ loading: isLoading }">
    <div class="input-group">
      <input 
        type="text" 
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        @keyup.enter="$emit('add-todo')"
        placeholder="Tambah todo baru..."
        class="todo-input"
        :disabled="isLoading"
      >
      <button 
        @click="$emit('add-todo')" 
        class="btn btn-primary"
        :disabled="isLoading || !modelValue.trim()"
      >
        <i class="fas fa-plus"></i>
        Tambah
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddTodoForm',
  props: {
    modelValue: {
      type: String,
      required: true
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'add-todo']
}
</script>

<style scoped>
.add-todo-form {
  padding: 2rem;
  margin-bottom: 1.5rem;
}

.input-group {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.todo-input {
  flex: 1;
  padding: 1rem 1.5rem;
  border: 2px solid #e1e5e9;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: rgba(255,255,255,0.9);
}

.todo-input:focus {
  outline: none;
  border-color: #4CAF50;
  box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .input-group {
    flex-direction: column;
  }
}
</style>