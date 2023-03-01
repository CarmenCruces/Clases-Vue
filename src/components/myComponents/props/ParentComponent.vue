<script>
import ChildComponent from './ChildComponent'
export default {
    components: { ChildComponent },
    data() {
        return {
            movieTitle: 'Superman',
            brandParent: "",
            count : 0,
        }
    },
    methods: {
        receivedBrand(data) {
            this.$brand = data;
            this.count++;
        }
    },
};
</script>

<template>
    <h2>I'm your Father</h2>
    <span>{{ movieTitle }}</span>

    <ChildComponent :movieTitle="movieTitle" @brand="receivedBrand" /> //@changeBrand
    <span>BRAND : {{ brand }} / {{ count }}</span>
</template>

<style></style>