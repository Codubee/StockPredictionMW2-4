import React, { useState } from "react";
import { 
    Form, 
    FormGroup, 
    Input, 
    InputGroup, 
    InputGroupAddon, 
    Button 
} from "reactstrap";
import "./CompanyInput.css";

export default function CompanyInput() {

    const [companyName, setCompanyName] = useState("");

    return (
        <Form id="company-form">
            <FormGroup>
                <InputGroup>
                    <Input 
                        placeholder="Enter company name" 
                        onChange={(event) => setCompanyName(event.target.value)} 
                        value={companyName} 
                    />
                    <InputGroupAddon addonType="append">
                        <Button>Enter</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    );
}