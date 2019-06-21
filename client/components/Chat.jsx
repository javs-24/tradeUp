import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
// import Peer from 'peerjs';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:3000/');

const mapStateToProps = store => ({
  userInfo: store.items.userInfo,
  currentChatPeer: store.items.currentChatPeer
});

// const mapDispatchToProps = dispatch => ({
//   exitFavorites: () => dispatch(actions.exitFavorites())
// });

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessages: [],
      currentMessage: ''
    };
    this.onChange = this.onChange.bind(this);
    this.submitChatMessage = this.submitChatMessage.bind(this);
    this.receiveChatMessage = this.receiveChatMessage.bind(this);
  }

  componentDidMount() {
    socket.on('message', msg => {
      // on receive msg
      console.log('SERVER SENT MESSAGE');
      this.receiveChatMessage(msg);
    });
    // this.peer = new Peer({ id: 'bb', key: 'lwjd5qra8257b9' });
    // console.log('i mounted!');
    // this.peer.on('open', function(id) {
    //   console.log('My peer ID is: ' + id);
    // });
    // this.peer.on('connection', conn => {
    //   console.log('connected !', conn);
    //   conn.on('data', msg => {
    //     // Will print 'hi!'
    //     console.log(msg);
    //     this.state.chatMessages.push(msg);
    //     this.setState({
    //       chatMessages: this.state.chatMessages,
    //       currentMessage: ''
    //     });
    //   });
    // });
    // this.conn = this.peer.connect(this.props.currentChatPeer);
    // this.conn.on('open', () => {
    //   this.conn.send('hi!');
    // });
  }

  onChange(e) {
    e.preventDefault();
    const val = e.target.value;
    this.setState({
      currentMessage: val
    });
  }

  receiveChatMessage(msg) {
    this.state.chatMessages.push(msg);
    this.setState({
      chatMessages: this.state.chatMessages
    });
  }

  submitChatMessage(msg, e) {
    if (e) e.preventDefault();
    console.log('adding message', msg);
    // this.conn.send(msg);
    socket.emit('message', {
      text: msg,
      username: this.props.userInfo.username
    });
    // this.state.chatMessages.push(msg);
    // this.setState({
    //   chatMessages: this.state.chatMessages,
    //   currentMessage: ''
    // });
  }

  render() {
    // console.log('its state', this.state);
    const msgDivs = this.state.chatMessages.map((msg, i) => (
      <div key={i} className="message">
        <span
          style={{
            fontWeight: '800',
            color: `rgb(${Math.floor(255 * Math.random())},${Math.floor(
              255 * Math.random()
            )},${Math.floor(255 * Math.random())})`
          }}>{`${msg.username}: `}</span>
        {msg.text}
      </div>
    ));
    return (
      <div className="chat-wrapper">
        <div className="messages">{msgDivs}</div>
        <div className="enter-message">
          <form
            autoComplete="off"
            onSubmit={e =>
              this.submitChatMessage(this.state.currentMessage, e)
            }>
            <input
              type="text"
              placeholder="do a msg"
              onChange={e => this.onChange(e)}
              value={this.state.currentMessage}></input>
            <input type="submit" value="submit"></input>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(Chat);
