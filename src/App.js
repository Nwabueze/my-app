
import './App.css';
import React from 'react';
import Activity1 from './f/Activity1';
import Activity2 from './f/Activity2';
import Section2 from './f/Section2';
import Progress from './f/Progress';


const amount = 800500;

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {buttonClicks:1};
    //this.state = { show: true, employment: "", credit: 1, rate: 1, months: 1, down: 1, approved:false, reason:""};
    
    //this.handleButton = this.handleButton.bind(this);
    //this.getDownPay = this.getDownPay.bind(this);
    //this.getProps = this.getProps.bind(this);
  }

  

  getProps = () => {
    return [this.state.credit, this.state.rate, this.state.down, this.state.months, amount];
  }

  
  handleButton = (e) =>{
    e.preventDefault();
    
    if(this.state.show){
      this.setState({show:false});
    }else{
      this.setState({show:true});
    }
    this.setState({buttonClicks: this.state.buttonClicks+1});
  }
  
  render(){
    return (
      <div className="App">
      <div className="grid fff">
        <div className="section1">
          <img className="image-option-1 dnone" src="work-1.jpg" alt="myimg"/>
          <img className="image-option-2 dnone" src="work-2.png" alt="myimg"/>
          <img className="image-option-3 dnone" src="work-3.jpg" alt="myimg"/>
        </div>
        <Section2 />
        <div className="section3">
          <Progress />
          {
            !this.state.show ?
             <Activity1 /> : 
             <Activity2 />
          }
          <div className="mt-5">
            <button className="btn-cont btn btn-lg shadow-1 bold tx20" counter={this.state.buttonClicks} onClick={this.handleButton}>Continue</button>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default App;







