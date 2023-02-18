
<script>
export default {
    data(){
        return{
            title : "This is My Title for Life",
            person:{
                id: 1,
                name: 'Paquito',
                img : "https://www.buscabiografias.com/img/people/Bill_Murray.jpg"
            },
            msg:"Paquito estaba escondido cazando fantasmas",
        }
    },
}
</script>

<template>
    <h3>{{ title }}</h3>
    <div :id="person.id">
        <h4>{{ person.name }}</h4>
        <img :src="person.img" :alt="person.name">
    </div>
    <!-- <h5>{{ msg }}</h5> -->
    <h5 v-html="msg"></h5>
</template>

<style lang="css" scoped>
h3{
    color: magenta;
}
h5{
    color: blue;
}

</style>