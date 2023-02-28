<script>
export default {
    data() {
        return {
            comicTitle: 'Amazing Spiderman - Vol.1',
            count: 0,
        }
    },
    computed: {
        reversedComicTitle() {
            return this.comicTitle.split('').reverse().join('')
        },
        barColor() {
            return {
                'bg-sucess': this.count > 20,
                'bg-warning': this.count >= 20 && this.count <= 30,
                'bg-alert': this.count > 30,
            }
        }
    }

}
</script>

<template>
    
</template>

<style lang="scss">
@import "bootstrap/dist/css/bootstrap.min.css";

</style>