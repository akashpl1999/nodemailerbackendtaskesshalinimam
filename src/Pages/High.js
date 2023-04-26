// // import React from 'react';

// // function withHover(Component) {
// //   function WithHover(props) {


// //     const [isHovering, setIsHovering] = React.useState(false);

// //     function handleMouseEnter() {
// //       setIsHovering(true);
// //     }+

// //     function handleMouseLeave() {
// //       setIsHovering(false);
// //     }

// //     return (
// //       <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
// //         <Component {...props} isHovering={isHovering} />
// //       </div>
// //     );
// //   }

// //   return WithHover;
// // }

// // function Button(props) {
// //   const buttonStyle = {
// //     backgroundColor: props.isHovering ? 'red' : 'blue',
// //     color: 'white',
// //     padding: '10px',
// //     borderRadius: '5px',
// //     cursor: 'pointer'
// //   };

// //   return (
// //     <button style={buttonStyle}>
// //       {props.text}
// //     </button>
// //   );
// // }




// // const HoverButton = withHover(Button);

// // export default HoverButton;


// // import React, { useState } from 'react'



// //  function main(comp){

// //     function main(prop){


// //         const[ ishover,setishover]=useState(false)


// //         const handleenter=()=>{
// //             setishover(true)
// //         }

// //         const handleleave=()=>{
// //             setishover(false)
// //         }


// //          return(

// //             <div onMouseEnter={handleenter} onMouseLeave={handleleave} >

// //                 <Comp {...prop} ishover={ishover}  />


// //             </div>


// //          )

// //     }
// //     return main
// //  }


// //  function Button(props){

// //     const buttonstyle={
        
// //         backgroundColor: props.ishover ? "red" :  "blue",
// //         width:"100px",
// //         height:'200px',
// //         colore:'black'
        
// //     }

// //     return(
// //         <button style={buttonstyle}>
// //             {props.text}
// //         </button>

// //     )
// //  }

// //  const buttonhover = main(Button)

// //  export default buttonhover



// // import React, { useEffect, useState } from "react";


// // function maindata(comp){

// //     return function (props){

// //        const [islooding,setisloading]=useState(true)

// //        return(

// //         <div>
// //             <comp   {...props}  setlooding={setisloading} />
// //         </div>

// //        )


    


// // function subcomp(props) {

// //     const {setlooding}=props

// //     useEffect(()=>{

// //         setlooding(false)

// //     },[])

// //     return <div>hello world</div>
    
// // }
// //     }
// // }

// // export default maindata(subcomp)


//  import React, { useState } from "react"; 


//  function mainfun(comp){
//     return function mainfun(props){


//         const [ishover, setishover] =useState(false)

//         const mouseenter =()=>{

//             setishover(true)

//         }


//         const mouseleave=()=>{
//             setishover(false)

//         }


//         return(

//             <div onMouseEnter={mouseenter} onMouseLeave={mouseleave} >
//                 <Comp {...props}   sethoveing={setishover} />
//             </div>
//         )
//     }

//     return mainfun
//  }

//  function button(props){

//     const  buttonstyle={
//         backgroundColor:props.ishover ?"red":"blue"
//     }


//     return(
//         <button style={buttonstyle}>
//             {props.text}
//         </button>
//     )
//  }

//   const newelm=mainfun(button)

//   export default newelm