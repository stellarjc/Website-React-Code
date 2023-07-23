import '../css/news.css'
import Button from '@mui/material/Button';
function News() {

  const blogs=[{
    id:1,
    head:"Amazon announced plans July 21 to build a satellite processing facility",
    parah:"Amazon announced plans July 21 to build a satellite processing facility at NASA’s Kennedy Space Center, Florida, as it prepares to start launching 3,200 commercial Project Kuiper broadband satellites next year."
    ,link:"https://spacenews.com/amazon-picks-kennedy-space-center-for-project-kuiper-processing-facility/"
    ,image:"roc2.jpg",
    content:""
  },{
    head:"Amazon announced plans July 21 to build a satellite processing facility",
    parah:"Amazon announced plans July 21 to build a satellite processing facility at NASA’s Kennedy Space Center, Florida, as it prepares to start launching 3,200 commercial Project Kuiper broadband satellites next year."
    ,link:"https://spacenews.com/amazon-picks-kennedy-space-center-for-project-kuiper-processing-facility/"
    ,image:"roc2.jpg"
  },{
    head:"Amazon announced plans July 21 to build a satellite processing facility",
    parah:"Amazon announced plans July 21 to build a satellite processing facility at NASA’s Kennedy Space Center, Florida, as it prepares to start launching 3,200 commercial Project Kuiper broadband satellites next year."
    ,link:"https://spacenews.com/amazon-picks-kennedy-space-center-for-project-kuiper-processing-facility/"
    ,image:"roc2.jpg"
  },{
    head:"Amazon announced plans July 21 to build a satellite processing facility",
    parah:"Amazon announced plans July 21 to build a satellite processing facility at NASA’s Kennedy Space Center, Florida, as it prepares to start launching 3,200 commercial Project Kuiper broadband satellites next year."
    ,link:"https://spacenews.com/amazon-picks-kennedy-space-center-for-project-kuiper-processing-facility/"
    ,image:"roc2.jpg"
  }]

  const Allblogs = () => {
    return blogs.map((one) => {
      return <div className="small-blog">
      <div className="small-blog-img">
        <img src="roc2.jpg" alt="blog" className="small-blog-image" />
      </div>
      <div className="small-blog-h1">
        <h1 className="small-blog-text-h1">{one.head}</h1>
      </div>
      <div className="small-blog-p">
        {/* <p className="small-blog-text-p">{one.parah}</p> */}
        <Button href={one.link} className="small-blog-button">Read More</Button>
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
            <img src="roc2.jpg" alt="blog" className="big-blog-image" />
          </div>
          <div className="big-blog-h1">
            <h1 className="big-blog-text-h1">SpaceX's Inspiration4 mission is about to make history</h1>
          </div>
          <div className="big-blog-p">
            <p className="big-blog-text-p">SpaceX is about to make history as it launches the first all-civilian mission to orbit. The Inspiration4 crew is set to launch from NASA's Kennedy Space Center in Florida on Wednesday, Sept. 15, and you can watch the whole thing live.</p>
            <Button className="big-blog-button">Read More</Button>
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