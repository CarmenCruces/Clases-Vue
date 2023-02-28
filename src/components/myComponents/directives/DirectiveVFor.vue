<script>
export default {
    data() {
        return {
            list:['spain', 'france', 'italy'],
        }
    },

}
</script>

<template>
    <div>
        <h3>v-for directive -----------------</h3>
        <ul>
            <template v-for="(country, key) in list" :key="key">
            <li :id="[key + 1]"> {{ key }}: {{ country }}</li>
        </template>
        </ul>
    </div>

</template>

<style></style>