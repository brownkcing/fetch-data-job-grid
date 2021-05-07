import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import images from '../img/image';

const GridWrapper = styled.div`
    margin: 2em 4em;
`;

const GridData = styled.div`
    display: flex;
    justify-content:center;
    flex-wrap: wrap;
`;

const BoxWrapper = styled.div`
    cursor: pointer;
    width: 300px;
    height: 400px;
    margin: 1em 1em;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 10px 30px 0 rgb(0 0 0 / 10%);
    text-overflow: ellipsis;
    &:hover {
        transform: scale(1.05);
    }
`;

const BoxItem = styled.div`
    margin: 0 1em;
    text-align:left;
    p {
        color: grey;
    }
    a {
        text-decoration: none;
    }
`;

const ImageItem = styled.img`
    max-width:300px;
`;

const truncate = str => {
    return str.length > 35 ? str.substring(0, 35) + "..." : str;
}
// const images12 = images.map(rndImg => [Math.floor(Math.random() * rndImg.length)]);


const Data = () => {
    const [state, setState] = useState([])
    useEffect(() => {
        const apiUrl = `https://jsonplaceholder.typicode.com/posts`;
            fetch(apiUrl)
                .then((res) => res.json())
                .then((data) => {
                setState(data);
        })
    }, [setState]);
    return (
        <GridWrapper>
            <GridData>
                    {state.slice(0, 9).map(item => 
                        <BoxWrapper>
                            {images.slice(0, 1).map(({id, src, title, description}) => 
                                <ImageItem key={2} src={src} title={title} alt={description} />)}
                            <BoxItem key={item.id}> 
                                <h3	data-type="light" data-tip={item.title}>{truncate(item.title)}</h3>
                                <p data-type="info" data-tip={item.body} data-multiline="true">{truncate(item.body)}</p>
                                <a href="#">Read more</a>
                            </BoxItem>
                        </BoxWrapper>
                    )}
            </GridData>
            <ReactTooltip />
        </GridWrapper>
    )
};

export default Data;