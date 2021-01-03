import React, { Component } from "react";
import "./App.css";
import PokeCard from "./Components/PokeCard";

class App extends Component {
	constructor(props) {
		super(props);

		this.limit = 3;
		this.state = {
			pokemonData: [],
			url: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=" + this.limit,
		};
	}

	componentDidMount() {
		fetch(this.state.url)
			.then((responce) => responce.json())
			.then((data) =>
				this.setState(() => {
					return { pokemonData: data };
				})
			);
	}

	nextHandle = () => {
		fetch(this.state.pokemonData.next)
			.then((responce) => responce.json())
			.then((data) =>
				this.setState(() => {
					return { pokemonData: data };
				})
			);
	};

	prevHandle = () => {
		if (this.state.pokemonData.previous) {
			console.log(this.state.pokemonData.previous);
			fetch(this.state.pokemonData.previous)
				.then((responce) => responce.json())
				.then((data) =>
					this.setState(() => {
						return { pokemonData: data };
					})
				);
		}
	};

	render() {
		let pokemons;
		if (this.state.pokemonData.results) {
			pokemons = this.state.pokemonData.results.map((pokemon, index) => {
				return <PokeCard pokemon={pokemon} key={index} />;
			});
		}
		return (
			<div className="appWrap">
				<div className="App">{pokemons}</div>
				<br />
				<button onClick={this.prevHandle}>Prev</button>
				<button onClick={this.nextHandle}>Next</button>
				<br />
			</div>
		);
	}
}
// names https://pokeapi.co/api/v2/pokemon?limit=151
// Detailed Info https://pokeapi.co/api/v2/pokemon/5/
//  For images only https://pokeres.bastionbot.org/images/pokemon/1.png
//"https://pokeapi.co/api/v2/pokemon?offset=40&limit=20"

export default App;
