/**
 * Ext.Viewport.mask のテスト
 */
Ext.define('testbed.controller.LoadMask', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            
        },
        control: {
            
        }
    },
    
    init: function(){
        Ext.Viewport.mask({
            xtype: 'loadmask',
            message: 'ローディング...'
        });

        Ext.Function.defer(function(){
            Ext.Viewport.unmask();
        },1000);
    }
});
