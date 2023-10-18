/* eslint-disable no-unused-vars */
import Parrafo from "../textos/Parrafo";
import ParrafoSup from "../textos/ParrafoSup";
import Title from "../title/Title";
import TitleSup from "../title/TitleSup";
import { StyledDivSup } from "./styles";



const DivSup = ({textP, textT,  left, top}) => {

    return <StyledDivSup  left={left} top={top}>
                <TitleSup text={textT}></TitleSup>
                <ParrafoSup text={textP}></ParrafoSup>            
            </StyledDivSup>;

}

export default DivSup;