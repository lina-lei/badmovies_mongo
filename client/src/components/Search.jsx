import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      selectedGenreId: '28'
    };
    this.handleClickedGenre = this.handleClickedGenre.bind(this);
  }
 
  componentDidMount() {
    this.getGenres();
  }

  getGenres() {
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
    axios.get('/genres')
    .then((data) => {
      this.setState({genres: data.data})
    })
    .catch((err) => console.log('search component err:', err));
  }

  handleClickedGenre(e) {
    this.setState({selectedGenreId: e.target.value});
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>

        <select onChange={this.handleClickedGenre}>
          {this.state.genres.map((genre, ind) => {
            return (<option value={genre.id} key={ind}>{genre.name}</option>)
          })}
        </select>
        <br/><br/>

        <button onClick={() => this.props.getMovies(this.state.selectedGenreId)}>Search</button>

      </div>
    );
  }
}

export default Search;