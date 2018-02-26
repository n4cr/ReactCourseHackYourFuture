/**
 * Created by nasir on 25/02/2018.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../App.css';
export default class ReferenceItem extends Component {

  static propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    number: PropTypes.string,
    bold: PropTypes.bool,
    buttonClicked: PropTypes.func,
  }
  render() {
    console.log(this.props);
    const name = this.props.name;
    const imageUrl = this.props.imageUrl;
    const number = this.props.number;
    const bold = this.props.bold;
    const button = (
        <button
            onClick={() => this.props.buttonClicked(name)}>
          ClickMe</button>
    );
    return (
        <li className={bold && "boldStyle"}>
          <img alt={name} width={20} height={20} src={imageUrl}/> {name}
          {number} {button}
        </li>
    )
  }
}

