import React            from 'react';
import { Glyphicon,Button }    from 'react-bootstrap';

class Note extends React.Component {

  constructor(props) {
    super(props);
    this.init();
  }

  init() {
  }

  incrementNote(){
    if ( this.props.note < 4)
    {
      var noteValue = this.props.note + 1;
      this.props.onNoteChange({note:noteValue,indexCritere:this.props.indexCritere,indexActivity:this.props.indexActivity});
    }
  }

  decrementNote(){
    if ( this.props.note > 0)
    {
      var noteValue = this.props.note - 1;
      this.props.onNoteChange({note:noteValue,indexCritere:this.props.indexCritere,indexActivity:this.props.indexActivity});
    }
  }

  render(){
    return (
      <div className="counter">
        <h1>{this.props.note}</h1>
        <div className="buttonDiv">
          <Button bsStyle="warning" bsSize="xsmall" onClick={this.decrementNote.bind(this)}><Glyphicon glyph="minus" /></Button>
          <Button bsStyle="warning" bsSize="xsmall" onClick={this.incrementNote.bind(this)}><Glyphicon glyph="plus"  /></Button>
        </div>
      </div>
    )
  }
}

export default Note;
