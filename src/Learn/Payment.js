// import React, { useState } from 'react'
// import StripeCheckout from 'react-stripe-checkout'



// function Payment() {


//     const [product, setProduct] = useState({

//         name: "react from FB",
//         price: "10",
//         productby: "FB"


//     })




//     const makePayment = token => {

//         const body = {
//             token,
//             product
//         }
//         const header = {
//             "COntent-Type": "application/json"
//         }
//         return fetch(`http://localhost:5000/payment`, {
//             method: "POST",
//             headers: header,
//             body: JSON.stringify(body)
//         }).then(response => {
//             console.log(response)
//         })
//             .catch(err => console.log(err))
//     }
//     return (

//         <div className="App">
//             <header className="App-header">

              
              
//                 <StripeCheckout stripeKey="pk_test_51MjHRsSIWmLnGSvPVMly6tSHuv0e9HuLM1kKa4siIWFvPJZlPaSkNJGnxO3oVu1yONbEt38xskUalmROCZrZjlQ200wjgdzTgt" token={makePayment} name="Buy react" />


//             </header>
//         </div>
//     );
// }
// export default Payment


// import react from 'react'


// class Payment extends React.Component{

//        constructor(props){

//         super(props);

//        }

//        render(){

//         return(


//             <div>





//             </div>
//         )

//        }

// }

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class Payment extends Component {

//     constructor(props) {
//         super(props);
//         this.state={
//             todos:[],
//             currenttodo:""
//         }

//     }


//     handleChange=(event)=>{
//         this.setState({currenttodo:event.target.value})

//     }

//     handleSubmit=(event)=>{
//         event.preventDefault();

//            const newtodo={
//             id:Date.now(),
//             text:this.state.currenttodo,
//             done:false

//            }

//         this.setState((prevs)=>({
//             todos:[...prevs.todos, newtodo],
//             currenttodo:'',

//         }))
        





 
//     render() {


//         return (

//                 <div onSubmit={this.handleSubmit}>

//                     <input type="text"  value={this.state.currenttodo}  onChange={this.handleChange}/>



//                    <button type='submit'> Submit </button>
                   
//                 </div>


//         );
//     }
// }


// export default Payment;




