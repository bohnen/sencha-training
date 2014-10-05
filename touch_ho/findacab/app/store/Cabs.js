Ext.define('FindACab.store.Cabs', {
    extend: 'Ext.data.Store',
    config: {
        mode: 'FindACab.model.Cab',
        autoLoad: true
    }
});