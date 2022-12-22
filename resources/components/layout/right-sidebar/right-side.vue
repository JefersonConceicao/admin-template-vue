<template>
<aside class="right-aside">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1> 
            {{ this.$route.meta.title }}
        </h1>
        <b-breadcrumb :items="this.$route.meta.breadcrumb"/>
    </section>

    <!-- Main content -->
    <section class="content">
        <slot></slot>
        <right-side-bar></right-side-bar>
    </section> 
</aside>
</template>

<script>
    import rightSideBar from './right-side-bar'
    
export default {
    name: "right-side",
    components:{
        rightSideBar,
    }
}
</script>
