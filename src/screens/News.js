import '../css/news.css'
import blogs from '../data/blogs'
import Button from '@mui/material/Button';
function News() {

  const buttonClick = (e,id) => {
    e.preventDefault();
    window.location.href = `/blogpost/${id}`;
  }

  const Allblogs = () => {
    return blogs.map((blog) => {
      return <div className="small-blog" key={blog.id}>
      <div className="small-blog-img">
        <img src={blog.image} alt="blog" className="small-blog-image" />
      </div>
      <div className="small-blog-h1">
        <h1 className="small-blog-text-h1">{blog.head}</h1>
      </div>
      <div className="small-blog-p">
        {/* <p className="small-blog-text-p">{blog.parah}</p> */}
        <Button onClick={(e)=>{buttonClick(e,blog.id)}} className="small-blog-button">Read More</Button>
      </div>
    </div>
    })
  }

  return (
    <>
    <img className="blog-head-img" src="cos.jpg" alt="cosmology" />
    <div className="blog-head-tit">
      <h1 className='blog-head-tit-h1'>Space-Talk 🗣️</h1>
      <p className='blog-head-tit-p'>"Let him cook" - Not Einstein</p>
    </div>
    <div className='blog-main'>
      <div className="small-blog-main">
        <Allblogs />
      </div>
    </div>
    </>
  );
}

export default News;