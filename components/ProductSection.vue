<template>
    <HeFlex horizontal gap="3rem" padding="0 3rem 2rem">
        <ViewProductCard
            v-for="item in items"
            :image="item.image"
            :name="item.name"
            :price="item.price"
            style="flex: 1;"
        />
    </HeFlex>
</template>

<script lang="ts" setup>
    defineProps({
        items: {
            type: Array,
            default: () => [],
        },
    })
</script>

<style lang="sass" scoped>
</style>