var Navigation ={};
Navigation.part = React.createClass({
  render: function ()
  {
    var self = this;
    return (
      <ul>
       { self.props.items.map(function(m,idx){
         return <li><a href={'#' + m.id}>{m.text}</a></li>;
       })}
      </ul>
    );
  }
});

//React.render(<Navigation.part items={[]} />, document.getElementById('bllla'));