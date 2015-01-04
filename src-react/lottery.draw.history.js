/*
<div data-role="header" data-position="fixed" class="ui-content">
      <h1>Winner history</h1>
    </div><!-- header -->
    <div data-role="main" id="lottery-history"></div><!--main-->
    <div data-role="footer" class="navigation"></div><!--footer-->
*/
lottery.draw.history = {};


/*data-role="page" data-theme="b" */
lottery.draw.history.page = React.createClass({
  render:function(){
    return (<div id="lottery-history-page" data-role="page" data-theme="b">
    <lottery.draw.history.header />
    <lottery.draw.history.content />
    <Navigation.part items={[{id:"main", text:"Home"}, {id:"lottery-history-page", text:"History"}]} />
    </div>);
  }
});
lottery.draw.history.header = React.createClass({
  render: function(){
    return (<div data-role="header" data-position="fixed" className="ui-header"><h1>Winner history</h1></div> );
  }
});

lottery.draw.history.content = React.createClass({
  render: function (){
    return(<div data-role="main" className="ui-content"><p>Page content</p></div> );
  }
});

//React.render(<lottery.draw.history.page/>, document.getElementById("lottery-history-page"));