<template>
    <div class="view-component view-products">
        <ViewProduct
            v-for="item in (items as Product[])"
            :image="item.image"
            :name="item.name"
            :price="item.price"
            :highlight="item.highlight"
        />
    </div>
</template>

<script lang="ts" setup>
    type Product = {
        image: string
        name: string
        price: number
        highlight?: boolean
    }
    
    defineProps({
        items: {
            type: Array,
            default: () => [],
        },
    })
</script>

<style lang="sass" scoped>
    .view-component.view-products
        display: flex
        gap: 3rem
        flex-wrap: wrap
        align-items: center
        padding-inline: 3rem
        margin-block: 1rem
        height: 450px

        .view-product
            flex: 1
            height: 90%

        .view-product.highlight
            height: 100%
            flex: 1.1
            z-index: 10000
</style>