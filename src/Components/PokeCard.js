import React, { Component } from "react";
import "../App.css";

class PokeCard extends Component {
	componentWillUpdate() {
		console.log("object");
	}
	render() {
		let arr = this.props.pokemon.url.split("/");
		this.index = arr[arr.length - 2];
		let imgUrl =
			"https://pokeres.bastionbot.org/images/pokemon/" + this.index + ".png";
		return (
			<div className="wrap">
				<div className="container">
					<div className="card">
						<h3>{this.props.pokemon.name}</h3>
						<img src={imgUrl} height="80" alt="Not Availbale" />
						<div className="open"></div>
					</div>
				</div>
			</div>
		);
	}
}

export default PokeCard;
