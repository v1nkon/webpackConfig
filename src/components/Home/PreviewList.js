import React, { Component } from "react";
import PropTypes from "prop-types";

// import Preview from "@/components/Home/Preview";
import Preview from "./Preview";

class PreviewList extends Component{
  static propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    loadArticles: PropTypes.func,
    articleList: PropTypes.arrayOf(PropTypes.object)
  }

  componentDidMount(){
    console.log('=================================')
    console.log(this.props)
    this.props.loadArticles()
  }

  render(){
    const { loading, error, articleList } = this.props; 
    if (error) {  return <p className="message">Oops, something is wrong.</p>;    } 
    if (loading) {   return <p className="message">Loading...</p>;    } 
      return articleList.map(item => (<Preview {...item} key={item.id} />)); 
  }
}

export default PreviewList;
