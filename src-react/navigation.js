var Navigation ={};
Navigation.part = React.createClass({
  render: function ()
  {
    var self = this;
    return (<div data-role="footer" >
      <ul>
       { self.props.items.map(function(m,idx){
         return <li><a href={'#' + m.id}>{m.text}</a></li>;
       })}
      </ul>
    </div>
    );
  }
});