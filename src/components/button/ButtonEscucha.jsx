

const ButtonEscucha = () => {

    return <button onClick= {(event) => hazClick( event )} > Pulsar aquí </button>;

};

const hazClick = (event) => {
  
    console.log(event);
    console.log(event.screenX);

};

export default ButtonEscucha;
