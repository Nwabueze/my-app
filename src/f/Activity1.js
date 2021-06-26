

import React from "react";
class Activity1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {down:1, employment:"&nbsp;", payDate:"", loneStatus:"", salary:0,holder: this.props.holder};
  }
  
  
  workStatus = [
    {"type": "Paid Employment", "img": "work-1.jpg"}, 
    {"type": "Self Employed/Freelance", "img": "work-2.png"}, 
    {"type": "Corporate Organization", "img": "work-3.jpg"}
  ];

  // Initialize authentication params
  holder = {"employment_status": false, "salary_date": false, "salary_amount": false, "loan_status": false, "id": false};

  handleEmploymentStatus = (e) => {
    let work = e.target.getAttribute("work");
    this.holder["employment_status"] = work;
    this.setState({work:work,holder:this.holder});
  }

  
  getSalary = (e) => {
    let num = e.target.value;
    if(!Number(num)){
      return 1;
    }else{
      this.holder["salary_amount"] = num;
      this.setState({salary:num, holder:this.holder});
    }
  }

  getPayDate = (e) => {
    let d = e.target.value;
    if(!d){
      return 0;
    }
    this.holder["salary_date"] = d;
    this.setState({payDate:d, holder:this.holder});
    return d;
  }
  
  getOngoingLone = (e) => {
    let lone = e.target.getAttribute("lone");
    this.holder["loan_status"] = lone;
    this.setState({loneStatus:lone,holder:this.holder});
  }

  render(){
    return (
      <div id="acivity-1">
            <div className="c-purple bold ct pt-5 tx20">What do you do?</div>
            <div className="work-status-container flex x-centered-flex mt-2">
              {
                this.workStatus.map(stat => {
                  let i = 0;
                  i++;
                  return(
                    <div className="work-status rounded shadow-4" title={stat.type}>
                      <div className="work-tb-img shadow-4" title={stat.type} key={i} tab={i} onClick={this.handleEmploymentStatus}>
                        <img className="tb-img poi" title={stat.type} key={i+100} src={stat.img} alt={stat.type} work={i}/>
                      </div>
                      <div className="work-status-txt overflow-hide tx12 bold pt-1">{stat.type}</div>
                    </div>
                  )
                })
              }
            </div>
            <div style={{maxWidth:"300px"}} className="salary-info centered-box mt-4">
              <div>
                <div className="p-1 purple align-left bold">How much do you get paid monthly?</div>
                <div className="f">
                  <div class="input-group flex-nowrap shadow-3">
                    <span style={{borderTopRightRadius:"0px",borderBottomRightRadius:"0px",backgroundColor:"purple",color:"white"}} className="input-group-text" id="basic-addon1">&#8358;</span>
                    <input onBlur={this.getSalary} style={{borderTopLeftRadius:"0px",borderBottomRightRadius:"0px"}} type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
                </div>
              </div>

              <div className="mt-2">
                <div className="p-1 purple align-left bold">When is your next salary date?</div>
                <div className="f">
                  <input onChange={this.getPayDate} type="date" className="form-control shadow-3" />
                </div>
              </div>
              
              <div className="pt-2">
                <div className="p-1 purple align-left bold">Do you have any existing loan(s)?</div>
                <div className="flex p-2 shadow-3">
                  <div class="form-check w50">
                    <input onClick={this.getOngoingLone} answer="Yes" style={{transform:"scale(1.5)"}} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label" for="flexRadioDefault1 bold c-purple"> &nbsp;Yes</label>
                  </div>
                  <div className="form-check w50 border-left rounded">
                    <input onClick={this.getOngoingLone} answer="No" style={{transform:"scale(1.5)"}} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label className="form-check-label" for="flexRadioDefault2 bold c-purple"> &nbsp;No</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
  }
  
}

export default Activity1;
// 4a2977bf-c387-4467-bf48-b5dfb2bd0b90
//ewwdogrt