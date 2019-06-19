import React, { Component } from 'react';
import Card from './../shared/Card/Card';
import Loading from './../shared/Loading/Loading';

// import the action creators to update our redux state
import { requestArticles } from '../../redux/hackerNewsReducer';

import { connect } from 'react-redux';

class HackerNews extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestArticles();
  }

  render() {
    console.log(this.props);
    const articles = this.props.hackerNewsReducer.articles.map((article => <Card key={article.id} article={article} />))
    return (
      <div className='news-container'>
        <img style={styles.logo} src="./hackerNews.jpeg" alt="" />
        {this.props.hackerNewsReducer.loading ? <Loading /> : <div>{articles}</div>}
      </div>
    )
  }
}

// map our redux state and put it onto the props of the component
const mapStateToProps = (reduxState) => reduxState;

// function mapStateToProps(reduxState){
//   return reduxState
// };

// connect will accept two arguments,
// the first is the function to map redux state and put it onto the props of the comnponent
// the second argument will be an object that houses the action creators we want to use
export default connect(mapStateToProps, { requestArticles })(HackerNews);


const styles = {
  logo: {
    width: '250px',
    margin: '50px 0px'
  }
}