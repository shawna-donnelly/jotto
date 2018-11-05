import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component{

    

    render() {
      const contents = this.props.success
      ? null 
      : (
        <form className="form-inline">
          <input data-test="input-box" className="mb-2 mx-sm-3" id="word-guess" type="text" placeholder="enter guess"/>
          <button data-test="submit-button" type="submit" className="btn btn-primary mb-2" >Submit </button>
       </form>
      );

    return(
      {contents}
    );
  }
}


const MapStateToProps = ({ success }) =>{
  return { success };
}

export default connect(MapStateToProps)(Input);