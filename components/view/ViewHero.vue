<template>
    <div class="view-component view-hero" :class="{'fullscreen': fullscreen}">
        <div class="background" :style="{backgroundImage: `url(${background})`}"></div>
        <div class="inner">
            <img :src="logo" alt="Logo" class="logo">
            <HeFlex x-align="center" gap=".5rem">
                <h2 v-html="title"></h2>
                <p v-html="subtitle"></p>
            </HeFlex>
        </div>
    </div>
</template>

<script lang="ts" setup>
    defineProps({
        logo: {
            type: String,
            default: '',
        },
        background: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
        subtitle: {
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
    .view-component.view-hero
        position: relative
        display: flex
        align-items: center
        justify-content: center
        height: 500px
        overflow: hidden

        &.fullscreen
            height: 100vh

            .background
                mask: none

        .background
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: 0
            background-position: center
            background-size: cover
            mask: linear-gradient(180deg, #ffffffff 40%, #ffffff00 100%)

            &::before
                content: ''
                position: absolute
                top: 0
                left: 0
                right: 0
                bottom: 0
                background: rgb(25, 23, 28, 0.4)

        .inner
            position: relative
            z-index: 1
            display: flex
            flex-direction: column
            align-items: center
            text-align: center
            gap: 2rem
            padding-inline: 3rem

            h2
                margin: 0
                font-size: 3rem
                font-weight: 600

            p
                margin: 0
                font-size: 2rem
                font-weight: 400
        
            .logo
                max-height: 14rem
                max-width: 28rem
                object-fit: contain
                object-position: center
</style>