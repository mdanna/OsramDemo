define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {
			this.view.flxSearchButton.onHover = (flex, context) => {
              if(context.eventType === constants.ONHOVER_MOUSE_ENTER){
                this.view.lblSearchButton.skin = 'sknLblIconBlack120';
              } else if(context.eventType === constants.ONHOVER_MOUSE_LEAVE){
                 this.view.lblSearchButton.skin = 'sknLblIconOrange120';
              }
            };
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		}
	};
});