
<script>
import ChildComponent from '../components/myComponents/props/ChildComponent.vue';
import ParentComponent from '../components/myComponents/props/ParentComponent.vue';
import ComputedProps from '../components/myComponents/computed-properties/ComputedProps.vue';
import DirectiveVFor from '../components/myComponents/directives/DirectiveVFor.vue';
import DirectiveVModel from '../components/myComponents/directives/DirectiveVModel.vue';
import DirectiveVIf from '../components/myComponents/directives/DirectiveVIf.vue';
import DirectiveVShow from '../components/myComponents/directives/DirectiveVShow.vue';
import RawHtmlData from '../components/myComponents/RawHtmlData.vue';
import SingleComponent from '../components/myComponents/SingleComponent.vue';
import ComputedProps from '../components/myComponents/computed-properties/ComputedProps.vue';
import ParentComponent from '../components/myComponents/props/ParentComponent.vue';
export default {
    components: { SingleComponent, RawHtmlData, DirectiveVShow, DirectiveVIf, DirectiveVModel, DirectiveVFor, ComputedProps, ParentComponent, ChildComponent },};
</script>

<template>
    <div>
        <h1>My Single Page from FemCoderMA</h1>
        <h3>Lorem ipsum.....</h3>
        
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
        ------------------------
        <ComputedProps />
        ------------------------
        <ParentComponent />
        ------------------------
        <ChildComponent />

    </div>
</template>

<style lang="css" scoped>
h1{
    color: rgb(121, 33, 33);
}
</style>
