<template>
  <div>
    <AppHeader />
    <div class="container">
      <TitleSection />
      <AddTodoForm 
        v-model="newTodoText"
        :is-loading="isLoading"
        @add-todo="addTodo"
      />
      <div class="card">
        <TodoList 
          :todos="todos"
          :editing-todo="editingTodo"
          :edit-text="editText"
          :is-loading="isLoading"
          @toggle-complete="toggleComplete"
          @start-edit="startEdit"
          @save-edit="saveEdit"
          @cancel-edit="cancelEdit"
          @delete-todo="deleteTodo"
          @update-edit-text="editText = $event"
        />
        <TodoStats 
          v-if="todos.length > 0"
          :total="todos.length"
          :completed="completedCount"
          :remaining="remainingCount"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, nextTick } from 'vue'
import AppHeader from './components/AppHeader.vue'
import TitleSection from './components/TitleSection.vue'
import AddTodoForm from './components/AddTodoForm.vue'
import TodoList from './components/TodoList.vue'
import TodoStats from './components/TodoStats.vue'
import todoService from './services/todoService.js'

export default {
  name: 'App',
  components: {
    AppHeader,
    TitleSection,
    AddTodoForm,
    TodoList,
    TodoStats
  },
  setup() {
    // Reactive data
    const todos = ref([
      { id: 1, text: 'Belajar Vue Composition API', completed: false },
      { id: 2, text: 'Buat Todo List dengan Axios', completed: false }
    ]);

    const newTodoText = ref('');
    const editingTodo = ref(null);
    const editText = ref('');
    const isLoading = ref(false);

    // Computed properties
    const completedCount = computed(() => {
      return todos.value.filter(todo => todo.completed).length;
    });

    const remainingCount = computed(() => {
      return todos.value.filter(todo => !todo.completed).length;
    });

    // CRUD Operations
    const addTodo = async () => {
      if (!newTodoText.value.trim()) return;

      const todoData = {
        text: newTodoText.value.trim(),
        completed: false
      };

      try {
        isLoading.value = true;
        await todoService.create(todoData);
        
        const newId = Math.max(...todos.value.map(t => t.id), 0) + 1;
        todos.value.push({
          id: newId,
          ...todoData
        });

        newTodoText.value = '';
        
      } catch (error) {
        console.error('Error adding todo:', error);
      } finally {
        isLoading.value = false;
      }
    };

    const toggleComplete = async (id) => {
      const todo = todos.value.find(t => t.id === id);
      if (!todo) return;

      try {
        isLoading.value = true;
        await todoService.update(id, { completed: !todo.completed });
        todo.completed = !todo.completed;
        
      } catch (error) {
        console.error('Error updating todo:', error);
      } finally {
        isLoading.value = false;
      }
    };

    const startEdit = (todo) => {
      editingTodo.value = todo.id;
      editText.value = todo.text;
      
      nextTick(() => {
        const input = document.querySelector('.todo-edit-input');
        if (input) input.focus();
      });
    };

    const saveEdit = async (id) => {
      if (!editText.value.trim()) return;

      try {
        isLoading.value = true;
        await todoService.update(id, { text: editText.value.trim() });
        
        const todo = todos.value.find(t => t.id === id);
        if (todo) {
          todo.text = editText.value.trim();
        }

        editingTodo.value = null;
        editText.value = '';
        
      } catch (error) {
        console.error('Error updating todo:', error);
      } finally {
        isLoading.value = false;
      }
    };

    const cancelEdit = () => {
      editingTodo.value = null;
      editText.value = '';
    };

    const deleteTodo = async (id) => {
      if (!confirm('Yakin mau hapus todo ini?')) return;

      try {
        isLoading.value = true;
        await todoService.delete(id);
        todos.value = todos.value.filter(todo => todo.id !== id);
        
      } catch (error) {
        console.error('Error deleting todo:', error);
      } finally {
        isLoading.value = false;
      }
    };

    return {
      todos,
      newTodoText,
      editingTodo,
      editText,
      isLoading,
      completedCount,
      remainingCount,
      addTodo,
      toggleComplete,
      startEdit,
      saveEdit,
      cancelEdit,
      deleteTodo
    };
  }
}
</script>