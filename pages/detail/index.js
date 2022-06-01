import Link from "next/link";
import { withRouter } from "next/router";
import { useEffect, useState } from "react";

// export async function getServerSideProps() {
//     let data = await JSON.parse(window.localStorage.getItem('detail')) 
//     return {
//         data
//     }
// }


function Detail(){
    const [data, setData] = useState(null)

    useEffect(() => {
        const dataDetail = JSON.parse(window.localStorage.getItem('detail'))
        setData(dataDetail) 
    }, [])

    return (<>

        {!data ? (<>
        
            loading
        
        </>) : (<>
        
            <div className="row mt-5 justify-content-center">
                <div className="col-10 mb-3">
                    <Link href="/" className="my-text fs-4 fw-bold">
                        <span className="fs-4 back fw-bold">
                            <i className="bi bi-arrow-left-square-fill"></i> Back
                        </span>
                    </Link>
                </div>
                <div className="col-10 mb-3 card my-bg border-0 shadow p-0 my-rounded">
                    <div className="col-12 card-header pt-3 my-bg">
                        <div className="col-12">
                            <span>
                                {data.question.author.avatar_url ? (<>
                                                        
                                <img src={data.question.author.avatar_url} className="rounded-circle author-avatar" alt="" /> |

                            </>) : (<></>)} <span className='fw-bold'>{data.question.author.username}</span>
                        </span>
                        </div>
                    </div>
                    <div className="card-body p-3">
                        <h2 className="card-title my my-text">
                            {data.question.content}
                        </h2>
                    </div>
                </div>
                
                <div className="col-10 mt-3">
                    <h2>Answers: </h2>
                </div>

                {data.answers.length > 0 ? (<>
                
                    {data.answers.map((ans, index) => {
                        return (
                        
                        <div key={index} className="col-9 mt-3 card my-bg border-0 shadow p-0 my-rounded">
                            <div className="card-body p-3 py-3">
                                {ans.isBest ? (<>
                                
                                    <h2 className="fw-bold fs-3"><i className="bi-patch-check-fill text-success"></i> Confirmed Answer</h2>

                                </>):(<></>)}
                                <p className="my-text">{ans.content}</p>
                                <div className="mt-3">
                                    <span> <i className="bi bi-hand-thumbs-up-fill text-blue"></i> {ans.thanksCount}</span>
                                </div>
                            </div>
                        </div>
                        
                        )
                    })}
                
                </>) : (<>
                
                
                
                
                </>)}


            </div>        
        
        </>)}


    
    </>)
}

export default withRouter(Detail)