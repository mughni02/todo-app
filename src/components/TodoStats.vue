<template>
  <div class="stats">
    <span><i class="fas fa-list"></i> Total: {{ total }}</span>
    <span><i class="fas fa-check-circle"></i> Selesai: {{ completed }}</span>
    <span><i class="fas fa-clock"></i> Tersisa: {{ remaining }}</span>
  </div>
</template>

<script>
export default {
  name: 'TodoStats',
  props: {
    total: {
      type: Number,
      required: true
    },
    completed: {
      type: Number,
      required: true
    },
    remaining: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.stats {
  padding: 1.5rem 2rem;
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;
  color: #666;
  background: rgba(255,255,255,0.8);
}
</style>