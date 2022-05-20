import React, { useState } from 'react'; // здесь импортируем реакт и хук 

import Login from './components/Login/Login'; // ипортируем компонент логин, в которым есть инпуты и кнопка
import Home from './components/Home/Home'; // импортируем компонент хом, в котором есть логика, которая после успешной регистрации выводит текст, об успешной регистрации
import MainHeader from './components/MainHeader/MainHeader'; // импортируем компонент майнхедер, в котором есть заголовок и ссылки появляющиеся после успешной регистрации
import Authcontext from './store/Auth-context';
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // хук, который дает изначальное ложное состояние isLoggedIn

  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

let[color,setColor]=useState(false)

function click(){
  if(color===false){
    setColor(true)
  }
  if(color===true){
    setColor(false)
  }
}
console.log(color);




  return (
    <div>
      <React.Fragment>
        <div className='box' >
        <Authcontext.Provider value={{isLoggedIn: isLoggedIn, onLogout: logoutHandler, click: click, color: color,}}>
        
        <MainHeader/>
        
        <main style={{backgroundColor: ((color && 'grey')|| 'white')}}>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
        </Authcontext.Provider>
        </div>
      </React.Fragment>  
    </div>
    
  );
}

export default App;
