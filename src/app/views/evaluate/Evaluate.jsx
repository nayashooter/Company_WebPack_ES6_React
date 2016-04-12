import React     from 'react';
import ItemEvaluation   from '../../components/itemevaluation/itemevaluation.jsx';
import evaluatemodel from '../../models/evaluate.model.json';
import { Glyphicon,Button }    from 'react-bootstrap';

class Evaluate extends React.Component {
  constructor(props) {
    super(props);
    this.indexApp = 0;
    this.indexMax = 0;
    this.init();

  }

  init() {
    this.indexApp = evaluatemodel.IndexEvaluation;
    //On récupère le nombre de critère max
    this.indexMax = evaluatemodel.LineData.length;

    console.log(  this.indexMax);

    this.state = {
      dataScreen: evaluatemodel.LineData[this.indexApp].DataUser,
      activity  : evaluatemodel.LineData[this.indexApp].Activite.Libelle_FR,
    };
  }

  clickPrecedent(e){
    this.indexApp = this.indexApp - 1;

    if ( this.indexApp >= 0)
    {
      this.setState({
          dataScreen: evaluatemodel.LineData[this.indexApp].DataUser,
          activity  : evaluatemodel.LineData[this.indexApp].Activite.Libelle_FR,
      });
    }
  }

  clickSuivant(e){
    this.indexApp  = this.indexApp + 1 ;

    this.setState({
        dataScreen: evaluatemodel.LineData[this.indexApp].DataUser,
        activity  : evaluatemodel.LineData[this.indexApp].Activite.Libelle_FR,
    });
  }

  handleCommentChange(value){
    let data = evaluatemodel.LineData[value.indexActivity].DataUser;
    data[value.indexCritere].Commentaire = value.comment;

    this.setState({
        dataScreen:data,
    });
  }

  handleReferenceChange(value){
    let data = evaluatemodel.LineData[value.indexActivity].DataUser;
    data[value.indexCritere].Reference = value.reference;

    this.setState({
        dataScreen:data,
    });
  }

  handleNoteChange(value){
    let data = evaluatemodel.LineData[value.indexActivity].DataUser;
    data[value.indexCritere].Note = value.note;

    console.dir(data);

    this.setState({
        dataScreen:data,
    });
  }

  getButtonPrec(){
    if(this.indexApp > 0){
        return (<Button bsStyle="warning" onClick={this.clickPrecedent.bind(this)}>Précédent</Button>);
    }
    else {
      return null;
    }
  }

 getButtonSuiv(){
    if(this.indexApp < 3){
        return (<Button bsStyle="warning" onClick={this.clickSuivant.bind(this)}>Suivant</Button>);
    }
    else {
      return null;
    }
  }

  render() {
    let list = this.state.dataScreen;

    var items = list.map((datum,i) => {
    return (
      <div key={i} className="col-xs-3">
        <ItemEvaluation
            item={evaluatemodel.HeadColumn[i].Libelle_FR}
            data={datum}
            onCommentChange={this.handleCommentChange.bind(this)}
            onReferenceChange={this.handleReferenceChange.bind(this)}
            onNoteChange={this.handleNoteChange.bind(this)}
            indexActivity={this.indexApp}
            indexCritere={i}
            />
      </div>
      );
    });

    return(
        <div className="container-fluid">
            <fieldset>
              <legend>
                <h2>
                  <span className="label label-warning">{evaluatemodel.Assureur.RaisonSociale} <Glyphicon glyph="random"/> {this.state.activity}</span>
                </h2>
              </legend>
            
              <div>
                  {items}
                  <div className="pull-right">
                    {this.getButtonPrec()}
                    &nbsp;
                    {this.getButtonSuiv()}
                  </div>
              </div>

            </fieldset>
        </div>
    );
  }
}

export default Evaluate;
