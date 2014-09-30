Ext.onReady(function(){
    Ext.create('Ext.Panel',{
        renderTo: Ext.getBody(),
        layout:{
            type: 'vbox',
            align: 'start',
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
                widh: 150,
                html: 'width: 150',
                margin: 10
            },
            {
                cls: 'box',
                widh: 150,
                html: 'width: 150',
                margin: 10
            }
        ]
    });
});