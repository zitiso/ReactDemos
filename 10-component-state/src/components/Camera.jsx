function Camera() {
    const shoot = (a, b ) => {
      alert(b.type);
    }
    // const shoot = (a) => {
    //     alert(a);
    //   }
    //  const shoot = () => {
    //     alert("Great Shot!");
    //   }
  
    return (
      <button onClick= {(event) => shoot("Goal!", event)}>Cheese!</button>
    );
    // return (
    //     <button onClick={shoot("Flash!!!")}>Cheese!</button>
    // );
    // return (
    //     <button onClick={shoot}>Cheese!</button>
    // );
    
  };
  export default Camera
