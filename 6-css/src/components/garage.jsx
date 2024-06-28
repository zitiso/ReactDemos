import Dog from "./dog"
import Cat from "./cat"

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