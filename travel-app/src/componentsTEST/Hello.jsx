const name ="Rob";

function displayMessage(){
    return "WOW";
}

function Hello( {name, message }){

    // const {name, message} = props; 

    return <div>
        <h3> Hello {name} </h3> 
    </div>
}

export default Hello;