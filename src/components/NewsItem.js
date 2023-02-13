import React from 'react'
import { Stack } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    // this is how expracting only date form date of  the date of publication of artical using regular expression

    const dateStr = date.match(/(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g);
    const Unknown = source;

    return (
        <div className="my-3">
            <div className="card">
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }
                }>
                    <span className="badge rounded-pill bg-danger"> {source} </span>
                </div>
                <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}  </h5>
                    <Stack sx={{ ml: { lg: '900px', xs: '500px' } }}>
                    </Stack>

                    {/* <p className="card-text"><small className="text-muted">By {!author ? "Unknown" :author } on {new Date (date).toGMTString} </small></p> */}
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {dateStr}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>

                    <span className="position-absolute top-0 start-200 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1', marginRight: '70px' }}> {source} </span>
                    <a href='/' rel="noreferrer" style={{ marginLeft: '200px' }} target='_blank' className="btn btn-sm btn-success"><ShareIcon color='green' /> </a>
                </div>
            </div>
        </div>
    )

}

export default NewsItem
