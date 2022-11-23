import React from 'react'
import './article.css'
const Article = ({imgUrl,date,text}) => {
  return (
    <div className='gpt3__blog-contianer_article'>
        <div className='gpt3__blog-container_article-img'>
          <img src={imgUrl} alt="blog_image" />
        </div>
        <div className='gpt3__blog-container_article-content'>
          <div>
            <p>{text}</p>
            <h3>{text}</h3>
          </div>
          <p>Read Full Article</p>
        </div>
    </div>
  )
}

export default Article