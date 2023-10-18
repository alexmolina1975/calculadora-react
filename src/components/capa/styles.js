import styled from 'styled-components';

const StyledDiv = styled.div  `
    height: 250px;
    width: 350px;
    position : absolute;
    border-radius: 5px;
    box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.2);
    border-top-width: 3px;
    border-top-style: solid;
    border-top-color: ${(props => props.shadowcolor)};
    left: ${(props => props.left)}px;
    top: ${(props => props.top)}px;
`;

const StyledDivSup = styled.div  `
    height: 168px;
    width: 540px;
    position : absolute;
    border:1px solid black;
    left: ${(props => props.left)}px;
    top: ${(props => props.top)}px;
`;


export {StyledDiv , StyledDivSup};