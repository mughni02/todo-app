<template>
  <div class="info-footer">
    <p>
      <i class="fas fa-lightbulb"></i>
      Fitur: Tambah, Edit, Hapus, Mark Complete
    </p>
    <p>
      <i class="fas fa-rocket"></i>
      Vue 3 Composition API + Axios integration
    </p>
    <p>
      <i class="fas fa-code"></i>
      Ready untuk production dengan Vite + JSON Server
    </p>
  </div>
</template>

<script>
export default {
  name: 'InfoFooter'
}
</script>

<style scoped>
.info-footer {
  text-align: center;
  margin-top: 2rem;
  color: rgba(255,255,255,0.8);
  font-size: 0.9rem;
}

.info-footer p {
  margin-bottom: 0.5rem;
}
</style>