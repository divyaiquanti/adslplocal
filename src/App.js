import React from 'react';
import axios from 'axios'

import loadable from '@loadable/component'


const Home = loadable(() => import('./components/Home'))
// import Home from './components/Home'
const Calculation = loadable(() => import('./components/Calculation'))
// import Calculation from './components/Calculation';
const Faq = loadable(() => import('./components/Faq'))
// import Faq from './components/Faq';

/*if(window.location.hostname === "localhost"){
  axios.defaults.baseURL = window.location.protocol+"//"+window.location.hostname+"/comenity-website/control/";
}
else{*/
  axios.defaults.baseURL = window.location.protocol+"//"+window.location.hostname+window.location.pathname+"control/";
/*}*/

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      header:[],
      cookie_data:[],
      main_data:[],
      main_benefits:[],
      calculation:[],
      calculation_fields:[],
      faq:[],
      benefits:[],
      terms:[],
      footer:[],
      isdata:0,
    }
  }

   componentDidMount(){
     axios.get('content.php?file=Data').then((response)=>{
      this.setState({
        header:response.data.header,
        cookie_data: response.data.cookie_data,
        main_data: response.data.main_section,
        main_benefits: response.data.main_benefits,
        calculation: response.data.calculation,
        calculation_fields:response.data.calculation_fields,
        faq:response.data.faq,
        benefits: response.data.benefits,
        terms:response.data.terms,
        footer : response.data.footer,
        isdata:1
      })

      // BOOTSTRAP
      let bootstrap = document.createElement('script')
      bootstrap.setAttribute('src', 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js');
      document.body.appendChild(bootstrap);

    });
  }

  render(){
    return (
      <div className="App">
      {
        this.state.isdata !== 0 ?
        <React.Fragment>
          <Home header = { this.state.header } cookiedata={this.state.cookie_data} maindata = {this.state.main_data}  divdata = {this.state.main_data} logolink={this.state.header.logo_link} mainbenefits = {this.state.main_benefits} />
          <Calculation calculation = {this.state.calculation} fields = {this.state.calculation_fields} />
          <Faq faq = {this.state.faq} benefits = {this.state.benefits} terms = {this.state.terms} footer = {this.state.footer}  />
        </React.Fragment>
        : null
      }
      </div>
    );
  }
  
}

export default App;
