<template>
    <aside class="right-aside">
        <section class="content-header">
            <h1>
                {{ this.$route.meta.title  }}
            </h1>
            <b-breadcrumb :items="this.$route.meta.breadcrumb"/>
        </section>
        <!-- Main content -->
        <section class="content">
            <slot></slot>
            <rightSideBar2></rightSideBar2>

        </section>
    </aside>
</template>
<script>

    import rightSideBar2 from '../pages/example'
    
    export default {
        name: "right-side",
        components:{
            rightSideBar,
            rightSideBar2
        }
    }
</script>
