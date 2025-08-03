<template>
    <div class="wrapper">
        <TransitionGroup name="layout">
            <img class="view" v-for="(view, index) in views" :key="index" v-show="index === viewIndex" :src="view.image" alt="Poster" />
        </TransitionGroup>
    </div>
</template>

<script lang="ts" setup>
    import type { View } from '~~/types/View'
    import content from '~~/content.js'
    import dayjs from 'dayjs'

    const route = useRoute()
    const today = dayjs()
    const viewIndex = ref(-1)
    const views = ref<View[]>([])

    function filterViews() {
        views.value = content
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
    }

    function showNextView() {
        viewIndex.value ++
        
        if (viewIndex.value >= views.value.length) {
            return location.reload()
        }

        console.log(`Displaying: %c${views.value[viewIndex.value]?.image || 'not defined'}`, 'font-weight: bold;')

        setTimeout(showNextView, 30000)
    }

    function checkForContent() {
        return views.value.length > 0
    }
    
    onMounted(() => {
        console.log(`================================================`)
        console.log(`%cBooting up ...`, 'color: #6c5ce7; font-weight: bold;')
        console.log(`Display ID: %c${route.query.display || 'not defined'}`, 'font-weight: bold;')
        console.log(`Timestamp:  %c${today.format('YYYY-MM-DD HH:mm:ss')}`, 'font-weight: bold;')
        console.log(`%cFiltering views ...`, 'color: #6c5ce7; font-weight: bold;')
        filterViews()
        console.log(`Views remaining: %c${views.value.length}`, 'font-weight: bold;')
        if (checkForContent()) {
            console.log(`%cDisplaying views ...`, 'color: #6c5ce7; font-weight: bold;')
            showNextView()
        }
        else {
            console.log(`%cNo content found, reloading in 60 seconds ...`, 'color: #ffa502; font-weight: bold;')
            setTimeout(() => location.reload(), 60000)
        }
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
