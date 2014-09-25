Ext.application({
    name: 'Events',
    requires: ['BookTaxiBtn'],

    launch: function(){
        var callTaxiEventHandler = function(b){
            console.log('you tapped the '+ b.getText() + 'button');
        };

        var callTaxiButton1 = Ext.create('Ext.Button',{
            text: '1: Call a Taxi - Handler',
            margin: 5,
            handler: callTaxiEventHandler
        });

        var callTaxiButton2 = Ext.create('Ext.Button',{
            text: '2: Call a Taxi - addListener',
            margin: 5
        });
        callTaxiButton2.addListener('tap',callTaxiEventHandler);

        var callTaxiButton3 = Ext.create('Ext.Button',{
            margin: 5,
            text: '3: Call a Taxi - on'
        });
        callTaxiButton3.on('tap',callTaxiEventHandler);

        Ext.create('Ext.Container',{
            fullscreen: true,
            padding: 10,
            items:[
                callTaxiButton1,
                callTaxiButton2,
                callTaxiButton3,
                {xtype: 'booktaxibtn'}
            ]
        });

    }
});