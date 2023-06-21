
import { VscJson , VscInfo} from "react-icons/vsc";
import { BsBasket3Fill } from "react-icons/bs";
import { HiSupport } from "react-icons/hi";
import { useNavigate } from "react-router-dom"

const Home = () =>{
    const navigate = useNavigate()

    return(
        <div className="home">
            <div className="menu">

                <h1>Config VR</h1>
                <div className="btn">
                    <div onClick={()=>navigate('/getconfig')} className="item">
                        <span><VscJson/></span>
                        <p>Get Config</p>
                    </div>
                    <div className="item">
                        <span><BsBasket3Fill/></span>
                        <p>Buy Account</p>
                    </div>
                    <div className="item">
                        <span><HiSupport/></span>
                        <p>Support</p>
                    </div>
                    <div className="item">
                        <span><VscInfo/></span>
                        <p>How to work</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home