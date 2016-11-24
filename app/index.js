var USER_DATA = {
  name: 'HK Kahng',
  username: 'eeronomicon',
  image: 'https://avatars1.githubusercontent.com/u/20058281?v=3&s=460'
}

var React = require('react');
var ReactDOM = require('react-dom');

/*
  Focused
  Independent
  Reusable
  Small
  Testable
*/

var ProfilePic = React.createClass({
  render: function () {
    return <img src={this.props.imageUrl} style={{height: 200}}></img>
  }
});

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <a href={'https://www.github.com/' +  this.props.username}>
          {this.props.username}
        </a>
      </div>
    );
  }
});

var ProfileName = React.createClass({
  render: function (){
    return <div>{this.props.name}</div>
  }
});

var Avatar = React.createClass({
  render: function () {
    return(
      <div>
        <ProfilePic imageUrl={this.props.user.image}/>
        <ProfileName name={this.props.user.name}/>
        <ProfileLink username={this.props.user.username}/>
      </div>
    );
  }
});


ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'));
