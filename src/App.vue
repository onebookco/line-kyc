<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { liff } from '@line/liff'

const viewName = ref('default')


onMounted(() => {
  liff.init({ liffId: "1653826193-MP282qGE" })
  liff.ready.then(() => {
    if (!liff.isLoggedIn()) {
      liff.login()
    }
  })
})
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
