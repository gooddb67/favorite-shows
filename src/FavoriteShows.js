import React, { useEffect } from "react";

const FavoriteShows = props => {
	useEffect(() => {
		filterFavoriteShows();
	});

	const filterFavoriteShows = () => {
		return (
			props.shows
				// filter shows for just "broadway" and "play"
				.filter(show => {
					return (
						show.category.includes("broadway") || show.category.includes("play")
					);
				})
				// sort based on rating
				.sort((a, b) => b.rating - a.rating)
				// render to page
				.map(show => <p key={show.title}>{show.title}</p>)
		);
	};

	return <div>{props.shows && filterFavoriteShows()}</div>;
};

export default FavoriteShows;
