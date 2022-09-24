import { Component } from 'react'
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";
import axios from "axios";


export class App extends Component {

  state = {
    cards: [],
    search: "",
    error: "",
    loading: false,
  }

  fetchPosts = () => {
    const request = this.state.search
    const newCards = []
    axios.get(`https://pixabay.com/api/?q=${request}&page=1&key=29243564-6faefde78431833ffd5a53afd&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => response.data.hits)
    .then(data => data.map(({ id, webformatURL, largeImageURL }) => newCards.push({ id, webformatURL, largeImageURL })))
    .then(this.setState({
      cards: newCards,
    }))
    .catch(error => {
      this.setState({
        error
      })
    })
    .finally(() => this.setState({loading: false}))
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    this.setState({
      search: e.target.elements.searchInput.value
    })
    this.fetchPosts()
  }
  
  render(){
    return (
      <div>
        <Searchbar onFormSubmit={this.onFormSubmit} />
        <ImageGallery cards={this.state.cards} />
      </div>
    );
  }
  
};
