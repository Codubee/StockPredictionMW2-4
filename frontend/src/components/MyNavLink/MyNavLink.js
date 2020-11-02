import React from "react";
import { NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';

/**
 * Makes this link in the navbar.
 * 
 * @param {any} props Properties given to this link.
 * @return {JSX.Element} Link in the navbar.
 */
export function MyNavLink(props) {
    const { url, label } = props;
    return (
        <NavItem>
            <NavLink href={url}>
                {label}
            </NavLink>
        </NavItem>
    )
}

// List of properties passed to this component
MyNavLink.propTypes = {
    label: PropTypes.string.isRequired, // Label for this link
    url: PropTypes.string.isRequired // Url to go to when clicked
}