import PropTypes from 'prop-types'
import { Component } from 'react'

class Searchbar extends Component {
    state = {
      searchText: "",
    }
     
    onInputChange = (e) => {
         this.setState({
            searchText: e.target.value,
        })
    }
    render() {
        return (
            <header className="searchbar">
                <form className="form" onSubmit={this.props.onFormSubmit}>
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>

                    <input 
                        onChange={this.onInputChange}
                        className="input"
                        name='searchInput'
                        type="text"
                        autoComplete="off"
                        value={this.state.searchText}
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}

Searchbar.propTypes = {}

export {Searchbar}