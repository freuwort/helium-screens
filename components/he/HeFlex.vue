<template>
    <component :is="is" class="he-container he-flex" :class="classes" :style="{width, height, gap, padding, alignItems: vAlign, justifyContent: hAlign}">
        <slot />
    </component>
</template>

<script lang="ts" setup>
    const props = defineProps({
        is: {
            type: [String, Object, Function, Symbol, Array, Promise, Boolean, Number],
            default: 'div',
        },
        vertical: {
            type: Boolean,
            default: false,
        },
        horizontal: {
            type: Boolean,
            default: false,
        },
        wrap: {
            type: Boolean,
            default: false,
        },
        yAlign: {
            type: String,
            default: 'center',
        },
        xAlign: {
            type: String,
            default: 'unset',
        },
        padding: {
            type: [String, Number],
            default: 0,
        },
        gap: {
            type: [String, Number],
            default: 0,
        },
        height: {
            type: String,
            default: '',
        },
        width: {
            type: String,
            default: '',
        },
    })

    const classes = computed(() => {
        return [
            `flex-direction-${direction.value}`,
            {
                'flex-wrap': props.wrap,
            },
        ]
    })

    const direction = computed(() => {
        if (props.horizontal) return 'horizontal'
        if (props.vertical) return 'vertical'
        return 'vertical'
    })

    const vAlign = computed(() => {
        if (direction.value === 'vertical') return props.xAlign
        return props.yAlign
    })

    const hAlign = computed(() => {
        if (direction.value === 'vertical') return props.yAlign
        return props.xAlign
    })

    const padding = computed(() => {
        if (typeof props.padding === 'number') return `${props.padding}rem`
        return props.padding
    })

    const gap = computed(() => {
        if (typeof props.gap === 'number') return `${props.gap}rem`
        return props.gap
    })
</script>

<style lang="sass" scoped>
    .he-container.he-flex
        display: flex

        &.flex-wrap
            flex-wrap: wrap

        &.flex-direction-horizontal
            flex-direction: row

        &.flex-direction-vertical
            flex-direction: column
</style>