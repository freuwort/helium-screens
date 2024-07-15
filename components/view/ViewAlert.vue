<template>
    <div class="view-component view-alert">
        <ViewCard shadow="l">
            <div class="icon-wrapper" :style="{ color }">
                <IodIcon :icon="icon" class="product-image" />
            </div>
    
            <p class="title" v-html="title"></p>
        </ViewCard>
    </div>
</template>

<script lang="ts" setup>
    defineProps({
        icon: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
        color: {
            type: String,
            default: 'var(--color-primary)',
        },
    })
</script>

<style lang="sass" scoped>
    .view-component.view-alert
        display: flex
        padding-inline: 3rem
        margin-bottom: 2rem

        .view-card
            flex: 1
            position: relative
            display: flex
            flex-direction: row
            align-items: center
            overflow: hidden

            .icon-wrapper
                min-height: 8rem
                border-right: 1px solid var(--color-border)
                aspect-ratio: 1
                display: flex
                align-items: center
                justify-content: center
                position: relative

                &::after
                    content: ''
                    position: absolute
                    top: 0
                    left: 0
                    right: 0
                    bottom: 0
                    background: currentColor
                    border-radius: inherit
                    opacity: 0.1
                    z-index: 1

                .iod-icon
                    color: currentColor
                    font-size: 4rem
                    z-index: 2

            .title
                margin: 0
                padding: 1.5rem
                font-size: 2rem
                font-weight: 400
                font-family: var(--font-text)
                color: var(--color-text)
</style>