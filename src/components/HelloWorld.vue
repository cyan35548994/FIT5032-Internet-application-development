<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>

      <!-- two router-link button -->
    <div class="nav-buttons">
      <router-link to="/json" class="btn"> Go to JSON</router-link>
      <router-link to="/myname" class="btn">Go to My name</router-link>
    </div>
  </div>

</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

.nav-buttons {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 20px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #42b883;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  transition: background 0.3s;
}

.btn:hover {
  background-color: #35996d;
}

.btn.secondary {
  background-color: #35495e;
}

.btn.secondary:hover {
  background-color: #2c3e50;
}

</style>
