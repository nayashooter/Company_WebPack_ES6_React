import React            from 'react';
import { Input,Glyphicon } from 'react-bootstrap';

class ItemEvaluation extends React.Component {

  constructor(props) {
    super(props);
    this.init();
  }

  init() {
    this.state = {
      Note: this.props.data.Note,
      Commentaire: this.props.data.Commentaire,
      Reference: this.props.data.Reference,
    }
  }

  render() {
    const styleLabel = {
      width :"100%",
    }

    return(
      <div className="panel panel-primary-vivinter">
        <div className="panel-heading">
            <h4>{this.props.item}</h4>
        </div>
        <div className="panel-body">
          <div className="col-xs-2">{this.state.Note}</div>
          <div className="col-xs-10" >

            <div className="well well-sm">
              <h4 >
                <span className="label label-warning">Référence</span>
              </h4>
              <Input
                type="textarea"
                rows="12">
                {this.state.Reference}
              </Input>
            </div>

            <div className="well well-sm">
              <h4>
                <span className="label label-warning">Commentaire</span>
              </h4>
              <Input
                type="textarea"
                rows="12">
                {this.state.Commentaire}
              </Input>
            </div>
          </div>
        </div>
      </div>
    )

  }

}


export default ItemEvaluation;
