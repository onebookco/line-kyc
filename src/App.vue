<script setup lang="ts">

</script>

<template>
  <div class="container m-auto">
    <h1 class="tex">กรุณายืนยันตัวตน</h1>
    <img class="logo" src="./assets/logo.png" alt="Vue logo" />
    <form>
      <label for="username"></label>
      <input type="text" id="username" name="username" class="input input-lg input-bordered" />
    </form>
  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
