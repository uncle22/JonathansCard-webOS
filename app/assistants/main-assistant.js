function MainAssistant(argFromPusher) {}

MainAssistant.prototype = {
	setup: function() {
		Ares.setupSceneAssistant(this);
	},
	cleanup: function() {
		Ares.cleanupSceneAssistant(this);
	},
	jcardImageTap: function(inSender, event) {
		//The card has been disabled.  Link to the page that explains this.
		window.location = "http://jonathanstark.com/card/";
	},
	bummerTap: function(inSender, event) {
		window.location = "http://jonathanstark.com/card/";
	},
	caffePagatoTap: function(inSender, event) {
		window.location = "https://www.facebook.com/note.php?note_id=410014862860";
	},
	fraudTap: function(inSender, event) {
		window.location = "http://sam.odio.com/2011/08/12/i-took-625-jonathans-card/";
	},
	twitterTap: function(inSender, event) {
		window.location = "http://twitter.com/#!/jonathanscard";
	}
};