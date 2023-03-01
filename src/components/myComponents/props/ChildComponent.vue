<script>
import { isIntegerKey } from '@vue/shared';
export default {
        props: {
            movieTitle: String,
    },
    data() {
        return {
                branchChild: 'DC Comics',
            }
    },
        methods: {
            sendBrand() {
                this.$emit('brand', this.brand) //changeBrand?
            }
        },
};
</script>

<template>
    <h2>Son {{ movieTitle }}ito</h2>
    <buttom @click="sendBrand">sendBrand</buttom>
</template>

<style>

</style>