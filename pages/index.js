import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef, useState } from 'react'
import BrandComponent from '../components/BrandComponent.server'
import SearchComponent from '../components/SearchComponent.server'
import { API_URL } from '../config'

export default function Home() {
    const searchRef = useRef(null)
    const [region, setRegion] = useState('id')
    const [search, setSearch] = useState("")
    const [ans, setAns] = useState([])
    const [appState, setAppState] = useState({
        isInit : true,
        isLoading : false
    })
    const router = useRouter()

    const handleClick = useCallback((val, reg) => {
        setAppState({
            isLoading: true,
            isInit: appState.isInit
        })
        setSearch(val)
        setRegion(reg)
    }, [search, region])

    const handleClickDetail = async (data) => {
        window.localStorage.setItem('detail', JSON.stringify(data))
        router.push({
            pathname : "/detail",
        })
    }

    const handleRegionCB = useCallback((reg) => {
        setRegion(reg)
    }, [region])

    useEffect(() => {
        if(search){
            try{
                const url = `/api/brainly?q=${search}&r=${region}`
                fetch(url).then(res => res.json())
                .then(res => {
                    if(res.count == 0){
                        setAns(null)
                        window.localStorage.removeItem('initData')
                    }else{
                        setAns(res.data)
                        window.localStorage.setItem('initData',JSON.stringify(res.data))                         
                    }
                })  
            }catch{
                setAns(null)
            }
   
        }

    }, [search])

    useEffect(() => {
        setAppState({
            isInit:{
                isLoading: false,
                isInit: appState.isInit
            }
        })
    }, [ans])

    useEffect(() => {
            typeof document !== undefined ? require("bootstrap/dist/js/bootstrap") : null
            let data = JSON.parse(window.localStorage.getItem('initData'))
            setRegion(window.localStorage.getItem('initRegion'))
            setAns(data)
    }, [])


    return (<>
    
        <div className="row mt-5 justify-content-center">
            <BrandComponent />
            <SearchComponent onSubmit={handleClick} handleRegionCb={handleRegionCB} />

            <div className="col-12 col-md-9 mt-5 row justify-content-center">

                    { appState.isLoading ? (<>
                    
                        <motion.div
                            className='col-4 my-loading'
                            animate={{
                            scale: [1, 2, 2, 1, 1],
                            rotate: [0, 0, 270, 270, 0],
                            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                            }}

                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                times: [0, 0.2, 0.5, 0.8, 1],
                                repeat: Infinity,
                                repeatDelay: 1
                              }}
                        />
                    
                    </>) : (<>


                        {ans == null ? (<>
                        
                            <div className='text-center col-10'>
                                <span className='text-blue fs-2 fw-bold'>No result found!</span>
                            </div>
                        
                        </>) : (<>
                        
                        
                            {ans.map((data, index) => {
                            return (
                                    <motion.div onClick={() => {handleClickDetail(data)}} whileHover={{scale:1.1}} whileTap={{ scale:1 }} key={index} className="card row my-bg border-0 col-10 mb-5 p-0 shadow my-rounded">
                                        <div className="col-12 card-header pt-3 my-bg">
                                            <div className="col-12">
                                                {data.question.author ? (<>
                                                    <span>
                                                        {data.question.author.avatar_url ? (<>
                                                        
                                                            <img src={data.question.author.avatar_url} className="rounded-circle author-avatar" alt="" /> |

                                                        </>) : (<></>)} <span className='fw-bold'>{data.question.author.username}</span>
                                                    </span>                                                
                                                
                                                </>) : (<>
                                                
                                                
                                                    <span className='fw-bold'>Anonymous</span>
                                                
                                                
                                                </>)}

                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="mb-3">
                                                <span className='badge rounded-pill bg-blue mx-1'>{data.question.education}</span>
                                                <span className='badge rounded-pill bg-success mx-1'>{data.question.grade}</span>
                                            </div>
                                            <p className='card-title text-truncate fw-bold fs-4'>{data.question.content}</p>
                                        </div>
                                    </motion.div> 
                            )
                        })}   
                        
                        
                        </>)}

                  
                    </>) }



            </div>

        </div> 
    
    </>)

}