<script lang="ts" setup>
import { ref } from 'vue'

const checked = ref(false)

</script>

<template>
    <div class="container">
        <h1>กรุณาเลือกข้่อมูลล่าสุดของท่าน</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>
                        <label>
                            <input type="checkbox" class="checkbox" />
                        </label>
                    </th>
                    <th>
                        ชื่อ-นามสกุล
                    </th>
                    <th>
                        คอร์สทื่เรียน
                    </th>
                    <th>
                        ราคา
                    </th>
                    <th>
                        วันที่สมัคร
                    </th>
                </tr>

            </thead>

            <tbody>
                <tr>
                    <td>
                        <label>
                            <input type="checkbox" class="checkbox" />
                        </label>
                    </td>
                </tr>

                <tr>
                    <td>
                        <span>นาย สมชาย ใจดี</span>
                    </td>
                </tr>

                <tr>
                    <td>
                        <span>คอร์ส ภาษาอังกฤษ</span>
                    </td>
                </tr>

                <tr>
                    <td>
                        <span>2,000 บาท</span>
                    </td>
                </tr>

                <tr>
                    <td>
                        <span>2021-09-01</span>
                    </td>
                </tr>

            </tbody>
        </table>

    </div>
</template>