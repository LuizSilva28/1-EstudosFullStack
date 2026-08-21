
cy.on("tap", "node", function (evt) {

    console.log(evt.target.id());

});

cy.on("dragfree","node",function(evt){

    console.log(evt.target.position());

});

cy.on("tap","edge",function(evt){

    console.log(evt.target.data());

});

cy.on("tap",function(event){

    if(event.target === cy){

        console.log("clicou no canvas");

    }

});

cy.add({

    group:"nodes",

    data:{

        id: "novo",
        label:"Novo",
        width:100,
        weight:75,
        height: 50,
        

    },

    position:{

        x:200,
        y:100

    }

});

cy.$("#novo").remove();


cy.add({

    group:"edges",

    data:{

        id:"lig1",
        source:"a",
        target:"novo"

    }

});

cy.$("#a").style({

    "background-color":"red"

});

cy.$("#a").data({

    label:"Casa"

});




