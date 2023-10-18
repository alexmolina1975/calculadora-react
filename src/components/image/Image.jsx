import { StyledImage } from "./styles";


const Image = ({ruta}) => {

    
    return <StyledImage src={`/public/${ruta}`} />;
}

export default Image;