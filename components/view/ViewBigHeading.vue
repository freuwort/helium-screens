<template>
    <component :is="is" class="view-big-heading">
        <slot>{{ title }}</slot>
    </component>
</template>

<script lang="ts" setup>
    const props = defineProps({
        is: {
            type: String,
            default: 'h2',
        },
        title: {
            type: String,
            default: '',
        },
    })
</script>

<style lang="sass" scoped>
    .view-big-heading
        text-align: center
        font-weight: 700
        font-size: 6rem
        margin: 0
        margin-bottom: 1rem
        color: white
        opacity: .2
        background: linear-gradient(180deg, rgb(255, 255, 255, 1), rgb(255, 255, 255, .3))
        -webkit-background-clip: text
        -webkit-text-fill-color: transparent
</style>