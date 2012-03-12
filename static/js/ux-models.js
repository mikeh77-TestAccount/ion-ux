IONUX.Models.DataResource = Backbone.Model.extend({

});

IONUX.Models.DataResourceDetails = Backbone.Model.extend({

  url: function(){
    return "/dataresource/"+this.get("data_resource_id")+"/";
  }

});


IONUX.Models.Observatory = Backbone.Model.extend({

  url: "/observatories/",
  idAttribute: "_id"

});

IONUX.Models.ObservatoryFacepageModel = Backbone.Model.extend({

  url: function(){
    return "/observatories/"+this.get("marine_facility_id")+"/";
  },
  
  parse: function(resp) {
    return resp.data;
  }

});


IONUX.Models.Platform = Backbone.Model.extend({

  url: "/platforms/",
  idAttribute: "_id"

});

IONUX.Models.PlatformFacepageModel = Backbone.Model.extend({

  url: function(){
    return "/platforms/"+this.get("platform_id")+"/";
  },
  
  parse: function(resp) {
    return resp.data;
  }

});


IONUX.Models.PlatformModel = Backbone.Model.extend({
  url: '/platform_models/',
  idAttribute: '_id'
});

IONUX.Models.PlatformModelFacepageModel = Backbone.Model.extend({
  url: function() {
    return '/platform_models/'+this.get('platform_model_id')+'/';
  },
  
  parse: function(resp) {
    return resp.data;
  } 
});


IONUX.Models.Instrument = Backbone.Model.extend({

  url: "/instruments/",
  idAttribute: "_id"

});


IONUX.Models.InstrumentFacepageModel = Backbone.Model.extend({

  url: function(){
    return "/instruments/"+this.get("instrument_id")+"/";
  },
  
  parse: function(resp) {
    return resp.data;
  }
});


IONUX.Models.InstrumentModel = Backbone.Model.extend({
  url: '/instrument_models/',
  idAttribute: '_id'
});

IONUX.Models.InstrumentModelFacepageModel = Backbone.Model.extend({
  url: function() {
    return '/instrument_models/'+this.get('instrument_model_id')+'/';
  },
  
  parse: function(resp) {
    return resp.data;
  } 
});


IONUX.Models.InstrumentAgent = Backbone.Model.extend({
  url: '/instrument_agents/',
  idAttribute: '_id'
});

IONUX.Models.InstrumentAgentFacepageModel = Backbone.Model.extend({
  url: function() {
    return '/instrument_agents/'+this.get('instrument_agent_id')+'/';
  },
  
  parse: function(resp) {
    return resp.data;
  } 
});

IONUX.Models.DataProcessDefinition = Backbone.Model.extend({
  url: "/data_process_definitions/",
  idAttribute: "_id"
});

IONUX.Models.DataProcessDefinitionFacepageModel = Backbone.Model.extend({

  url: function(){
    return "/data_process_definitions/"+this.get("data_process_definition_id")+"/";
  },
  
  parse: function(resp) {
    return resp.data;
  }
});


IONUX.Models.DataProduct = Backbone.Model.extend({
  url: "/data_products/",
  idAttribute: "_id"
});

IONUX.Models.DataProductFacepageModel = Backbone.Model.extend({

  url: function(){
    return "/data_products/"+this.get("data_product_id")+"/";
  },
  
  parse: function(resp) {
    return resp.data;
  }

});


IONUX.Models.ResourceType = Backbone.Model.extend({})