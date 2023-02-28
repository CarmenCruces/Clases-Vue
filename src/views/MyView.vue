
<script>
import DirectiveVFor from '../components/myComponents/directives/DirectiveVFor.vue';
import DirectiveVModel from '../components/myComponents/directives/DirectiveVModel.vue';
import DirectiveVIf from '../components/myComponents/directives/DirectiveVIf.vue';
import DirectiveVShow from '../components/myComponents/directives/DirectiveVShow.vue';
import RawHtmlData from '../components/myComponents/RawHtmlData.vue';
import SingleComponent from '../components/myComponents/SingleComponent.vue';
export default {
    components: { SingleComponent, RawHtmlData, DirectiveVShow, DirectiveVIf },};
</script>

<template>
    <div>
        <h1>My Single Page from FemCoderMA</h1>
        ------------------------
        <RawHtmlData />
        ------------------------
        <SingleComponent />
        ------------------------
        <DirectiveVShow />
        ------------------------
        <DirectiveVIf />
        ------------------------
        <DirectiveVModel />
        ------------------------
        <DirectiveVFor />

    </div>
</template>

<style lang="css" scoped>
h1{
    color: rgb(121, 33, 33);
}
</style>
