import React     from 'react';
import ItemEvaluation   from '../../components/itemevaluation/itemevaluation.jsx';
import evaluatemodel from '../../models/evaluate.model.json';
import { Button } from 'react-bootstrap';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.init();
  }

  init() {
    this.state = {
      dataScreen: null,
      index: evaluatemodel.IndexEvaluation,
    };
  }

  clickPrecedent(e){
    var indexP = this.state.index;

    if ( indexP >= 1)
    {
      this.setState({
          index: indexP - 1
      });
    }

  }

  clickSuivant(e){
    var indexP = this.state.index;

    this.setState({
        index: indexP + 1
    });

  }

  render() {
    var items = evaluatemodel.LineData[this.state.index].DataUser.map((datum,i) => {
      return ( <div key={i} className="col-xs-3"><ItemEvaluation item={evaluatemodel.HeadColumn[i].Libelle_FR} data={datum}/></div>);
    });

    return(
      <div className="container-fluid">

        <div className="well well-sm">
          <h1>{evaluatemodel.Assureur.RaisonSociale}<span className="label label-warning pull-right">{evaluatemodel.LineData[this.state.index].Activite.Libelle_FR}</span></h1>
        </div>

        <div>
            {items}

            <div className="pull-right">
              <Button bsStyle="warning" onClick={this.clickPrecedent.bind(this)}>Précédent</Button>
              &nbsp;
              <Button bsStyle="warning" onClick={this.clickSuivant.bind(this)}>Suivant</Button>
            </div>

        </div>
      </div>
    );
  }
}

export default About;
