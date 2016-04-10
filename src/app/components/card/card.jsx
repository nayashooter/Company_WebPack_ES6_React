import React            from 'react';
import { Link }         from 'react-router';

let icon_status_non_evalue = require('../../images/status_nonevalue.png');
let icon_status_en_cours = require('../../images/status_encours.png');
let icon_status_termine = require('../../images/status_termine.png');


class Card extends React.Component {

  constructor(props) {
    super(props);
    this.init();
  }

  init() {
    this.state = {
      data    : this.props.data
    };
  }

  /*componentWillMount() {
    this.state = {
      data    : this.props.data
    };
  }*/

  getStatus(){
    if (this.state.data.status == 'nonevalue')
      return(
          <img src={icon_status_non_evalue} />
      )

    if (this.state.data.status == 'encours')
      return(
          <img src={icon_status_en_cours} />
      )

    if (this.state.data.status == 'termine')
      return(
          <img src={icon_status_termine} />
      )
  }

  render() {
    const companylogo = {
      backgroundImage : 'url("https://placeimg.com/640/480/nature")'
    };

    const status = this.getStatus();

    return (
      <div className="card card--small">
        <div className="card__image" style={companylogo}></div>
        <h2 className="card__title">{status}{this.state.data.company}</h2><span className="card__subtitle">  {this.state.data.description}</span>
        <div className="card__action-bar">
          <div className="card__button">EVALUATE</div>
          <div className="card__button">SEE ALL</div>
        </div>
      </div>



    )
  }

}

export default Card;
