import React, { Component } from "react";
import { 
    Form, 
    FormGroup, 
    Input, 
    InputGroup, 
    InputGroupAddon, 
    Button 
} from "reactstrap";
import "./CompanyInput.css";

export default class CompanyInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            companyName: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // route the user to the information component with the company name they input
    handleSubmit (){ this.props.history.push("/information/"+this.state.companyName);}

    render() {
        return (
            <Form id="company-form" onSubmit={this.handleSubmit}>
                <FormGroup>
                    <InputGroup>
                        <Input 
                            placeholder="Enter company name" 
                            onChange={(event) => 
                                this.setState({
                                    companyName: event.target.value
                            })} 
                            value={this.state.companyName} 
                        />
                        <InputGroupAddon addonType="append">
                            <Button>Enter</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </FormGroup>
            </Form>
        );
    }
}