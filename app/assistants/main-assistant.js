function MainAssistant(argFromPusher) {}

MainAssistant.prototype = {
	setup: function() {
		Ares.setupSceneAssistant(this);
	},
	cleanup: function() {
		Ares.cleanupSceneAssistant(this);
	},
	giveCoffeeTap: function(inSender, event) {
		window.location = "http://jonathanstark.com/card/#give-a-coffee";
	},
	jcardImageTap: function(inSender, event) {
		//get "amount_formatted" in JSON from http://jonathanstark.com/card/api/latest
		//and assign it to the "updatedBalance" label.
		// I need to use Ajax.Request here.
		/*
		Mojo.Log.info("Requesting latest card balance from Jonathan's Card");
		var balanceRequest = new Ajax.Request("http://jonathanstark.com/card/api/latest", {
			method: 'get',
			evalJSON: 'false',
			onSuccess: this.balanceRequestSuccess.bind(this),
			onFailure: this.balanceRequestFailure.bind(this)
		});
		*/
		//After I can get the balance working, also get "created_at", parse it, 
		//and reformat it in the local time prefs.
	},
	/*
	//Test
	balanceRequestSuccess: function(balanceResponse) {
		//Chrome says that the page is returning X-JSON.
		balanceJSON = balanceResponse.headerJSON;
		var balanceAmtFromWeb = balanceJSON.getElementsByTagName("amount_formatted");
		Mojo.Log.info(balanceAmtFromWeb[0]);
		//The label I wish to update is named "updatedBalance" in main-chrome.js
		updatedBalance.label = balanceAmtFromWeb[0];
	},
	balanceRequestFailure: function(balanceResponse) {
		Mojo.Log.info("Failed to get the card balance:  " + balanceResponse.getAllHeaders());
		Mojo.Log.info(balanceResponse.responseText);
		Mojo.Controller.errorDialog("Failed to load the latest card balance.");
	},
	//End test
	*/
	btnGiveCoffeeTap: function(inSender, event) {
		window.location = "http://jonathanstark.com/card/#give-a-coffee";
	},
	checkTwitterTap: function(inSender, event) {
		window.location = "http://twitter.com/#!/jonathanscard";
	}
};