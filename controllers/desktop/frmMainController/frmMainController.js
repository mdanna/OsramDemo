define({ 

  onViewCreated(){
    this.view.init = () => {
      this.view.onBreakpointChange = (form, breakpoint) => {
        this.view.cmpHeaderMenu.width = breakpoint > 1000 ? '1000dp' : '100%';
        this.view.cmpMainMenuBar.width = breakpoint > 1000 ? '1000dp' : '100%';
        this.view.cmpMenuBar.isVisible = breakpoint > 1000;
        this.view.forceLayout();
      };

      this.view.flxPictureLeft.doLayout = () => {
        this.view.flxPictureLeft.height = this.view.flxPictureLeft.frame.width * 600 / 923;
      };
      this.view.flxPictureRight.doLayout = () => {
        this.view.flxPictureRight.height = this.view.flxPictureRight.frame.width * 600 / 923;
      };

      this.view.flxGetData.onHover = (flex, context) => {
        if(context.eventType === constants.ONHOVER_MOUSE_ENTER){
          this.view.flxGetData.skin = 'sknFlxWhiteBorderOrange';
          this.view.lblGetData.skin = 'sknLblOrange13';
        } else if(context.eventType === constants.ONHOVER_MOUSE_LEAVE){
          this.view.flxGetData.skin = 'sknFlxOrange';
          this.view.lblGetData.skin = 'sknLblWhite13';
        }
      };
      
      this.view.flxImgSampleLeft.doLayout = () => {
        this.view.flxImgSampleLeft.height = this.view.flxImgSampleLeft.frame.width * 559 / 650;
      };
      this.view.flxImgSampleRight.doLayout = () => {
        this.view.flxImgSampleRight.height = this.view.flxImgSampleRight.frame.width * 559 / 654;
      };
      
      this.view.flxImgSampleLeft.onHover = (flex, context) => {
        if(context.eventType === constants.ONHOVER_MOUSE_ENTER){
          this.view.lblSampleLeft.skin = 'sknLblOrange13';
        } else if(context.eventType === constants.ONHOVER_MOUSE_LEAVE){
          this.view.lblSampleLeft.skin = 'sknLblDarkGrey13';
        }
      };
      this.view.flxImgSampleRight.onHover = (flex, context) => {
        if(context.eventType === constants.ONHOVER_MOUSE_ENTER){
          this.view.lblSampleRight.skin = 'sknLblOrange13';
        } else if(context.eventType === constants.ONHOVER_MOUSE_LEAVE){
          this.view.lblSampleRight.skin = 'sknLblDarkGrey13';
        }
      };

      this.view.flxLblSampleLeft.onHover = (flex, context) => {
        if(context.eventType === constants.ONHOVER_MOUSE_ENTER){
          this.view.lblSampleLeft.skin = 'sknLblOrange13';
        } else if(context.eventType === constants.ONHOVER_MOUSE_LEAVE){
          this.view.lblSampleLeft.skin = 'sknLblDarkGrey13';
        }
      };
      this.view.flxLblSampleRight.onHover = (flex, context) => {
        if(context.eventType === constants.ONHOVER_MOUSE_ENTER){
          this.view.lblSampleRight.skin = 'sknLblOrange13';
        } else if(context.eventType === constants.ONHOVER_MOUSE_LEAVE){
          this.view.lblSampleRight.skin = 'sknLblDarkGrey13';
        }
      };


    };
    
  }
});