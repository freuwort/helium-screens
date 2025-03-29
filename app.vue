<template>
    <div class="wrapper">
        <TransitionGroup name="layout">
            <img class="view" v-for="(view, index) in views" :key="index" v-show="index === viewIndex" :src="view.image" alt="Poster" />
        </TransitionGroup>
    </div>
</template>

<script lang="ts" setup>
    import content from './content.js'

    const viewIndex = ref(-1)
    const views = computed(() => content
        .map((view: any) => ({
            on_days: view.on_days || [],
            image: '/images/content/' + view.image,
        }))
        .filter((view: any) => view.on_days.includes(new Date().getDay()))
    )

    function showNextView() {
        viewIndex.value ++
        
        if (viewIndex.value >= views.value.length) {
            return location.reload()
        }

        setTimeout(showNextView, 30000)
    }
    
    onMounted(() => {
        showNextView()
    })
</script>

<style lang="sass" scoped>
    .layout-enter-active,
    .layout-leave-active
        transition: all 500ms

    .layout-enter-from
        opacity: 0
        transform: translateY(4rem)

    .layout-leave-to
        opacity: 0
        transform: translateY(-4rem)

    .wrapper
        position: fixed
        width: 100%
        height: 100%
        overflow: hidden
        cursor: none

        .view
            position: absolute
            width: 100%
            height: 100%
            object-fit: contain
</style>