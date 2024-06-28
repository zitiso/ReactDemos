// import Dog from "./Dog"
import Cat from "./Cat"

function Garage() {
  const cats = [
    {id: 1, breed: 'Siamese'}, 
    {id: 2, breed:'Persian'},
    {id: 3, breed: 'Birman'}
  ];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cats.map((cat) => <Cat sound={cat.id} breed={cat.breed} />)}
        
      </ul>
    </>
  );
}

// function Garage() {
//   const cats = ['Siamese', 'Persian', 'Birman'];
//   return (
//     <>
//       <h1>Who lives in my garage?</h1>
//       <ul>
//         {cats.map((cat) => <Cat breed={cat} />)}
//       </ul>
//     </>
//   );
// }

export default Garage