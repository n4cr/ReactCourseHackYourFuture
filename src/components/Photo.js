/**
 * Created by nasir on 25/02/2018.
 */
import React, {Component} from 'react';

export default class Photo extends Component {

  render() {
    const photo = 'https://stroops.com/wp-content/uploads/2016/11/placeholder-profile-male-500x500.png';
    return (
        <img src={photo} alt="Nasir"/>
    );
  }
}

