<template>
    <div class="layout" v-for="view in data.views" :key="view.id" v-show="view.id === viewId">
        <ViewBackground>
            <template v-for="component in view.components" :key="component.id">
                <template v-if="component.type === 'heading'">
                    <ViewBigHeading :title="component.title" />
                </template>
                <template v-else-if="component.type === 'hero'">
                    <ViewEventHeader :logo="component.foreground" :title="component.title" :subtitle="component.description" />
                </template>
                <template v-else-if="component.type === 'fullscreen_hero'">
                    <ViewEventHeader :logo="component.foreground" :title="component.title" :subtitle="component.description" fullscreen />
                </template>
                <template v-else-if="component.type === 'icon_card'">
                    <ViewIconCard :icon="component.foreground" :title="component.title" :color="component.background" />
                </template>
                <template v-else-if="component.type === 'products'">
                    <ProductSection :items="component.items" />
                </template>
            </template>
        </ViewBackground>
    </div>
</template>

<script lang="ts" setup>
    /**
     * Available component types:
     * heading
     * image
     * hero
     * fullscreen_image
     * fullscreen_hero
     * icon_card
     * products
     */

    const data = ref({
        id: 1,
        type: 'carousel',
        name: '[01] Theken Screen',
        theme: 'dark',
        horizontal_resolution: 1080,
        vertical_resolution: 1920,
        view_order: [1,2],
        views: [
            {
                id: 1,
                name: 'Thekendienst View',
                duration: 15000,
                from_date: null,
                from_time: null,
                to_date: null,
                to_time: null,
                on_days: [0, 1, 2, 3, 4, 5, 6],
                components: [
                    {
                        type: 'hero',
                        title: 'Queerer Kneipenabend',
                        description: 'Dein queerer Bar- und NICHT-Partyabend',
                        background: '/images/event_background.jpg',
                        foreground: '/images/event_logo.png',
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
                                image: '/images/cocktails/lime_martini.png',
                            },
                            {
                                id: 2,
                                name: 'Sunset Valley',
                                price: 6,
                                image: '/images/cocktails/sunset_valley.png',
                            },
                            {
                                id: 3,
                                name: 'Cherry Dream',
                                price: 4.8,
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
                        type: 'icon_card',
                        title: 'Heute nur bis 22:30 Uhr',
                        description: null,
                        background: '#66C8FF',
                        foreground: 'info',
                        items: [],
                    },
                    {
                        type: 'icon_card',
                        title: 'Eure Gastgeber: Mike und Lilly',
                        description: null,
                        background: '#C86FFF',
                        foreground: 'group',
                        items: [],
                    },
                    {
                        type: 'icon_card',
                        title: 'Folge Event: Women/MenDance',
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
                from_date: null,
                from_time: null,
                to_date: null,
                to_time: null,
                on_days: [0, 1, 2, 3, 4, 5, 6],
                components: [
                    {
                        type: 'fullscreen_hero',
                        title: 'QueerCrew',
                        description: 'Deine queere Jugendgruppe',
                        background: '/images/qc_background.jpg',
                        foreground: '/images/qc_logo.png',
                        items: [],
                    },
                ],
            },
        ],
    })

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
</script>

<style lang="sass" scoped>
    .layout
        display: flex
        position: fixed
        top: 0
        left: 0
        right: 0
        bottom: 0
</style>