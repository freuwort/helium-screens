<template>
    <div class="view-background">
        <div class="inside">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="sass" scoped>
    .view-background
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: 0
        background-image: radial-gradient(circle at bottom, #35303B, #19171C)
        background-position: center
        background-size: cover
        overflow: hidden
        border-radius: 2rem

        &::before
            content: ''
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: 0
            background-image: url('/images/bg_1.jpg')
            background-position: center
            background-size: cover
            mix-blend-mode: multiply

        .inside
            position: relative
            z-index: 1
            display: flex
            flex-direction: column
            flex: 1
</style>