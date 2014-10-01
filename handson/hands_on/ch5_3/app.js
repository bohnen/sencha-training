Ext.onReady(function(){
    Ext.create('Ext.Panel',{
        renderTo: Ext.getBody(),
        layout:{
            type: 'vbox',
            align: 'stretch',
            pack: 'start'
        },
        height: 500,
        cls: 'background',
        margin: 30,
        items:[
            {
                docked: 'top',
                cls: 'title'
            },
            {
                cls: 'box',
                width: 150,
                html: 'width: 150',
                flex: 1,
                margin: 10
            },
            {
                cls: 'box',
                width: 150,
                html: 'width: 150',
                flex: 2,
                margin: 10
            }
        ]
    });
});