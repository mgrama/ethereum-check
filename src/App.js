import React, { Component } from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import './App.css';

import {typeIn, check, resetSuccess} from './actions/input';


class Eth extends Component {

handleChange = (event) => {
  this.props.typeIn(event.target.value)
}

handleClickCheck = (event) => {
  event && event.preventDefault();
  this.props.check();
}

handleClickOk = () => {
  this.props.resetSuccess();
}

renderFailure = () => {
  if (this.props.failure) {
    return <div className="Tip">Invalid address</div>
  }
  return <div className="Tip" />;
}

renderSuccess = () => {
  return (
    <div className={classnames({'Popup__hidden': !this.props.success, 'Popup': this.props.success})}>
      <p className="Popup--content">Correct address!</p>
      <button className="Popup--button" onClick={this.handleClickOk}>OK</button>
    </div>
  );
}

  render() {
    return <div className="Container">
      {this.renderSuccess()}
      <form>
        {this.renderFailure()}
        <input
          value={this.props.input}
          onChange={this.handleChange}
          style={{
            width: '300px',
            height: '30px',
            borderColor: 'black',
            marginRight: '10px',
            borderRadius: '3px'
          }}
        />
        <button
          onClick={this.handleClickCheck}
          style={{
            display: 'inline-block',
            width: '60px',
            padding: '10px'
          }}
        >
          Далее
        </button>
      </form>
    </div>
  }
}

const mapStateToProps = (state) => ({
  input: state.input.input,
  failure: state.input.failure,
  success: state.input.success
});

const mapDispatchToProps = {typeIn, check, resetSuccess};

export default connect(mapStateToProps, mapDispatchToProps)(Eth);
