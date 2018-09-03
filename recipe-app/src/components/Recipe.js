import React, { Component } from "react";
import { Link } from "react-router-dom";

const API_KEY = "88a6d9cc223df32e16e63c3ab4bdcc88";

class Recipe extends Component {
  state = {
    activeRecipe: []
  };

  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(
      `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`
    );
    const res = await req.json();
    this.setState({
      activeRecipe: res.recipes[0]
    });
  };

  render() {
    const recipe = this.state.activeRecipe;
    console.log(recipe);
    return (
      <div className="container">
        {this.state.activeRecipe.length !== 0 && (
          <div className="active-recipe">
            <img
              src={recipe.image_url}
              alt={recipe.title}
              className="active-recipe__img"
            />
            <h3 className="active-recipe__title">{recipe.title}</h3>
            <h4 className="active-recipe__publisher">
              Publisher: <span>{recipe.publisher}</span>
            </h4>
            <p className="active-recipe__website">
              Website:{" "}
              <a href={recipe.publisher_url}>
                <span>{recipe.publisher_url}</span>
              </a>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Go Home </Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
