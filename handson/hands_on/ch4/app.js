Ext.application({
    name: 'DemoApp',
    launch: function(){
        // start class definition code

        Ext.define('DemoApp.view.DemoComponent',{
            extend: 'Ext.Component',
            config: {
                html: 'Hello, World!'
            }
        }, function(){
            console.log('class is created');
        });

        // create a class instance
        Ext.create('DemoApp.view.DemoComponent',{
            fullscreen: true
        });
    }
});