function Rectangle(){
    return(
        <div id="Rect" style={{
            display: "flex",
            alignItems:"center",
            justifyContent:"centre",
            margin:"10px",
            columnGap:"20px"
            

        }}>
            <div id="Rect1"style={{
                   width: "300px",
                   height:"200px",
                   backgroundColor:"red",


            }}></div>

            <div id="Rect2"style={{
                 width: "200px",
                 height:"200px",
                 backgroundColor:"green",


            }}></div>

            <div id="Rect3"style={{
                   width: "300px",
                   height:"200px",
                   backgroundColor:"red",


            }}></div>
        </div>
        
    )
}
export default Rectangle;