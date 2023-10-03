import '../css/news.css'
import blogs from '../data/blogs'
import Button from '@mui/material/Button';
function News() {

  const buttonClick = (e,id) => {
    e.preventDefault();
    window.location.href = `/read/${id}`;
  }

  const Allblogs = () => {
    return blogs.map((one) => {
      return <div className="small-blog" key={one.id}>
      <div className="small-blog-img">
        <img src={one.image} alt="blog" className="small-blog-image" />
      </div>
      <div className="small-blog-h1">
        <h1 className="small-blog-text-h1">{one.head}</h1>
      </div>
      <div className="small-blog-p">
        {/* <p className="small-blog-text-p">{one.parah}</p> */}
        <Button onClick={(e)=>{buttonClick(e,one.id)}} className="small-blog-button">Read More</Button>
      </div>
    </div>
    })
  }

  return (
    <div className='blog-main'>

      {/* this section is for big blog (or the focused one) */}
      <div className="big-blog-main">
        <div className="big-blog">
          <div className="big-blog-img">
            <img src={blogs[0].image} alt="blog" className="big-blog-image" />
          </div>
          <div className="big-blog-h1">
            <h1 className="big-blog-text-h1">{blogs[0].head}</h1>
          </div>
          <div className="big-blog-p">
            <p className="big-blog-text-p">{blogs[0].parah}</p>
            <Button className="big-blog-button" onClick={(e)=>{buttonClick(e,blogs[0].id)}}>Read More</Button>
          </div>
        </div>
      </div>
      {/* end of big blog section */}

      {/* this section is for small blogs */}
      <div className="small-blog-main">
        <Allblogs />
      </div>
      {/* end of small blog section */}

    </div>
  );
}

export default News;