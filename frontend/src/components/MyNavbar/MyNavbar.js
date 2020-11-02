import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav } from 'reactstrap';
import { MyNavLink } from '../MyNavLink/MyNavLink';
import { navlinks } from "../../global";

/**
 * Makes the navbar for navigating different pages
 * of the website.
 * 
 * @return {JSX.Element} navbar.
 */
export function MyNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="light" light expand="md">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    { navlinks.map((navlink, index) => {
                        const {url, label} = navlink;
                        return (
                            <div key={index}>
                                <MyNavLink 
                                    url={url} 
                                    label={label}
                                />
                            </div>
                        );
                    })}
                </Nav>
            </Collapse>
        </Navbar>
    );
}