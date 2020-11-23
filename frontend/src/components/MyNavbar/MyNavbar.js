import React, { useState } from 'react';
import { 
    Collapse, 
    Navbar, 
    NavbarToggler, 
    Nav, 
    NavItem, 
    NavLink, 
    NavbarBrand 
} from 'reactstrap';
import { navlinks } from "../../global";

/**
 * Makes the navbar for navigating different pages
 * of the website.
 * 
 * @return {JSX.Element} navbar.
 */
export default function MyNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="light" light expand="md">
            
            <NavbarBrand href="/">Stock Predictor</NavbarBrand>
            <NavbarToggler onClick={toggle} />

            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    { navlinks.map((navlink, index) => {
                        const {url, label} = navlink;
                        return (
                            <div key={index}>
                                <NavItem>
                                    <NavLink href={url}>
                                        {label}
                                    </NavLink>
                                </NavItem>
                            </div>
                        );
                    })}
                </Nav>
            </Collapse>

        </Navbar>
    );
}