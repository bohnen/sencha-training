Ext.onReady(function () {
    Ext.create('Ext.Panel', {
        renderTo: Ext.getBody(),
        layout: {
            type: 'fit'
        },
        // height, width ともに指定しなければmarginは付与されないようだ
        height: 500,
        width: 500,
        cls: 'background',
        margin: 10,
        items: [
            {
                docked: 'top',
                html: 'docked: top',
                cls: 'box2'

            },
            {
                xtype: 'component',
                html: 'fit: 150',
                cls: 'box',
                margin: 25
            }
        ]
    });
});