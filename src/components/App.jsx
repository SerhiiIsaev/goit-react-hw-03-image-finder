import { Component } from 'react'
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";
import axios from "axios";
import styles from './App.module.css'
import { Button } from './Button/Button';


export class App extends Component {

  state = {
    cards: [],
    search: "",
    error: "",
    loading: false,
    page: 1,
  }



  fetchPosts = () => {
    const request = this.state.search
    const page = this.state.page
    axios.get(`https://pixabay.com/api/?q=${request}&page=${page}&key=29243564-6faefde78431833ffd5a53afd&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => response.data.hits)
    .then(data => {
      const dataArray = [];
      data.map(({ id, webformatURL, largeImageURL }) => {
        dataArray.push({ id, webformatURL, largeImageURL })
      })
      console.log(dataArray)
      return dataArray
    }
    )
    .then( (newCards) => {
        this.setState((prevState) => {
      if (prevState.cards.length === 0) {
        return {
        cards: newCards,
      }
      } else {
        
        return {
          cards: [...prevState.cards, ...newCards]
        }
      }
      
      })
    })
    .catch(error => {
      this.setState({
        error
      })
    })
      .finally(() => this.setState({
        loading: false,
        search : "",
      }))
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    this.setState({
      cards: [],
      search: e.target.elements.searchInput.value,
      page: 1,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.search !== prevState.search || this.state.page !== prevState.page) {
      this.fetchPosts()
    }
  }

  onLoadMoreBTN = () => {
    this.setState((prevState) => {
      return {
        page: prevState.page + 1,
      }
    })
  }
  
  
  render(){
    return (
      <div className={styles.App}>
        <Searchbar onFormSubmit={this.onFormSubmit} />
        <ImageGallery cards={this.state.cards} />
        {this.state.cards.length && <Button onLoadMoreBTN={this.onLoadMoreBTN } />}
      </div>
    );
  }
  
};
