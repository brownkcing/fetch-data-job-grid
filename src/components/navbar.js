import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.div`
    display:flex;
    background: #372988;
`;

const NavText = styled.div`
    display:flex;
    margin: 0 2em;
    color: white;
    a {
        color: white;
        align-self: center;
    }
`;

function Navbar() {
    return (
        <div>
            <NavWrapper>
                <NavText>
                    <h3>We are now hosting events with Zoom Webinars! </h3>
                </NavText>
                <NavText>
                    <a href="#">Find out more</a>
                </NavText>
            </NavWrapper>
        </div>
    )
}

export default Navbar;