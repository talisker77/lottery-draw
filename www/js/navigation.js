var Navigation ={};
Navigation.part = React.createClass({displayName: "part",
  render: function ()
  {
    var self = this;
    return (
      React.createElement("ul", null, 
        self.props.items.map(function(m,idx){
         return React.createElement("li", null, React.createElement("a", {href: '#' + m.id}, m.text));
       })
      )
    );
  }
});

//React.render(<Navigation.part items={[]} />, document.getElementById('bllla'));