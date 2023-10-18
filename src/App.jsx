/* eslint-disable no-unused-vars */
import Button from './components/button/Button';
import Subtitle from './components/subtitle/Subtitle';
import Title from './components/title/Title';

import Div from './components/capa/Div';
import Parrafo from './components/textos/Parrafo';
import { StyledDiv } from './components/capa/styles';

import { GlobalStyles } from './styles/GlobalStyles';
import DivSup from './components/capa/DivSuperior';
import ButtonEscucha from './components/button/ButtonEscucha';
import { useState } from 'react';

// Arrancar npm run dev



// Estados




const App = () => {

	// Los nombres: number(estado) y set + estado. Estado SIEMPRE const, no let
	const [number, setNumber] = useState(0);
	

	console.log('render')
	
	return (
		<>


			<h1>{ number }</h1>
			<br></br>
			<br></br>
			<Button text="SUMAR" action={() => sumar(number, setNumber)} >  </Button>
			<br></br>
			<br></br>
			<Button  text="RESTAR" action={() => restar(number, setNumber)} >  </Button>
			<br></br>
			<br></br>
			<Button  text="RESETEA"  action={() => resetear( setNumber )} >  </Button>
			



		</>

	)
}




const sumar = (number, setSuma) => {
	
	setSuma
		(		
			number + 1
		);

}

const restar = (number, setResta) => {

	setResta(
		number - 1
	);
}

const resetear = (setNumber) => {
	
	setNumber(0);
	
	
}

const setNumber = (number) => {
	number = 0;
}


export default App;

