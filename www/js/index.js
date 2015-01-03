console.log("loading index.js");
var lottery = {};
lottery.app = {
  // Application Constructor
  initialize: function ()
  {
    console.log("initialize lottery.app...")
    lottery.app.bindEvents();
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function ()
  {
    document.addEventListener('deviceready', lottery.app.onDeviceReady, false);
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicitly call 'app.receivedEvent(...);'
  onDeviceReady: function ()
  {
    lottery.app.receivedEvent('deviceready');
    if (jQuery === "undefined")
    {
      console.log("jQuery undefined");
    }
    jQuery.ajaxSetup({ cache: true });
    jQuery.when(
      jQuery.getScript("js/util.js"),
      jQuery.getScript("js/navigation.js"),
      jQuery.getScript("js/lottery.js"),
      jQuery.getScript("js/lottery.draw.history.js"),
      jQuery.Deferred(function (deferred)
      {
        jQuery(deferred.resolve);
      })).done(function ()
      {
        console.log("done loading scripts => initializing lottery draw");
        lottery.draw.initialize();
      });
  },
  // Update DOM on a Received Event
  receivedEvent: function (id)
  {
    console.log('Received Event: ' + id);
  },
};
lottery.app.initialize();