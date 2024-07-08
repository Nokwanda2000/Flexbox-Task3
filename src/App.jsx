import Box from "./components/section1";
import Circle from "./components/section2";
import Rectangle from "./components/section3";


function App() {

return(
  <div id="container"
       style={{
          
          border: "solid 1px red",
          display: "flex", 
          flexDirection:"column",
          justifyContent:"center", 
          alignItems:"center",
          // height: "100vh",
          
          
          
          }}
>
    <section><Box/></section>


    <section><Circle/></section>


    <section><Rectangle/></section>


  </div>
)
  
;

  
}

export default App;
