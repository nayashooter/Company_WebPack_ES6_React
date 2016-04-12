import React                from 'react';
import { Input,Glyphicon }  from 'react-bootstrap';
import Note                 from '../note/note.jsx';

class ItemEvaluation extends React.Component {

  constructor(props) {
    super(props);
    this.init();
  }

  init() {
  }

  onChangeComment(e){
    this.props.onCommentChange({comment: e.target.value,indexCritere:this.props.indexCritere,indexActivity:this.props.indexActivity});
  }

  onReferenceComment(e){
    this.props.onReferenceChange({reference: e.target.value,indexCritere:this.props.indexCritere,indexActivity:this.props.indexActivity});
  }

  render() {
    return(
      <div className="panel panel-primary-vivinter">

        <div className="panel-heading">
            <h4>{this.props.item}</h4>
        </div>

        <div className="panel-body">

          <div className="col-xs-2">
            <Note
              note={this.props.data.Note}
              onNoteChange={this.props.onNoteChange}
              indexActivity={this.props.indexActivity}
              indexCritere={this.props.indexCritere}
              />
          </div>

          <div className="col-xs-10" >

            <div className="well well-sm">
              <h4 >
                <span className="label label-warning">Référence</span>
              </h4>
              <Input
                type="textarea"
                rows="12"
                value={this.props.data.Reference}
                onChange={this.onReferenceComment.bind(this)}>
              </Input>
            </div>

            <div className="well well-sm">
              <h4>
                <span className="label label-warning">Commentaire</span>
              </h4>
              <Input
                type="textarea"
                rows="12"
                value={this.props.data.Commentaire}
                onChange={this.onChangeComment.bind(this)}>
              </Input>
            </div>

          </div>

        </div>
        
      </div>
    )
  }

}


export default ItemEvaluation;
