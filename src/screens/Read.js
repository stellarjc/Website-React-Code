import { Link, useParams } from 'react-router-dom'
import '../css/read.css'
import blogs from '../data/blogs'
const Read = () => {

    let {id}=useParams();

    const blog = blogs.find((one) => {
        return one.id === parseInt(id)
    })

    return (blog ? 
        <div className="read-blog">
            <Link to='/blog' className='back-link'>&lt; Back to Blogs</Link>
            <h1 className='read-head'>{blog.head}</h1>
            <div className="read-img-div"><img src={"/"+blog.image} alt='blog main' className='read-img' /></div>
            <div dangerouslySetInnerHTML={{__html: blog.content }}className='read-main-text'>
                {/* Blog content is in the form of raw HTML, so we need to set innerHTML dangerously to it */}
                {/* { blog.content } */}
            </div>
        </div>
    : 
    <h1 className='read-head'> ☄️404 Blog not found 💫</h1>
    )
}

export default Read;