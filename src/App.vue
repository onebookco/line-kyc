<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const viewName = ref('default')
const route = useRoute()
</script>

<template>
  <RouterView :name="viewName" v-slot="{ Component, route }">
    <Transition name="fade" mode="out-in">
      <!-- <KeepAlive> -->
      <Suspense>
        <template #default>
          <component :is="Component" :key="route.name === 'repeat' ? route.path : route.meta.key" />
        </template>
        <template #fallback> Loading... </template>
      </Suspense>
      <!-- </KeepAlive> -->
    </Transition>
  </RouterView>
</template>
