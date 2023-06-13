import './style.scss';
import { useState } from 'react';
import axios from 'axios';

const AddNewBlog =  (props) => {

    const {handleAddBlog} = props
    const [title, setTitle] = useState('');
    const [describe, setDescribe] = useState('')

    const handleSubmitForm = async (e) => {
        e.preventDefault()

        //!title: null, undifile, ''
        if(!title ) {
            alert('empty title');
            return;
        }

        if(!describe ) {
            alert('empty describe');
            return;
        } 

        let data = {
            title: title,
            body: describe,
            userId: 1,
        }        
            
        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data);

        if(res && res.data){
            let newBlog = res.data;
            handleAddBlog(newBlog)
        }


    
    }
    return (
        <div className="add-new-container">
            <h2 className="title">Add new Blog</h2>
            <form className="form" onSubmit={handleSubmitForm}>

                <div className='input-data'>
                    <label>Title: </label>
                    <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>

                <div className='input-data'>
                    <label>Describe: </label>
                    <input type='text' value={describe} onChange={(e) => setDescribe(e.target.value)}/>
                </div>

                <button type='submit' className='btn-add-new'>Submit</button>

                
            </form>
        </div>
    )
}

export default AddNewBlog;