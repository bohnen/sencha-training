Ext.define('FindACab.controller.CabController', {
    extend: 'Ext.app.Controller',
    
    config: {
        models: ['Cab'],
        stores: ['Cabs'],

        refs: {
            main: 'mainview'
            
        },
        control: {
            'mainview': {
                initialize: 'onInitMain'
            },
            'button[action=press]': {
                tap: 'onTapMain'
            }
            
        }
    },

    init: function(){
        console.log("On init app found "
                + Ext.ComponentQuery.query("mainview").length
                + " mainviews: ",
            Ext.ComponentQuery.query("mainview"));
        console.log("On init app found the reference: ", this.getMain());
    },

    launch: function(app){
        console.log("On launch app found "
                + Ext.ComponentQuery.query("mainview").length
                + " mainviews: ",
            Ext.ComponentQuery.query("mainview"));
        console.log("On init app found the reference: ", this.getMain());
    },

    onInitMain: function () {
        console.log("initialize mainview");
    },

    onTapMain: function () {
        console.log("Tapped a button on main view");
    }
});
