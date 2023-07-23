import { useParams } from 'react-router-dom'
import '../css/read.css'
import blogs from '../data/blogs'
const Read = () => {

    let {id}=useParams();

    const blog = blogs.find((one) => {
        return one.id === parseInt(id)
    })


    return <div className="read">
        <h1 className='read-head'>{blog.head}</h1>
        <div className="read-img-div">
        <img src='/roc.jpg' alt='rocket' className='read-img' />
        <div dangerouslySetInnerHTML={{ __html: blog.content }} className='read-main-text'/>
        </div>
    </div>
}

export default Read;