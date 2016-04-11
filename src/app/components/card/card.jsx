import React            from 'react';
import { Link }         from 'react-router';

let icon_status_non_evalue = require('../../images/status_nonevalue.png');
let icon_status_en_cours   = require('../../images/status_encours.png');
let icon_status_termine    = require('../../images/status_termine.png');

const iconsMap =
{
  'AXA' : require('../../images/logo/Axa.png'),
  'AG2R': require('../../images/logo/AG2R.png'),
  'GAN' : require('../../images/logo/GAN.jpg'),
  "ALLIANZ" : require('../../images/logo/ALLIANZ.png'),
  "CNP" : require('../../images/logo/CNP.png'),
  "ACE" : require('../../images/logo/ACE.png'),
  "CHARTIS" : require('../../images/logo/CHARTIS.png'),
};

class Card extends React.Component {

  constructor(props) {
    super(props);
    this.init();
  }

  init() {
  }

  getStatus(){
    if (this.props.data.status == 'nonevalue')
      return(
          <img src={icon_status_non_evalue} />
      )

    if (this.props.data.status == 'encours')
      return(
          <img src={icon_status_en_cours} />
      )

    if (this.props.data.status == 'termine')
      return(
          <img src={icon_status_termine} />
      )
  }

  render() {
    const companylogo = {
      backgroundImage : 'url(' + iconsMap[this.props.data.logo] + ')',
      backgroundSize: 'cover',
      //backgroundPosition: 'center',
    };

    const status = this.getStatus();

    return (
      <div className="card card--small">
        <div className="card__image" style={companylogo}></div>
        <h2 className="card__title">{status}{this.props.data.company}</h2><span className="card__subtitle">  {this.props.data.description}</span>
        <div className="card__action-bar">
          <div className="card__button">
            <Link to="/evaluate" >
              EVALUATE
            </Link></div>
          <div className="card__button">
            <Link to="/report" >
              EVALUATE
            </Link>
          </div>
        </div>
      </div>

    )
  }

}

export default Card;
