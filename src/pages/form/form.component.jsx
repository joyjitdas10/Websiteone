import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap';
import './form.style.css';


class  ValidationForm extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            // email:'',
            // fullname:'',
            // mobile:'',
            input:{
                email:'',
                fullname:'',
                mobile:''
            },
            errors:{}
        };

    }

handlechangeall = (event) =>{
    // this.setState ( { [event.target.name] :event.target.value  } )
    let input= this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
        input
    })
   }

   handlesubmit = (event) => {
    // alert (` 
    //   email id is ${this.state.email}
    //   fullname is ${this.state.fullname}
    //   mobile is ${this.state.mobile}
    //  `);
    // alert( JSON.stringify(this.state));
    // console.log( JSON.stringify(this.state));
    event.preventDefault();


    if(this.validate()){
        console.log(this.state);
        let input = {};
        input["fullname"] = "";
        input["mobile"] = "";
        input["email"] = "";
        this.setState({input:input});

        alert('Form is Submitted');
    }
   }

   validate(){
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["fullname"]) {
      isValid = false;
      errors["fullname"] = "Please enter your name.";
    }
    if (typeof input["fullname"] !== "undefined") {
    
        var newname = new RegExp(/^([a-zA-Z ]){2,30}$/);
        if(!newname.test(input["fullname"])){
        isValid = false;
        errors["fullname"] = "Please enter your name correctly.";
        }
      
    }
    




    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }
    if (typeof input["email"] !== "undefined") {
        
      var pattern = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/);
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }



    if(!input["mobile"]){
        isValid = false;
        errors["mobile"] = "please enter your mobile number"

    }
    if (typeof input["mobile"] !== "undefined") {
    
        var number = new RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/);
        if(!number.test(input["mobile"])){
        isValid = false;
        errors["mobile"] = "Please enter your valid mobile number.";
        }
      
    }

    this.setState({
      errors: errors
    });

    return isValid;


   }




render(){
    console.log(this.state)
    return (
        <div className='forum'>
                            <Form onSubmit={this.handlesubmit}>
                                    
                                    <Form.Group controlId="formBasicName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="" placeholder="Enter Your Name" 
                                        name="fullname"
                                        value={this.state.input.fullname}
                                        onChange={this.handlechangeall}
                                        />
                                        <div className="text-danger">{this.state.errors.fullname}</div>
                        
                                     </Form.Group>        
                                        
                            
                            
                                    <Form.Group controlId="formBasicMobile">
                                        <Form.Label>Mobile Number</Form.Label>
                                        <Form.Control type="tel" placeholder="Enter Your Mobile Number" 
                                        name="mobile"
                                        value={this.state.input.mobile}
                                        onChange={this.handlechangeall}
                                         />
                                         <div className="text-danger">{this.state.errors.mobile}</div>
                                        <Form.Text className="text-muted">
                                        We'll never share your mobile number with anyone else.
                                        </Form.Text>

                                    </Form.Group>
                                   
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label >Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Your Email" 
                                    name="email"
                                    value={this.state.input.email}
                                    onChange={this.handlechangeall}
                                     />
                                     <div className="text-danger">{this.state.errors.email}</div>

                                     <Form.Text className="text-muted">

                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Button variant="primary" type="submit" value="send" > 
                                     Submit
                                </Button>
                             </Form>
        </div>
    );
}
}

export default ValidationForm;
