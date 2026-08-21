
 

const cy = cytoscape({
    // Um elemento HTML DOM no qual o grafo deve ser renderizado.
    container: document.getElementById("cy"),

    //  ________________________________________
    // |       Opções de uso muito comum:       |
    // |________________________________________|
    elements: [

        {
            data:{
                id:"a"
            }
        },

        {
            data:{
                id:"b"
            }
        },

        {
            data:{
                id:"c"
            }
        },

        {

            data:{
                id:"ab",
                source:"a",
                target:"b"
            }

        },

        {

            data:{
                id:"bc",
                source:"b",
                target:"c"
            }

        }

    ],

    style:[

        {

            selector:"node",

            style:{

                "background-color":"#2563eb",
                "label":"data(id)",
                "color":"white",
                "text-valign":"center",
                "text-halign":"center"

            }

        },

        {

            selector:"edge",

            style:{

                width:3,
                "line-color":"#555",
                "target-arrow-color":"#555",
                "target-arrow-shape":"triangle",
                "curve-style":"bezier"

            }

        }

    ],

    layout:{
        name:"grid"
    },

    data: {
        
    },

    // Estado inicial da área de exibição (viewport):
    zoom: 1,
    pan: {
        x: 0,
        y: 0, 
    },

    // Opões de interação:
    minZoom: 1e-50,
    maxZoom: 1e50,
    zoomingEnabled: true,
    userZoomingEnabled: true,
    panningEnabled: true,
    userPanningEnabled: true,
    boxSelectionEnabled: true,
    selectionType: "single",
    touchTapThreshold: 8, //Esses valores possuem padrões razoáveis,
    desktopTapThreshold: 4, // não é recomendável alterá-los a menos que haja um excelente motivo.
    autolock: false,
    autoungrabify: false,
    autounselectify: false,
    multiClickDebounceTime: 250,
    
    //  Opções de renderização:
    headless: false,
    styleEnabled: true,
    hideEdgesOnViewport: false,
    textureOnViewport: false,
    motionBlur: false,
    motionBlurOpacity: 0.2,
    wheelSensitivity: 1,
    pixelRatio: 'auto',

});
