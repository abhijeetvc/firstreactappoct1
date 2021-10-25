import React from "react"

const message="Hello React!!!"

//function component
// function MyApp(){
//    return(
//     <div>
//       <h1>React Demo!!!</h1>
//       <p>This is React First Project</p>
//       {message}
//     </div>
//    )
// }

class MyApp extends React.Component{

    render(){
        return(
            <div>
              <h1>React Demo!!!</h1>
              <p>This is React First Project</p>
              {message}
            </div>
           )
    }
}

export default MyApp