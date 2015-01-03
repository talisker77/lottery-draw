var navigation ={};
navigation.part = React.createClass({
  render: function ()
  {
    var data = [{ id: 'lottery-history' }, { id: 'main' }];
    return (<div className="navigation.part"><a href="#main">main page</a></div>);
  }
});
React.render(<navigation.part />, document.getElementById('navigation'));