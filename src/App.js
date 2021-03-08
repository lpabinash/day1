import './App.css';
import Page1 from "./Component1";
import Page2 from "./Component2";
import Page3 from "./Component3";
import Finish from "./Finish";
import 'bootstrap/dist/css/bootstrap.min.css';
import Stepper from './Stepper/Stepper';
import React, { Component } from 'react'
// import {Link} from 'react-router-dom';
import classes from './Comp.module.css'

import Button from 'react-bootstrap/Button';

const stepsArray = [
  // "Create your account",
  "Add personal info",
  "Add Address",
  "Add Company Details",
  "Finish"
];

export class App extends Component {
  constructor() {
    super();
    this.state = {
      currentStep: 1,
      firstName:'',
      lastName:'',
      eMail:'',
      password:'',
      address1:'',
      address2:'',
      CompanyName:'',
      address:''
    };
  }
  handleClick(clickType) {
    const { currentStep } = this.state;
    let newStep = currentStep;
    clickType === "next" ? newStep++ : newStep--;

    if (newStep > 0 && newStep <= 4) {
      this.setState({
        currentStep: newStep
      });
    }
    
  }

  nextStep=()=>{
      
      this.setState({currentStep:this.state.currentStep+1})
  }
  prevStep=()=>{
    this.setState({currentStep:this.statecurrentStep-1})
}


  render() {
    // const { currentStep } = this.state;

    switch(this.state.currentStep){
      case 1:
        return(
          <div className="App">
          <div className="stepper-container-horizontal">
                <Stepper
                  direction="horizontal"
                  currentStepNumber={this.state.currentStep - 1}
                  steps={stepsArray}
                  stepColor="purple"
                />
              </div>
              <Page1
              nextStep={this.nextStep}
              />
            <div className={classes.btnContainer}>
                {/* <Button onClick={() => this.handleClick()}>Previous
                   </Button> */}
                <Button type="submit" onClick={() => this.handleClick("next")}>Next
                   </Button>
              </div>
              
          </div>
            
        );
        case 2:
          return(
            
            <div className="App">
            <div className="stepper-container-horizontal">
                  <Stepper
                    direction="horizontal"
                    currentStepNumber={this.state.currentStep - 1}
                    steps={stepsArray}
                    stepColor="purple"
                  />
                </div>
                {/* {this.state.firstName!='' && this.state.lastName!='' && this.state.eMail!='' && this.state.password!='' ? 
                <div> */}
                 <Page2
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                />
             <div className={classes.btnContainer}>
                <Button onClick={() => this.handleClick()}>Previous
                   </Button>
                <Button onClick={() => this.handleClick("next")}>Next
                   </Button>
              </div>
               
            </div>
              
          );
          case 3:
            return(
              <div className="App">
              <div className="stepper-container-horizontal">
                    <Stepper
                      direction="horizontal"
                      currentStepNumber={this.state.currentStep - 1}
                      steps={stepsArray}
                      stepColor="purple"
                    />
                  </div>
                  <Page3
                  // nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  />
               <div className={classes.btnContainer}>
                <Button onClick={() => this.handleClick()}>Previous
                   </Button>
                <Button onClick={() => this.handleClick("next")}>Finish
                   </Button>
              </div>
                  
              </div>
                
            );
            case 4:
              return(
                <div className="App">
                <div className="stepper-container-horizontal">
                      <Stepper
                        direction="horizontal"
                        currentStepNumber={this.state.currentStep - 1}
                        steps={stepsArray}
                        stepColor="purple"
                      />
                    </div>
                    <Finish
                    // nextStep={this.nextStep}
                    // prevStep={this.prevStep}
                    />
                 
                    
                </div>
                  
              );
    }
    
  }
}

export default App

