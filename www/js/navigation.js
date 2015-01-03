var navigation ={};
navigation.part = React.createClass({displayName: "part",
  render: function ()
  {
    var data = [{ id: 'lottery-history' }, { id: 'main' }];
    return (React.createElement("div", {className: "navigation.part"}, React.createElement("a", {href: "#main"}, "main page")));
  }
});
React.render(React.createElement(navigation.part, null), document.getElementById('navigation'));