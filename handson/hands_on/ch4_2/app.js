Ext.application({
    name: 'VehicleApp',
    launch: function(){
        Ext.define('VehicleApp.vehicle.Cab',{
            config:{
                driver: 'John Doe',
                driver2: {
                    firstName: 'John',
                    lastName: 'Doe'
                }
            },

            constructor: function(config){
                this.initConfig(config);
            },

            applyDriver: function(newVal){
                if(newVal === 'The Pope'){
                    console.log(newVal + ' is an invalid taxi driver.');
                    return;
                }
                return newVal;
            },

            updateDriver: function(newVal,oldVal){
                console.log('The owner has been changed from ' + oldVal + ' to ' + newVal);

            }
        },function(){
            console.log('created');
        });


        var taxi = Ext.create('VehicleApp.vehicle.Cab',{
            driver: 'Joh Doe'
        });

        console.log(taxi.getDriver());

        taxi.setDriver('The Pope');
        console.log(taxi.getDriver());

        taxi.setDriver('Lee Boonstra');
        console.log(taxi.getDriver());

    }
});

