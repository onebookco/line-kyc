<script setup lang="ts">
import { ref } from 'vue'
import OtpForm from '../components/otp-form.vue';

const mobilePhone = ref<string>()
const isRequestedOTP = ref<boolean>(false)

const handleSubmit = (form: Event) => {
    form.preventDefault()
    isRequestedOTP.value = true
}

</script>

<template>
    <div class="container mx-auto">
        <form class="flex flex-col space-y-4" @submit="handleSubmit">
            <label for="mobilePhone">หมายเลขโทรศัพท์มือถือที่ใช้ลงทะเบียน ล่าสุด</label>
            <input type="text" id="mobilePhone" name="mobilePhone" class="input input-md input-bordered"
                v-model="mobilePhone" />
            <button :disabled="isRequestedOTP" class="btn btn-primary">ยืนยัน</button>
        </form>
        <otp-form v-if="isRequestedOTP" />
    </div>
</template>
