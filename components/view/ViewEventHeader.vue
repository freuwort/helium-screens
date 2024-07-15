<template>
    <div class="view-event-header" :class="{'fullscreen': fullscreen}">
        <div class="background"></div>
        <div class="inner">
            <img :src="logo" alt="Event Logo" class="event-logo">
            <HeFlex x-align="center" gap=".5rem">
                <h2>{{ title }}</h2>
                <p>{{ subtitle }}</p>
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
    .view-event-header
        position: relative
        display: flex
        align-items: center
        justify-content: center
        height: 450px
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
            background-image: url('/images/header_bg_1.jpg')
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
            gap: 3rem

            h2
                margin: 0
                font-size: 3rem
                font-weight: 600

            p
                margin: 0
                font-size: 1.5rem
                font-weight: 400
        
            .event-logo
                height: 100px
                object-fit: contain
                object-position: center
                filter: drop-shadow(0 0 20px rgba(0, 0, 0, 0.5))
</style>