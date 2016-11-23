var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function() {
    return (
      <div>Hallo {this.props.subject}!</div>
    )
  }
})

var FriendsContainer = React.createClass({
  render: function(){
    var name = 'Wanda'
    var friends = ['Daisy', 'Nate', 'Pocky']
    return (
      <div>
        <div className='jumbotron'><h1> {name} </h1></div>
        <ShowList doge={name} names={friends} />
      </div>
    )
  }
});

var ShowList = React.createClass({
  render: function(){
    var listItems = this.props.names.map(function(friend){
      return <li className='list-group-item'> {friend} </li>;
    });
    return (
      <div>
        <ul className='list-group'>
          <li className='list-group-item active'><h3> Friends of {this.props.doge} </h3></li>
          {listItems}
        </ul>
      </div>
    )
  }
});

ReactDOM.render(
  <div className='container'><FriendsContainer /></div>,
  document.getElementById('app')
)
