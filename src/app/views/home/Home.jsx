import React      from 'react';
import Jumbotron  from '../../components/jumbotron/Jumbotron.jsx';
import cardmodel  from '../../models/card.model.json';
import Card       from '../../components/card/card.jsx';
import classNames from 'classnames';
import { Link }   from 'react-router';
import Immutable  from 'immutable';
import { Input } from 'react-bootstrap';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.init();
  }

  init() {
    this.state = {
      //data: cardmodel,
      filtre: ''
    };
  }

  componentWillMount() {
    this.state = {
      data: cardmodel,
      filteredData: cardmodel,
      filteredValue:this.state.filtre,
    };
  }

filterData(event){
  event.preventDefault();
  let value = event.target.value;
  this.state.filteredValue = value;
  /*const filtered = [];
  const dataS = this.state.data;
  let value = event.target.value;

  dataS.forEach(function(item){
    if(item.company.toLowerCase().indexOf(value)!=-1)
    {
      filtered.push(item);
    }
  });

  this.state.filteredData = filtered;*/
  this.forceUpdate();
}

  render() {
    const filteredData = this.state.filteredData;
    const filte = this.state.filteredValue;
    const prettyRows   = filteredData
                         .filter(function(key){
                           return key && key.company.toLowerCase().indexOf(filte) != -1;
                         })
                         .map(function(dataCompany,i) {
      return (
        <div className="col-xs-3"><Card data={dataCompany} key={i} /></div>
      );
    });

    return(
      <div>
          <div className="container-fluid">
            <div className="row">
              <div className="well well-sm text-center">
                <h1>Bienvenue dans l'application d'évaluation des Assureurs</h1>
              </div>
            </div>

            <div className="row">
              <div className="panel panel-default">
                <div className="panel-heading">
                <h3 className="panel-title">Panel title</h3>
                <Input
                  type="text"
                  value={this.state.filtre}
                  onChange={this.filterData.bind(this)}
                  ref="input"/>
                </div>
                <div className="panel-body">
                { prettyRows}
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Home;
