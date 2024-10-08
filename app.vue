<template>
    <TransitionGroup name="layout">
        <ViewLayout v-for="view in data.views" :key="view.id" v-show="view.id === viewId">
            <template v-for="(component, i) in view.components" :key="component.id">
                <ViewHeading v-if="component.type === 'heading'" :style="{transitionDelay: view.stagger * i + 'ms'}" :title="(component.title as string)" />
                <ViewAlert v-else-if="component.type === 'alert'" :style="{transitionDelay: view.stagger * i + 'ms'}" :icon="(component.foreground as string)" :title="component.title" :color="(component.background as string)" />
                <ViewProducts v-else-if="component.type === 'products'" :style="{transitionDelay: view.stagger * i + 'ms'}" :items="component.items" />
                <ViewHero v-else-if="component.type === 'hero'" :style="{transitionDelay: view.stagger * i + 'ms'}" :logo="(component.foreground as string)" :background="(component.background as string)" :title="component.title" :subtitle="(component.description as string)" />
                <ViewHero v-else-if="component.type === 'fullscreen_hero'" :style="{transitionDelay: view.stagger * i + 'ms'}" :logo="(component.foreground as string)" :background="(component.background as string)" :title="component.title" :subtitle="(component.description as string)" fullscreen />
                <ViewImage v-else-if="component.type === 'fullscreen_image'" :style="{transitionDelay: view.stagger * i + 'ms'}" :src="(component.background as string)" :alt="component.title" fullscreen />
            </template>
        </ViewLayout>
    </TransitionGroup>
</template>

<script lang="ts" setup>
    import screen from './screen.js'



    // START: Fetch
    const data = ref(screen)
    // END: Fetch



    // START: Carousel cycle
    const viewId = ref<string|number|null>(null)

    function loadNextView() {
        let view = findNextView(viewId.value)

        viewId.value = view?.id || null

        setTimeout(loadNextView, view?.duration || 1000);
    }

    function findNextView(id: string|number|null = null) {
        let order = data.value.view_order
        let startIndex = order.findIndex(viewId => viewId === id)
        
        order = order.slice(startIndex).concat(order.slice(0, startIndex))

        for (let i = 1; i < order.length; i++)
        {
            let view = data.value.views.find(view => view.id === order[i])

            if (!view) continue
            if (view.on_days && !view.on_days.includes(new Date().getDay())) continue
            if (view.from_date && new Date(view.from_date) > new Date()) continue
            if (view.from_time && new Date(view.from_time) > new Date()) continue
            if (view.to_date && new Date(view.to_date) < new Date()) continue
            if (view.to_time && new Date(view.to_time) < new Date()) continue

            return view
        }

        return null
    }

    onMounted(loadNextView)
    // END: Carousel cycle
</script>

<style lang="sass" scoped>
    .view-component
        transition: all 1000ms



    .layout-enter-active,
    .layout-leave-active
        transition: all 500ms

    .layout-enter-from
        opacity: 0
        
        .view-component
            opacity: 0
            transform: translateY(4rem)

    .layout-leave-to
        opacity: 0

        > .view-component
            opacity: 0
            transform: translateY(-4rem)

</style>