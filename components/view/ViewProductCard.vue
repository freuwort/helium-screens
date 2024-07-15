<template>
    <ViewCard class="view-product-card" shadow="l">
        <template #background v-if="highlighted">
            <img :src="image" class="product-blur-image" />
        </template>

        <div class="wrapper">
            <img :src="image" class="product-image" />
            <div class="overlay">
                <h3>{{ name }}</h3>
                <p ref="test">{{ new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price) }}</p>
            </div>
        </div>
    </ViewCard>
</template>

<script lang="ts" setup>
    // import Vibrant from 'node-vibrant'

    const props = defineProps({
        image: {
            type: String,
            default: '',
        },
        name: {
            type: String,
            default: '',
        },
        price: {
            type: Number,
            default: 0,
        },
        highlighted: {
            type: Boolean,
            default: false
        },
    })

    // const test = ref(null)

    // onMounted(() => {
    //     Vibrant.from(props.image).getPalette((err: any, palette: any) => console.log(palette))
    // })
</script>

<style lang="sass" scoped>
    .view-product-card
        position: relative
        height: 400px

        .product-blur-image
            width: 100%
            height: 100%
            display: block
            object-fit: cover
            filter: blur(200px)
            opacity: .5

        .wrapper
            height: 100%
            position: relative
            overflow: hidden
            border-radius: inherit

            .product-image
                width: 100%
                height: 100%
                display: block
                object-fit: cover

            .overlay
                position: absolute
                top: 0
                bottom: 0
                left: 0
                right: 0
                display: flex
                flex-direction: column
                justify-content: flex-end
                padding: 1.5rem
                background-image: linear-gradient(180deg, rgb(25, 23, 28, 0) 60%, rgb(25, 23, 28, 0.6) 85%, rgb(25, 23, 28, 0.9) 100%)

                h3
                    margin: 0
                    font-size: 1.75rem
                    font-weight: 500
                    font-family: var(--font-heading)

                p
                    margin: 0
                    font-size: 1.25rem
                    font-weight: 400
                    font-family: var(--font-mono)
</style>