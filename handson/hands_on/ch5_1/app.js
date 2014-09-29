Ext.onReady(function() {
    Ext.create('Ext.Panel', {
        renderTo: Ext.getBody(),
        layout: {
            type: 'hbox',
            align: 'start',
            pack: 'start'
        },
        height: 300,
        cls: 'background',
        margin: 10,
        items: [
            {
                docked: 'top',
                cls: 'title'
            },
            {
                cls: 'box',
                width: 150,
                html: 'width: 150',
                margin: 10
            },
            {
                cls: 'box',
                width: 150,
                html: 'width: 150',
                margin: 10
            }
        ]
    });

    Ext.create('Ext.Panel',{
        renderTo: Ext.getBody(),
        layout:{
            type: 'hbox',
            align: 'center',
            pack: 'center'
        },
        height: 300,
        cls: 'background',
        margin: 10,
        items: [
            {
                docked: 'top',
                cls: 'title'
            },
            {
                cls: 'box',
                width: 150,
                html: 'width: 150',
                margin: 10
            },
            {
                cls: 'box',
                width: 150,
                html: 'width: 150',
                margin: 10
            }
        ]
    });
});