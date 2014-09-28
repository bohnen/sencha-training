Ext.application({
    name: 'Events',
    requires: ['BookTaxiBtn'],

    launch: function(){
        var callTaxiEventHandler = function(b){
            console.log('you tapped the '+ b.getText() + 'button');

            this.removeListener('tap',callTaxiEventHandler);
            console.log('from now on, you can not call a handler');
        };

        var callTaxiButton1 = Ext.create('Ext.Button',{
            text: '1: Call a Taxi - Handler',
            margin: 5,
            listeners: {
                tap: callTaxiEventHandler
            }
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

        console.log(BookTaxiBtn.version);
    }
});