import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:3000/');
// console.log(socket);
// socket.on('message', function(data) {
//   console.log(data);
// });
// socket.emit('message', 'yeet');

const mapStateToProps = store => ({
  formControls: store.items.formControls,
  userInfo: store.items.userInfo
});

const mapDispatchToProps = dispatch => ({
  formOnChange: event => dispatch(actions.formOnChange(event)),
  exitSell: () => dispatch(actions.exitSell()),
  fetchItems: user_id => dispatch(actions.fetchItems(user_id))
});

class AddItemModal extends React.Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('pressed button !');
    let formData = new FormData();
    formData.append('file', this.fileInput.current.files[0]);

    fetch('/api/upload', {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imgURL => {
        let data = {
          user_id: this.props.userInfo.user_id,
          item_name: this.props.formControls.itemName,
          description: this.props.formControls.description,
          pic_url: imgURL
        };
        console.log('about to emit message');
        fetch('/api/items', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(parsedData => {
            socket.emit('addedItemFromClient', 'someone added an item! ');
            this.props.exitSell();
          }); //exits sell modal
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="overlay">
        <div className="modal">
          <button onClick={this.props.exitSell}>EXIT</button>
          <form onSubmit={this.handleSubmit}>
            <div id="itemNameInput" className="inputField">
              <input
                name="itemName"
                placeholder="itemName"
                value={this.props.formControls.itemName}
                onChange={this.props.formOnChange}
              />
            </div>
            <div className="inputField">
              <input
                name="description"
                placeholder="description"
                value={this.props.formControls.description}
                onChange={this.props.formOnChange}
              />
            </div>
            <input type="file" name="grab a file dood" ref={this.fileInput} />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddItemModal);
