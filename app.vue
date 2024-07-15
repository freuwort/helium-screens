<template>
    <TransitionGroup name="layout">
        <ViewLayout v-for="view in data.views" :key="view.id" v-show="view.id === viewId">
            <template v-for="(component, i) in view.components" :key="component.id">
                <ViewHeading v-if="component.type === 'heading'" :style="{transitionDelay: view.stagger * i + 'ms'}" :title="(component.title as string)" />
                <ViewAlert v-else-if="component.type === 'alert'" :style="{transitionDelay: view.stagger * i + 'ms'}" :icon="(component.foreground as string)" :title="component.title" :color="(component.background as string)" />
                <ViewProducts v-else-if="component.type === 'products'" :style="{transitionDelay: view.stagger * i + 'ms'}" :items="component.items" />
                <ViewHero v-else-if="component.type === 'hero'" :style="{transitionDelay: view.stagger * i + 'ms'}" :logo="(component.foreground as string)" :background="(component.background as string)" :title="component.title" :subtitle="(component.description as string)" />
                <ViewHero v-else-if="component.type === 'fullscreen_hero'" :style="{transitionDelay: view.stagger * i + 'ms'}" :logo="(component.foreground as string)" :background="(component.background as string)" :title="component.title" :subtitle="(component.description as string)" fullscreen />
            </template>
        </ViewLayout>
    </TransitionGroup>
</template>

<script lang="ts" setup>
    // START: Fetch
    const data = ref({
        id: 1,
        type: 'carousel',
        name: '01 Theken Screen',
        theme: 'dark',
        horizontal_resolution: 1080,
        vertical_resolution: 1920,
        view_order: [1,2],
        views: [
            {
                id: 1,
                name: 'Thekendienst View',
                duration: 10000,
                stagger: 100,
                from_date: null,
                from_time: null,
                to_date: null,
                to_time: null,
                on_days: [0, 1, 2, 3, 4, 5, 6],
                components: [
                    {
                        type: 'hero',
                        title: 'Kneipenabend',
                        description: 'Euer queerer Kneipenabend ab 20:00 Uhr',
                        background: '/images/onkelemma/oe_background.jpg',
                        foreground: '/images/onkelemma/oe_logo.png',
                        items: [],
                    },
                    {
                        type: 'heading',
                        title: 'Heutige specials',
                        description: null,
                        background: null,
                        foreground: null,
                        items: [],
                    },
                    {
                        type: 'products',
                        title: 'Heutige specials',
                        description: null,
                        background: null,
                        foreground: null,
                        items: [
                            {
                                id: 1,
                                name: 'Lime Martini',
                                price: 5.5,
                                highlight: false,
                                image: '/images/cocktails/lime_martini.png',
                            },
                            {
                                id: 2,
                                name: 'Sunset Valley',
                                price: 6,
                                highlight: true,
                                image: '/images/cocktails/sunset_valley.png',
                            },
                            {
                                id: 3,
                                name: 'Cherry Dream',
                                price: 4.8,
                                highlight: false,
                                image: '/images/cocktails/cherry_dream.png',
                            },
                        ],
                    },
                    {
                        type: 'heading',
                        title: 'Infos zum Event',
                        description: null,
                        background: null,
                        foreground: null,
                        items: [],
                    },
                    {
                        type: 'alert',
                        title: 'Heute nur bis <b>22:30 Uhr</b>',
                        description: null,
                        background: '#66C8FF',
                        foreground: 'info',
                        items: [],
                    },
                    {
                        type: 'alert',
                        title: 'Eure Gastgeber: <b>Mike und Lilly</b>',
                        description: null,
                        background: '#C86FFF',
                        foreground: 'group',
                        items: [],
                    },
                    {
                        type: 'alert',
                        title: 'Folge Event: <b>Women/MenDance</b>',
                        description: null,
                        background: '#FFC773',
                        foreground: 'confirmation_number',
                        items: [],
                    },
                ],
            },
            {
                id: 2,
                name: 'QC Gruppe View',
                duration: 10000,
                stagger: 100,
                from_date: null,
                from_time: null,
                to_date: null,
                to_time: null,
                on_days: [0, 1, 2, 3, 4, 5, 6],
                components: [
                    {
                        type: 'fullscreen_hero',
                        title: 'QueerCrew',
                        description: 'Deine queere Jugendgruppe<br>Jeden <b>2. und 4. Dienstag</b> im Monat ab <b>18:00 Uhr</b>',
                        background: '/images/queercrew/qc_background.jpg',
                        foreground: '/images/queercrew/qc_logo.png',
                        items: [],
                    },
                ],
            },
        ],
    })
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