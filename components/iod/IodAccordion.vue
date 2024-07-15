<template>
    <div class="iod-container iod-accordion" :class="{open: isOpen}">
        <div class="accordion-header" @click="toggle">
            <span class="title">
                <slot name="title">{{ title }}</slot>
            </span>
            <IodIcon icon="expand_more"/>
        </div>
        <div v-show="isOpen" class="accordion-content">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    


    const props = defineProps({
        title: {
            type: String,
            default: '',
        },
    })

    const isOpen = ref(false)

    function toggle()
    {
        isOpen.value = !isOpen.value
    }
</script>

<style lang="sass" scoped>
    .iod-accordion
        display: flex
        flex-direction: column
        background: var(--color-background)
        overflow: hidden

        &.open
            .accordion-header
                .iod-icon
                    transform: rotate(180deg)

        .accordion-header
            display: flex
            align-items: center
            padding: .5rem 1rem
            cursor: pointer
            color: var(--color-text)
            background: var(--color-background)

            > .title
                flex: 1

            > .iod-icon
                transition: transform 100ms ease-in-out

        .accordion-content
            display: flex
            flex-direction: column
</style>