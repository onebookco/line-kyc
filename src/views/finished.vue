<template>
    <div v-show="isSucceed">
        <div>
            <img src="https://via.placeholder.com/150" alt="LINE The Banana" />
        </div>
        <h1>เชื่อมต่อกับ LINE The Banana สำเร็จ</h1>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isSucceed = ref(false)
</script>