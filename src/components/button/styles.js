import styled from 'styled-components';

// El styled.button se refiere a un elemento html (button). Ahi se puede styled cualquier etiqueta html
const StyledButton = styled.button  `
    background-color: yellow;
    padding: 5rem;
    border-radius: 0.5rem;
    border: none;
`;

// Se llama a un estilo pasando el estilo anterior
const StyledButtonColor = styled(StyledButton) `
    background-color: ${(props => props.color)};
`;


export {StyledButton, StyledButtonColor};
