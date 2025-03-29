<template>
    <div class="wrapper">
        <TransitionGroup name="layout">
            <img class="view" v-for="(view, index) in views" :key="index" v-show="index === viewIndex" :src="view.image" alt="Poster" />
        </TransitionGroup>
    </div>
</template>

<script lang="ts" setup>
    import content from './content.js'
    import dayjs from 'dayjs'

    const route = useRoute()
    const today = dayjs()
    const viewIndex = ref(-1)
    const views = computed(() => content
        .map((view: any) => ({
            days: view.days || [],
            display: view.display || [],
            expire: view.expire || null,
            image: '/images/content/' + view.image,
        }))
        .filter((view: any) => {
            // Check if the view is active today
            if (view.days.length && !view.days.includes(today.day())) return false

            // Check if the view has an expiration date
            if (view.expire && today.isAfter(dayjs(view.expire))) return false

            // Check if the view should be displayed based on the query parameter
            if (route.query.display && view.display.length > 0 && !view.display.includes(route.query.display)) return false

            // Otherwise, the view should be shown
            return true
        })

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