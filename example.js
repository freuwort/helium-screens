const data = {
    id: 1,                          // Integer; eindeutige ID des Screens
    type: 'carousel',               // Text; derzeit nur 'carousel' verfügbar
    name: '[01] Theken Screen',     // Text; freifählbar; derzeit noch unbedeutend
    theme: 'dark',                  // Text; derzeit nur 'dark' verfügbar
    horizontal_resolution: 1080,    // Integer; horizontale Auflösung in Pixeln
    vertical_resolution: 1920,      // Integer; vertikale Auflösung in Pixeln
    view_order: [2,1,4,3],          // Array von View-ID-Integern; Reihenfolge der Views auf dem Screen;
    views: [
        {
            id: 1,                          // Integer; eindeutige ID der View
            name: 'Thekendienst View',      // Text; freifählbar; derzeit noch unbedeutend
            duration: 15000,                // Integer; Dauer der Anzeige in Millisekunden
            from_date: null,                // Datum; Startdatum der Anzeige; null = kein Startdatum; Format: 'YYYY-MM-DD'
            from_time: null,                // Uhrzeit; Startzeit der Anzeige; null = keine Startzeit; Format: 'HH:MM:SS'
            to_date: null,                  // Datum; Enddatum der Anzeige; null = kein Enddatum; Format: 'YYYY-MM-DD'
            to_time: null,                  // Uhrzeit; Endzeit der Anzeige; null
            on_days: [0, 1, 2, 3, 4, 5, 6], // Array von Wochentags-Integer; Wochentage, an denen die View angezeigt wird; 0 = Sonntag, 1 = Montag, ..., 6 = Samstag
            components: [
                {
                    type: 'hero',                                           // Text; 'hero', 'fullscreen_hero', 'heading', 'icon_card', 'products' verfügbar
                    title: 'Queerer Kneipenabend',                          // Text; Anzeigetitel
                    description: 'Dein queerer Bar- und NICHT-Partyabend',  // Text; Anzeigebeschreibung
                    background: '/images/event_background.jpg',             // Bild-URL; Hintergrundbild
                    foreground: '/images/event_logo.png',                   // Bild-URL; Logo
                    items: [],                                              // Array von Items; je nach Component-Type unterschiedlich; hier nicht benötigt
                },
                {
                    type: 'fullscreen_hero',
                    title: 'QueerCrew',                         // Text; Anzeigetitel
                    description: 'Deine queere Jugendgruppe',   // Text; Anzeigebeschreibung
                    background: '/images/qc_background.jpg',    // Bild-URL; Hintergrundbild
                    foreground: '/images/qc_logo.png',          // Bild-URL; Logo
                    items: [],                                  // Hier nicht benötigt
                },
                {
                    type: 'heading',
                    title: 'Heutige specials',          // Text; Anzeigetitel
                    description: null,                  // Hier nicht benötigt
                    background: null,                   // Hier nicht benötigt
                    foreground: null,                   // Hier nicht benötigt
                    items: [],                          // Hier nicht benötigt
                },
                {
                    type: 'icon_card',
                    title: 'Heute nur bis 22:30 Uhr',   // Text; Anzeigetitel
                    description: null,                  // Hier nicht benötigt
                    background: '#66C8FF',              // Farbcode; Hintergrundfarbe; format: '#RRGGBB'
                    foreground: 'info',                 // Text; Icon; auswählbar von https://fonts.google.com/icons
                    items: [],                          // Hier nicht benötigt
                },
                {
                    type: 'products',
                    title: 'Heutige specials',          // Text; Anzeigetitel
                    description: null,                  // Hier nicht benötigt
                    background: null,                   // Hier nicht benötigt
                    foreground: null,                   // Hier nicht benötigt
                    items: [                            // Array von "Produkten"
                        {
                            id: 1,                                          // Integer; eindeutige ID des Produkts
                            name: 'Lime Martini',                           // Text; Produktname
                            price: 5.5,                                     // Float; Preis des Produkts (5,50 € in diesem Fall)
                            image: '/images/cocktails/lime_martini.png',    // Bild-URL; Produktbild
                        },
                    ],
                },
            ],
        },
    ],
}

// Zu jeden IDs ist zu sagen, dass diese später automatisch vom Editor zugewiesen werden.
// Die IDs sind hier nur exemplarisch gewählt - sie müssen nur eindeutig sein.
// Also kann man sich hierbei einfach zahlen aussuchen

// Die IDs sind außerdem immer nur innerhalb des Scopes eindeutig.
// (also kann es eine ID 1 als Screen und eine ID 1 als View geben... gleiches mit Produkten)