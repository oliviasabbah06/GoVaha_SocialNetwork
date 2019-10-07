/* Modules imports */
import React, { Component } from 'react';

/* Components imports */
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

/* Styles imports */
import './App.css';

/* Main app imports */
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts : []
    };
  }

/* Au chargement de la page je récupère les posts */

  componentDidMount() {
    this._fetchPostData()
  }

  /* Fonction pour récupérer les posts dans ma BDD */
  _fetchPostData = () => {
    fetch("http://localhost:8080/routage")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({posts: result});
        },
        (error) => {
          console.error(error);
        }
      )
  }

/* Fonction pour afficher les posts */
  _displayPosts = () => {
    if(this.state.posts.length > 0) {

      var postToDisplay = [];

      this.state.posts.forEach((post) => {
        postToDisplay.push(
        <Posts title={post.title} author={post.author} text={post.text} />);
    });
    return postToDisplay;
  }
    else {
      return (
        <p>Il n'y a aucun post pour le moment.</p>
      )
    }
  }


  render() {
    return (

      <div id="maincontainer">

        <header>
        <h1>Go<span className="imp">Vaha</span> network</h1>
        </header>

              <div className="actu">
              {this._displayPosts()}
              </div>

      </div>

    );
  }

}

export default App;
