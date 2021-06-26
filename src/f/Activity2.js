import React from 'react';
import Summary from '../f/Summary';
class Activity2 extends React.Component {
    
    constructor(props){
      super(props);
      this.state = {months:1};
      this.getPlans = this.getPlans.bind(this);
    }
        

    getPlans = (e) => {
      let plan = e.target.getAttribute("plan");
      this.setState({months:Number(plan)});
      //alert(plan);
    }
    render(){
      const plans = [{"type":"Aggresive", "m":1}, {"type":"Streching","m":2}, {"type":"Focused","m":3}, {"type":"Casual","m":4}, {"type":"Mild","m":5}, {"type":"gentle","m":6}];
      return (
        <div id="activity-2">
            <div className="mt-5">
              <div className="bold purple p-3 pb-3 tx20">Choose your plans</div>
              <div className="plans flex x-centered-flex gap">
                {
                  plans.map(item => {
                    return (
                      <div className="plans  border r-15 poi pt-1 pb-1 shadow-1" onClick={this.getPlans} plan={item.m} key={item.m} style={{height:"85px", width:"100px", gap:"10px"}}>
                        <div key={item.m} className="tx10 ct bold" plan={item.m}>{item.type}</div>
                        <div key={item.m} className="tx30 ct" plan={item.m} style={{fontSize:"30px"}}>{item.m}</div>
                        <div key={item.m} className="tx11 ct" plan={item.m}>{item.m > 1 ? "Months" : "Month"}</div>
                      </div>
                    )}
                  )
                }
              </div>
            </div>
            <div className="payment-br mt-5">
              <div className="bold purple tx20">Payment breakdown</div>
              <Summary months={this.state.months}/>
            </div>
        </div>
      )
    }
}

export default Activity2;