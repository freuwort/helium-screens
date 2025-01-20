export default {
    id: 1,
    name: 'Theken Screen',
    theme: 'dark',
    horizontal_resolution: 1080,
    vertical_resolution: 1920,
    view_order: [
        1,2,3,5,6,7,8,15,16,17,18,19,20,21,24
    ],
    views: [
        {id:  1, on_days: [0, 1, 2, 3, 4, 5, 6], components: [{ background: '/images/poster/trabs_1.jpg' }]},
        {id:  2, on_days: [0, 1, 2, 3, 4, 5, 6], components: [{ background: '/images/poster/trabs_2.jpg' }]},
        {id:  3, on_days: [0, 1, 2, 3, 4, 5, 6], components: [{ background: '/images/poster/trabs_3.jpg' }]},
        {id:  5, on_days: [0, 1, 2, 3, 4, 5, 6], components: [{ background: '/images/poster/neues_dach.jpg' }]},
        {id:  6, on_days: [0, 1, 2, 3, 4, 5, 6], components: [{ background: '/images/poster/wlan.jpg' }]},
        {id:  7, on_days: [0, 1, 2, 3, 4, 5, 6], components: [{ background: '/images/poster/aufruf_kneipenabend.jpg' }]},
        {id:  8, on_days: [0, 1, 2, 3, 4, 5, 6], components: [{ background: '/images/poster/aufruf_plakate.jpg' }]},
        {id: 15, on_days: [1, 4, 0], components: [{ background: '/images/poster/jtl_1.jpg' }]},
        {id: 16, on_days: [2, 5], components: [{ background: '/images/poster/jtl_2.jpg' }]},
        {id: 17, on_days: [3, 6], components: [{ background: '/images/poster/jtl_3.jpg' }]},
        {id: 18, on_days: [0, 1, 2, 3, 4, 5, 6], components: [{ background: '/images/poster/puppy_1.jpg' }]},
        {id: 19, on_days: [0, 1, 2, 3, 4, 5, 6], components: [{ background: '/images/poster/puppy_2_neu.jpg' }]},
        {id: 20, on_days: [0, 1, 2, 3, 4, 5, 6], components: [{ background: '/images/poster/travent_1.png' }]},
        {id: 21, on_days: [0, 1, 2, 3, 4, 5, 6], components: [{ background: '/images/poster/travent_2.png' }]},
        {id: 24, on_days: [0, 5, 6], components: [{ background: '/images/poster/kft25.png' }]},
    ],
}