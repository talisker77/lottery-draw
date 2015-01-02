var util = {
  listen: function (elm, event, method)
  {
    elm.addEventListener(event, method, false);
  }, 
  guid: function ()
  {
    var g = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c)
    {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
    return g;
  },
  random: function (max)
  {
    var r = Math.floor(Math.random() * max) + 1;
    return r;
  }
};