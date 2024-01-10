import React from 'react'
import './App.css'

import logoGray from './assets/images/logo-gray.png'
import logoGreen from './assets/images/logo-green.png'

class App extends React.Component{

constructor(props){

  super(props)


// Le state est obligatoirement un objet
// création du state
// Chaque propriété du state est relié à setState
// Chaque propriété du state correspond à un useState
  this.state = {
  isDark: false,
  }
}


handleClick=()=>{
  console.log(this)
  const {isDark}=this.state
  this.setState({
    isDark: !isDark
  })
}


//Applé au montage du composant(juste après)
// equivalent du  useEffect(()=>{},[])

componentDidMount(){
console.log("Mounted!")
document.title="Welcome"

}

// Au changement du state, afficher un title de document "mode dark" ou "light mode"
// document.title= {isDark ? "Dark ode" : "light mode"}

componentDidUpdate() {

  // Appelé juste après la modification du state
  // Equivalent de useEffect callback et useEffect callback [dependance]
  console.log("Updated !");
  const {isDark} = this.state;
  document.title = isDark ? "Dark Mode":"Light mode"
}


render() {
  const { isDark } = this.state;
  return (
    <div className={isDark?"App darkMode":"App"}>
      <header>
        <h1>{isDark ? "O'dark" : "O'light"}</h1>
        {!isDark && <img src={logoGray} alt='logo gray' />}
        {isDark && <LogoGreen />}
      </header>
      <main>
        <button onClick={this.handleClick} type='button'>
        {isDark? "Light Mode" : "Dark Mode"}</button>
      </main>
    </div>
  );
}
}


// import { useState, useEffect } from "react";
// import "./App.css";

// import logoGray from "./assets/logo-gray.png";
// import LogoGreen from "./LogoGreen";

// const App = () => {
//   const [isDark, setIsDark] = useState(false);
//   const [clicked, setClicked] = useState(false);

//   const handleClick = () => {
//     setIsDark(!isDark);
//     setClicked(true);
//   };

//   useEffect(() => {
//     document.title = "Welcome";
//   }, []);

//   useEffect(() => {
//     if (clicked) document.title = isDark ? "Dark Mode" : "Light Mode";
//   }, [isDark]);

//   return (
//     <div className={isDark ? "App darkMode" : "App"}>
//       <header>
//         <h1>{isDark ? "O'dark" : "O'light"}</h1>
//         {!isDark && <img src={logoGray} alt='logo gray' />}
//         {isDark && <LogoGreen />}
//       </header>
//       <main>
//         <button onClick={handleClick} type='button'>
//           {isDark ? "Light Mode" : "Dark Mode"}
//         </button>
//       </main>
//     </div>
//   );
// };




export default App;

