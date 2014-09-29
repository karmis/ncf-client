define(
  [],
  function(){
    var form = new Backbone.Form({
        //Schema
        schema: {
            id:         'Number',
            name:       'Text',
            password:   'Password'
        },

        //Data to populate the form with
        data: {
          id: 123,
          name: 'Rod Kimble',
          password: 'cool beans'
        }
    }).render()
    // var model = App.Components.Entities.Models.BaseModel.extend({
    //   restModule: 'core',
    //   restResource: 'clients'
    // });

    // var collection = App.Components.Entities.Collections.BaseCollection.extend({
    //   restModule: 'core',
    //   model: model,
    //   restResource: 'clients'
    // });
    
    return {
      testForm: form
    };
  }
);

