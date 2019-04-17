import React from 'react';
// import '@/components/Home/Preview.css';
import './Preview.css'
import PropTypes from 'prop-types'

const Preview = ({ title, date, description }) => 
  
    <article className="article-preview-item">
      <h1 className="title">{ title }</h1>
      <span className="date">{date}</span>
      <p className="desc">{description}</p>
    </article>
  



Preview.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string
};


export default Preview;