Ext.application({
    name: 'VehicleApp',
    launch: function(){
        Ext.define('Utils.common.Version',{
            singleton: true,
            version: '1.02',
            config: {
                serial: '1.03'
            },
            log: function(msg){
                console.log(msg);
            }
        },function(){
            // undefinedになってしまう
            console.log(Utils.common.Version.getSerial());
        });

    }
});