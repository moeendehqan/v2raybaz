
import { VscJson , VscInfo} from "react-icons/vsc";
import { BsBasket3Fill } from "react-icons/bs";
import { HiSupport } from "react-icons/hi";
const Home = () =>{
    return(
        <div className="home">
            <div className="menu">
                <div className="item">
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
    )
}


export default Home