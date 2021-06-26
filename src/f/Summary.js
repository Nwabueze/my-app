
import React from "react";

const AMOUNT = 150000;
const PERC30 = 30/100;
const PERC4 = 4/100;
class Summary extends React.Component {
    constructor(props){
        super(props);
        this.state = {credit:1,down:1,monthly:1,months:1,rate:1};
        //this.getPlans = this.getPlans.bind(this);
        this.getDownPayInput = this.getDownPayInput.bind(this);
    }

    orderData = (months, down) => {
        if(down > PERC4*AMOUNT){
            let credit = AMOUNT - down;
            let interestAll = credit*PERC4*months;
            let monthlyPayable = (credit+interestAll) / months;
            this.setState({down:down, credit:credit, months:months, rate: Math.round(monthlyPayable)});
        }
        
    }

    // Get payback period
    getPayBackPeriod = (e) => {
        return !Number(e.target.value) ? 0 : Number(e.target.value);
    }

    getDownPayInput = e => {
        e.target.style.border = "1px solid red";
        let num = e.target.value;
        if(!Number(num)){
            return 1;
        }
        if(!this.isValidDownPay(num)){
            this.customAlert(`Downpayment must be greater than ${PERC30*AMOUNT}`);
            return 2;
        }
        this.setState({down:num});
        this.orderData(this.props.months,num);
        return Number(num);
    }
    customAlert = (text) => {
        let el = document.getElementById("custo-alert");
        el.style.display = "block";
        el.textContent = text;
        setTimeout(() => {
            el.style.display = "none";
            el.textContent = "";
        },1000);
    }

    isValidDownPay = (n) => {
        if(!Number(n)){
            this.customAlert("Numeric input required!");
          return false;
        }
        return Number(this.state.down) >= PERC30*AMOUNT;
    }

    handleDownPayChange(n) {
        if(!Number(n)){
            this.customAlert("Numeric input required!");
            return;
        }
        this.setState({
          down: Number(n)
        });
    }

    render(){
        return (
            
            <div className="summary">
            <div className="grid-1-1-1 centered-box shadow r-15 p-2" style={{"max-width":"600px"}}>
                <div className="p-1 align-left shadow-2">
                    <ul className="list-group">
                        <li className="list-group-item tx12 purple">Shopping Credit</li>
                        <li className="list-group-item tx12 purple">down Payment</li>
                        <li className="list-group-item tx12 purple">Monthly Installment</li>
                        <li className="list-group-item tx12 purple">Tenure</li>
                    </ul>
                </div>
                <div className="p-1 shadow-2">
                    <ul className="list-group">
                        <li className="list-group-item tx12">{this.state.credit}</li>
                        <li className="list-group-item tx12">{this.state.down}</li>
                        <li className="list-group-item tx12">{this.state.rate}</li>
                        <li className="list-group-item tx12">{this.props.months}</li>
                    </ul>
                </div>
                <div className="p-1 r-15 border b-purple shadow-1">
                    <div>
                        <div className="ct tx13 bold c-white">Customize</div>
                        <div className="ct tx13 bold c-white">Down payment</div>
                        <div className="flex centered-box mt-2" style={{width:"150px"}}>
                            <div className="center c-purple fff r-r20 r-l2" style={{width:"50px", "font-size":"25px"}}>&#8358;</div>
                            <input style={{width:"100px"}} className="form-control r-l20" onInput={this.getDownPayInput} />
                        </div>
                        <div className="mt-3"><button className="btn btn-custom tx12 bold" style={{width:"150px"}}>Update Breakdown</button></div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Summary;