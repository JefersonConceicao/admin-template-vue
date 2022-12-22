<template>
<div>
    <clear_header />

    <div class="wrapper">
        <left_side v-show="this.$store.state.left_open"></left_side>
        <right_side>
            <router-view></router-view>
        </right_side>
    </div>
    <div class="background-overlay" @click="right_close"></div>
</div>
</template>

<script>
import clear_header from "./header/clear_header.vue";
import left_side from "./sidebar/Sidebar.vue";
import right_side from "./right-sidebar/right-side.vue";

export default {
    name: 'layout',
    components: {
        clear_header,
        left_side,
        right_side
    },
    created: function() {},
    methods: {
        right_close() {
            this.$store.commit('rightside_bar', "close");
        }
    },
}
</script>

<style src="../../css/custom_css/metisMenu.css"></style>
<style lang="scss" src="../../sass/dark/custom.scss"></style>
<style>
    @media(max-width: 320px){
        .message_dropdown .dropdown-menu.show{
            left:15px !important;
        }
    }
</style>
