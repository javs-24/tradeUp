import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
const mapStateToProps = store => ({
  formControls: store.items.formControls
});

const mapDispatchToProps = dispatch => ({
  formOnChange: event => dispatch(actions.formOnChange(event))
});

function AddItemModal(props) {
  return (
    <div className="overlay">
      <div className="modal">
        <form action="">
          <div id="itemNameInput" className="inputField">
            Item:
            <input
              type="text"
              name="itemName"
              placeholder={props.formControls.itemName}
              onChange={props.formOnChange}
            />
          </div>

          <div className="inputField">
            UserID:
            <input
              type="text"
              name="userID"
              placeholder={props.formControls.userID}
              onChange={props.formOnChange}
            />
          </div>

          <div className="inputField">
            Description:
            <input
              type="text"
              name="description"
              placeholder={props.formControls.userID}
              onChange={props.formOnChange}
            />
          </div>

          {props.formControls.itemName}
          <br />
          {props.formControls.userID}
          <br />
          {props.formControls.description}
        </form>
      </div>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddItemModal);
