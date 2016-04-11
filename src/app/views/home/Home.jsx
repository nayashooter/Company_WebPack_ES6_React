import React      from 'react';
import Jumbotron  from '../../components/jumbotron/Jumbotron.jsx';
import cardmodel  from '../../models/card.model.json';
import Card       from '../../components/card/card.jsx';
import classNames from 'classnames';
import { Link }   from 'react-router';
import { Input,Glyphicon } from 'react-bootstrap';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.init();
  }

  init() {
    this.state = {
      data: null,
      filteredData: null,
    };
  }
  componentWillMount(){
    this.state = {
      data: cardmodel,
      filteredData: cardmodel,
    };
  }

  filterData(event){
    event.preventDefault();
    const regex = new RegExp(event.target.value, 'i');
      const filtered = this.state.data.filter((datum) => {
        return (datum.company.search(regex) > -1);
      });

      this.setState({
        filteredData: filtered
      });

  }

  render() {
    const { filteredData } = this.state;
    const items = filteredData.map((dataComFiltred,i) => {
      return (  <div className="col-xs-3" key={i}><Card data={dataComFiltred}/></div>);
    });
    const innerGlyphicon = <Glyphicon glyph="search" />;

    return(
      <div>
          <div className="container-fluid">
            <div className="row">
              <div className="well well-sm text-center">
                <h1>Bienvenue dans l'application d'évaluation des Assureurs</h1>
              </div>
            </div>

            <div className="row">
              <div className="panel panel-primary-vivinter">
                <div className="panel-heading">
                <Input
                  type="text"
                  onChange={this.filterData.bind(this)}
                  addonAfter={innerGlyphicon}>
                </Input>
                </div>
                <div className="panel-body">
                  { items}
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }

  _getInputValue() {
   return ReactDom.findDOMNode(this).value;
 }
}

export default Home;
