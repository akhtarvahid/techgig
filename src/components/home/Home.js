import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from "axios";
import './home.scss';
import { v4 as uuidv4 } from 'uuid';
import { logoutUser } from "../../actions/auth";
import {Logout, Loading } from '../common/constants';

class Home  extends Component {
  state = {
    photos: [],
      isLoading: false,
      page: 0,
      prevY: 0
  }
  getAlbums(page) {
    this.setState({ isLoading: true });
    axios
    .get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)
    .then(res => this.setState(prev=> ({ photos: [...prev.photos, ...res.data], isLoading: false })));
  }
  observerHandler(entities) {
    const { photos, prevY } = this.state;
    const y = entities[0].boundingClientRect.y;
    if (prevY > y) {
      const lastPhoto = photos[photos.length - 1];
      const curPage = lastPhoto?.albumId;
      this.getAlbums(curPage);
      this.setState({ page: curPage });
    }
    this.setState({ prevY: y });
  }
  componentDidMount() {
    this.getAlbums(this.state.page);
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0
      };
      
      this.observer = new IntersectionObserver(
        this.observerHandler.bind(this),
        options
      );
      this.observer.observe(this.loadingRef);
  }
  handleLogout=()=> {
    this.props.logoutUser(this.props.history);
  }
  render() {
    const loadingStyle = { display: true ? "block" : "none" };
    return (
      <div className="main-listing">   
       <header className="main-listing__heading">
        <button onClick={this.handleLogout}>{Logout}</button>
       </header>
       <div className="main-listing__body">
         <div className="cards">
           {this.state.photos?.map(user => (
             <div className="cards__image">
             <img key={uuidv4()} src={user.url} alt={user.title}/>
             </div>
           ))}
         </div>
         <div 
           className="loadmore"
           ref={loadingRef => (this.loadingRef = loadingRef)}>
           <h1 style={loadingStyle}>{Loading}</h1>
         </div>
       </div>
       </div>
     );
   }
}
export default connect(null, {logoutUser})(withRouter(Home));
