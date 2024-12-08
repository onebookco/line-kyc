<template>
    <div>
        <div>กรอกรหัส OTP</div>
        <form class="flex flex-col space-y-4" @submit="handleSubmit">
            <span class="block">รหัส OTP</span>
            <span class="block">Ref: </span>
            <div class="flex flex-row justify-between">
                <!-- generate input fields for OTP using one input -->
                <input type="text" class="otp" pattern="^[0-9]*$" maxlength="6" v-model="otp" />
            </div>
            <button class="btn btn-primary">ยืนยัน</button>
            <div role="button" class="btn btn-primary btn-outline" v-on:click="handleRequestNewOTP">ขอรหัสใหม่</div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const otp = ref<string>()
const router = useRouter()

const handleSubmit = (form: Event) => {
    form.preventDefault()
    router.push({ name: 'user-info', state: { otp: otp.value } })
}

const handleRequestNewOTP = () => {
    // call api
    console.log('Request new OTP')
}

</script>

<style scoped>
input.otp {
    @apply input input-lg input-bordered flex justify-center;
    opacity: 1;
    letter-spacing: 1em;
    width: 50%;
}
</style>