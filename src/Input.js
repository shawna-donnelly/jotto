import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component{

  render(){
    return(
    <div>
      <button />
    </div>
    );
  }
}

const MapStateToProps = (state) =>{
  return {};
}

export default connect(MapStateToProps)(Input);