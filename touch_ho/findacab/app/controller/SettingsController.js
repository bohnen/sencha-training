Ext.define('FindACab.controller.SettingsController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            
        },
        control: {

        },
        models: ['Setting'],
        stores: ['Settings']
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
