//redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";

import { useEffect } from "react";

//Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";

//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  //sets a dispatch variable for redux
  const dispatch = useDispatch();

  //this will dispatch the the loadgames state on mount
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  // above dispatch is added so useeffect only runs when dispatch is ran

  //Get the data from the state
  const { popular, upcoming, newGames } = useSelector((state) => state.games);

  return (
    <GameList>
      <GameDetail />
      <h1>Upcoming Games</h1>
      <Games>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>

      <h1>Popular Games</h1>
      <Games>
        {popular.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>

      <h1>New Games</h1>
      <Games>
        {newGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;

  h1 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
