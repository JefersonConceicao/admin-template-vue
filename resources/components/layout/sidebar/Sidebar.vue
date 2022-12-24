<template>
    <aside class="left-aside sidebar-offcanvas">
        <section class="sidebar">
            <div id="menu" role="navigation">
                <vmenu>
                    <vmenu-item link="/" icon="ti-desktop">
                        &nbsp; Dashboard 1
                    </vmenu-item>
                    <vmenu-item link="/index2" icon="ti-layout">
                        &nbsp; Dashboard 2
                    </vmenu-item>
                </vmenu>
            </div>
        </section>
    </aside>
</template>

<script>

import vmenu from "./menu/ContainerMenu.vue";
import vsubMenu from "./menu/SubMenuLink.vue";
import vmenuItem from "./menu/MenuLink.vue";

export default {
    name: "left-side",
    components: {
        vmenu,
        vsubMenu,
        vmenuItem,
    },
    data() {
        return {}
    }
}
</script>
