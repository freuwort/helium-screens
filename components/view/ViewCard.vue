<template>
    <component :is="is" class="view-card" :class="classes">
        <div class="background">
            <slot name="background"></slot>
        </div>
        <slot></slot>
    </component>
</template>

<script lang="ts" setup>
    const props = defineProps({
        is: {
            type: String,
            default: 'div',
        },
        shadow: {
            type: String,
            default: 'none',
        },
    })

    const classes = computed((): object => {
        return [
            `section-shadow-${props.shadow}`,
        ]
    })
</script>

<style lang="sass" scoped>
    .view-card
        position: relative
        display: flex
        flex-direction: column
        border-radius: var(--radius-xxl)
        background: var(--color-background)
        border: 1px solid var(--color-border)

        .background
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: 0
            border-radius: inherit

        &.section-shadow-none
            box-shadow: none

        &.section-shadow-s
            box-shadow: var(--shadow-s)

        &.section-shadow-m
            box-shadow: var(--shadow-m)

        &.section-shadow-l
            box-shadow: var(--shadow-l)
</style>