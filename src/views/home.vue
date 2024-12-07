<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const mobilePhone = ref<string>()
const router = useRouter()

const handleSubmit = (form: Event) => {
    form.preventDefault()
    router.push({ name: 'userInfo' })
}

</script>

<template>
    <div class="container mx-auto">
        <form class="flex flex-col space-y-4" @submit="handleSubmit">
            <label for="mobilePhone">หมายเลขโทรศัพท์มือถือที่ใช้ลงทะเบียน ล่าสุด</label>
            <input type="text" id="mobilePhone" name="mobilePhone" class="input input-md input-bordered"
                v-model="mobilePhone" />
            <button class="btn btn-primary">ยืนยัน</button>
        </form>
    </div>
</template>
