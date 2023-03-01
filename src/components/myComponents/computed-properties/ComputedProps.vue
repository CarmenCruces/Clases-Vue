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
    <div class="my-4">
        <h1>Computed property</h1>
        <div>
            <p>{{ comicTitle }}</p>
            <p>{{ reversedComicTitle }}</p>
            <input type="text" v-model="comicTitle" />
        </div>
        <div class="my-4">
            <button class="me-3 btn btn-primary" @click="count++">+</button>
            <button class="btn btn-danger" @click="count--">-</button>
            <h3>{{ count }}</h3>
            <div class="progress">
                <div
                    :class="['progress-bar', barColor]"
                    role="progressbar"
                    :style="{width: count +'%'}"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    >
                    {{ count }}%
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
@import "bootstrap/dist/css/bootstrap.min.css";
</style>