import './App.css';
import React, {useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  
  let pageSize = 12;
  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
        <Navbar/>

        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        
      />
          <Routes>
          <Route exact path="/" element = { < News setProgress= {setProgress}  key={'general'} pageSize={pageSize} country="us" category= ""/>}/>
          <Route exact path="/entertainment" element = {< News setProgress= {setProgress}  key={'entertainment'} pageSize={pageSize} country="us" category= "entertainment"/>}/>
          <Route exact path="/technology" element = {< News setProgress= {setProgress}  key={'technology'} pageSize={pageSize} country="us" category= "technology"/>}/>
          <Route exact path="/sports" element = {< News setProgress= {setProgress}  key={'sports'} pageSize={pageSize} country="us" category= "sports"/>}/>
          <Route exact path="/health" element = {< News setProgress= {setProgress}  key={'health'} pageSize={pageSize} country="us" category= "health"/>}/>
          <Route exact path="/science" element = {< News setProgress= {setProgress}  key={'science'} pageSize={pageSize} country="us" category= "science"/>}/>
          <Route exact path="/business" element={ < News setProgress= {setProgress}  key={'business'} pageSize={pageSize} country="us" category= "business"/>}/>
          <Route exact path="/general" element={ < News setProgress= {setProgress}  key={'general'} pageSize={pageSize} country="us" category= "general"/>}/>
        
        </Routes>
        </Router>
      </div>
    )
}
export default App