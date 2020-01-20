import React from "react";
import ProfileHome from "./ProfileHome";
import FavoriteShows from "./FavoriteShows";

export const App = () => (
	<ProfileHome userId='broadwaycom'>
		{data =>
			data === null ? (
				<div>Loading Shows....</div>
			) : (
				<FavoriteShows shows={data} />
			)
		}
	</ProfileHome>
);

export default App;
