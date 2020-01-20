import React from "react";

export default class ProfileHome extends React.Component {
	constructor(props) {
		super(props);

		this.state = { shows: [] };
	}

	getFavoriteShowsByUserId() {
		fetch(`http://localhost:3004/shows`)
			.then(data => data.json())
			.then(shows => this.setState({ shows }));
	}

	componentDidMount() {
		this.getFavoriteShowsByUserId();
	}

	render() {
		const { shows } = this.state;
		return this.props.children(shows);
	}
}
