<template>
    <div class="view-component view-image" :class="{'fullscreen': fullscreen}">
        <img :src :alt class="image">
    </div>
</template>

<script lang="ts" setup>
    defineProps({
        src: {
            type: String,
            default: '',
        },
        alt: {
            type: String,
            default: '',
        },
        fullscreen: {
            type: Boolean,
            default: false,
        },
    })
</script>

<style lang="sass" scoped>
    .view-component.view-image
        position: relative
        display: flex
        align-items: center
        justify-content: center
        height: 500px
        overflow: hidden

        &.fullscreen
            height: 100vh

        .image
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: 0
            height: 100%
            width: 100%
            object-position: center center
            object-fit: contain
            background: black
</style>