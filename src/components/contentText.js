import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
    display: block;
    justify-content: center;
    max-width: 100vw;
    margin: 2em 2em;
    `;

const TextTitle = styled.div`
    margin: 2em 5em;
`;

function Title() {
    return (
        <React.Fragment>
            <TitleWrapper>
                <TextTitle>
                    <h1>
                        Latest News
                    </h1>
                </TextTitle>
                <TextTitle>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                </TextTitle>
            </TitleWrapper>
        </React.Fragment>
    )
}

export default Title;
