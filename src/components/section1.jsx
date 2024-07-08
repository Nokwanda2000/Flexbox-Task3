function Box(){
        return (
            <div id="Section1" style={{
                display: "flex",
                alignItems:"center",
                justifyContent:"centre",
                margin:"10px",
                columnGap:"20px"
               


            }}
                
                 >
                <div id="box1"style={{
                    width: "300px",
                    height:"200px",
                    backgroundColor:"red",
                    
                    

                }}></div>

                <div id="box2" style={{ 
                     width: "200px",
                    height:"200px",
                    backgroundColor:"green",


                }}>


                </div>

                <div id="box3" style={{
                      width: "300px",
                      height:"200px",
                      backgroundColor:"red",
  

                }}></div>
                
            </div>
          
        )
}

export default Box;