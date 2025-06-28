<template>
  <div class="empty-state">
    <div class="empty-state-icon">
      <i class="fas fa-clipboard-list"></i>
    </div>
    <h3>Belum ada todo</h3>
    <p>Tambah todo pertama mu di atas!</p>
  </div>
</template>

<script>
export default {
  name: 'EmptyState'
}
</script>

<style scoped>
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  color: #666;
}

.empty-state-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}
</style>