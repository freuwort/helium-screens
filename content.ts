import type { View } from './types/View'

// Parameter erklärt:

//  display:
//      Auf diesen Infopanelen wird das Bild angezeigt.
//      Wenn man diesen Parameter weglässt, wird das Bild auf allen Infopanelen angezeigt.
//      Verfügbar sind: oe_fenster, oe_clubraum, trabs

//  days:
//      An diesen Tagen wird das Bild angezeigt.
//      Wenn man diesen Parameter weglässt, wird das Bild an allen Tagen angezeigt.
//      0 = Sonntag
//      1 = Montag
//      2 = Dienstag
//      3 = Mittwoch
//      4 = Donnerstag
//      5 = Freitag
//      6 = Samstag

//  expire:
//      Das Bild wird bis zu diesem Zeitpunkt angezeigt.
//      Wenn man diesen Parameter weglässt, wird das Bild immer angezeigt.
//      Format: JJJJ-MM-DD SS:mm also bspw. 2025-10-01 17:30

//  image:
//      Der Name des Bildes samt Dateiendung.
//      Das Bild muss im Ordner /public/images/content/ liegen.



// Beispiel days:
//  { days: [0, 1, 2, 3, 4, 5, 6], image: 'qc.jpg', }

// Beispiel expire:
//  { expire: '2025-03-29 19:43', image: 'qc.jpg', }

// Beispiel display:
//  { display: 'oe_fenster', image: 'qc.jpg', }



export default [
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'qc.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'qc_csd.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'csd_truck.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'finq_bar.png', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'trabs_1.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [1, 4, 0, 5, 6], image: 'jtl_1.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'aufruf_kneipenabend.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'wlan.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'trabs_2.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [2, 5, 6], image: 'jtl_2.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'aufruf_plakate.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'trabs_3.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'aufruf_kneipenabend.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'csd_truck.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [3, 6, 5], image: 'jtl_3.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'wlan.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'puppy_1.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'FF_Jahresprogramm.png', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'MWD.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'Insta1.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'Insta2.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'Insta3.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'Insta4.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'Insta5.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'csd_truck.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'Insta6.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'Insta7.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'Insta8.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'Insta9.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'Insta10.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'Insta11.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'Insta12.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'Insta13.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'Insta14.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'Insta15.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'csd_truck.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'Insta16.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'Insta17.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'Insta18.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'Insta19.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'Insta20.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'Insta21.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'Insta23.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'Insta24.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'Insta25.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'csd_truck.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'Insta26.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'Insta27.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'Insta28.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'Insta29.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'Insta30.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'Insta31.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'queer_cinema_layla.png', },
    { display: ['test'], days: [0, 1, 2, 3, 4, 5, 6], image: 'wlan.jpg', },
] as View[]
