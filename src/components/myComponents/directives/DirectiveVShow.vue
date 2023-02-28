<script>
export default {
    data() {
        return {
            isShowing : true,
        }
    },
    methods: {
        changeState(){
            if (this.isShowing) {
                this.isShowing = false;
                return
            }
            this.isShowing = true;
        }
    }
}
</script>

<template>
    <div>
        <h3>----v-show directive ----</h3>
        <button v-on:click="changeState">
        <span v-show="isShowing">Once upon a time ...</span>
    </button>
    </div>
</template>

<style>


</style>