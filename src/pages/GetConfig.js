import axios from "axios"
import { useEffect, useState } from "react"
import { OnRun } from "../config/OnRun"




const GetConfig = () =>{
    const [id , setId] = useState('')

    const [config,setConfig] = useState({ir:'',mc:'',wf:''})



    const handle = () =>{
        axios.post(OnRun+'/getconfig',{id:id})
        .then(response=>{
            if(response.data.replay){
                setConfig(response.data.config)
            }
        })
    }


    useEffect(handle,[id])

    return(
        <div className="sub">
            <div className="box">
                <h1>Get Config</h1>
                <div className="tools">
                    <input value={id} onChange={(e)=>setId(e.target.value)} placeholder="Please enter ID" />
                    <div className="configs">
                        <div className="config">
                            <h6>ir</h6>
                            <input disabled value={config.ir} />
                            <button>copy</button>
                        </div>
                        <div className="config">
                            <h6>mc</h6>
                            <input disabled value={config.mc} />
                            <button>copy</button>
                        </div>
                        <div className="config">
                            <h6>wf</h6>
                            <input disabled value={config.wf} />
                            <button>copy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default GetConfig