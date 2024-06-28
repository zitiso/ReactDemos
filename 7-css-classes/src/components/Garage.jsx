import Dog from "./Dog"
import Cat from "./Cat"

function Garage() {
    const catName = "Panda"
    
    return (
      <>
        <h1>Who lives in my Garage?</h1>
        <Dog />
        <Cat name={catName} />
      </>
    );
  };

export default Garage