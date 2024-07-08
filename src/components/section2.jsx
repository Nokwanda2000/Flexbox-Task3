function Circle(){
return(
    <div id="mainC" style={{ 
        display: "flex",
        alignItems:"center",
        justifyContent:"centre",
        margin:"10px",
        columnGap:"20px"
       

    }}>
        <div id="square1" style={{
            width:"200px",
            height:"300px",
            backgroundColor:"purple",
            marginRight:"100px",
            

        }}>

        </div>

        <div id="circle" style={{
            width:"200px",
            height: "200px",
            borderRadius:"50%",
            backgroundColor:"blue",
            

        }}>

        </div>


        <div id="square2" style={{
           width:"200px",
           height:"300px",
           backgroundColor:"purple",
           marginLeft:"100px",


        }}>

        </div>
    </div>

)
}
export default Circle;