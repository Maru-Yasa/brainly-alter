import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function SearchComponent({ref, onSubmit, handleRegionCb}){
    const inputRef = useRef(null)
    const regionRef = useRef(null)
    const [region, setRegion] = useState('id')

    const handleClick = () => {
        onSubmit(inputRef.current.value, region)
    }

    const handleRegion = (e) => {
        const region = e.nativeEvent.target.value
        setRegion(region.toLowerCase())
        window.localStorage.setItem('initRegion', region)
    }

    useEffect(() => {
        const reg = window.localStorage.getItem('initRegion')
        if(reg){
            setRegion(reg)
        }
    }, [region])

    return (

        <div className="col-10 col-lg-6 mb-5">
            <div className="input-group shadow mb-3 my-rounded">
                <div className="input-group-append">

                    <div className="dropdown">
                        <button className="btn btn-outline-blue btn-lg dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            {region.toUpperCase()}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><button value="ID" onClick={handleRegion}  className="dropdown-item">ID</button></li>
                            <li><button value="US" onClick={handleRegion}  className="dropdown-item">US</button></li>
                            <li><button value="PH" onClick={handleRegion}  className="dropdown-item">PH</button></li>
                            <li><button value="HI" onClick={handleRegion}  className="dropdown-item">HI</button></li>
                        </ul>
                    </div>

                </div>
                <input type="text" placeholder="Your question here" ref={inputRef} className="form-control form-control-lg" />
                <div className="input-group-append">
                    <motion.button onClick={handleClick} whileTap={{scale:0.7}} className="btn btn-blue btn-lg" type="button"><i className="bi bi-search"></i></motion.button>
                </div>
            </div>
        </div>
        
    )
}