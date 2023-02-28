<script>
export default {
    data() {
        return {
            header: 'Vue ready',
            flavors: [],
        }
    },

}
</script>

<template>
    <div>
        <h3>{{ header }}</h3>
        <input type="text" v-model="header" />
        <label>
            <input 
                v-model="flavors"
                type="checkbox"
                id="coco"
                value="coco"
                name="coco"
            />
            Coco
        </label>
        <label>
            <input 
                v-model="flavors"
                type="checkbox"
                id="chocolate"
                value="chocolate"
                name="chocolate"
            />
            Chocolate
        </label>
        <label>
            <input 
                v-model="flavors"
                type="checkbox"
                id="oreo"
                value="oreo"
                name="oreo"
            />
            Oreo
        </label>
    </div>
</template>

<style></style>