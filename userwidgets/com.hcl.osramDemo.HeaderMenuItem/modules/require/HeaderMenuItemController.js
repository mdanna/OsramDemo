define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {
			this.view.onHover = (flex, context) => {
              if(context.eventType === constants.ONHOVER_MOUSE_ENTER){
                this.view.lblMenuItem.skin = 'sknLblOrange13';
              } else if(context.eventType === constants.ONHOVER_MOUSE_LEAVE){
                 this.view.lblMenuItem.skin = 'sknLblBlack13';
              }
            };
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		}
	};
});