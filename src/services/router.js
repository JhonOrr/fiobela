import { BrowserRouter,Routes, Route} from "react-router-dom";
import Contact from '../pages/contact'
import Header from "../components/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/services"



const Router =()=>{
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path = '/' element={<Home/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path = 'about' element={<About/>}/>
                <Route path = 'services' element={<Services/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;