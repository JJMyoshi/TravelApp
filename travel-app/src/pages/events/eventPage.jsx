export default function eventPage() {

    function handleClick(){
        console.log("BUtton Clicked");   
    }

    return <div> 
        <button onClick = {handleClick}>
            Click Here To Get A message
        </button>
    </div>
}