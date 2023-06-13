import {useParams, useHistory} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './style.scss'

const DetailBlog = () => {

    const [dataDetail, setDataDetail] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    

    let {id} = useParams();

    let history = useHistory();

    const handleBackData = () => {
        history.push('/blog')
    }

    useEffect(() => {
        axios
          .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then((res) => { 
            let data = res && res.data ? res.data : []
    
            setDataDetail(data)
            setIsLoading(false);
          })
          .catch((error) => {
            console.error(error);
          });
      }, [id]);
    return (
        <>
            <div><span onClick = {handleBackData} style={{cursor: 'pointer'}}>&lt;-- Back</span> </div>
            <div className='detail-container'>
                {isLoading === false &&dataDetail &&  
                        <>
                            <h1 className='title'>{dataDetail.title}</h1>
                            <p className='body'>{dataDetail.body}</p>
                        </>
                }

            </div>
            {isLoading === true && 
                <div>
                    <h2>Loading Data ...</h2>
                </div>
            }
        </>
    )
}

export default DetailBlog;