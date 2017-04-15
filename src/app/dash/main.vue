<script>
    import VbNav from '../shared-components/vb-nav.vue'
    import VbSidebar from '../shared-components/vb-sidebar.vue'
    import VbContent from '../shared-components/vb-content.vue'

    export default {
      name: 'VbDash',
      components: {
        VbNav,
        VbSidebar,
        VbContent
      }
    }

</script>

<template>
    <div>
        <div class="columns is-gapless">
            <div class="column is-2">
                <vb-sidebar></vb-sidebar>
            </div>
            <div class="column is-10">
                <vb-nav></vb-nav>
                <vb-content></vb-content>
            </div>
        </div>
    </div>
</template>
