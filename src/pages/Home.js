//redux
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { loadGames } from "../actions/gamesAction";

import { useEffect } from "react";

//Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";

//Styling and Animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { fadeIn } from "../animations";

const Home = () => {
  //get current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  //sets a dispatch variable for redux
  const dispatch = useDispatch();

  //this will dispatch the loadgames state on mount
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  // above dispatch is added so useeffect only runs when dispatch is ran

  //Get the data from the state
  const { popular, upcoming, newGames, searched } = useSelector(
    (state) => state.games
  );

  return (
    <GameList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <motion.h1 variants={fadeIn} initial="hidden" animate="show">
              Searched Games
            </motion.h1>
            <Games>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          </div>
        ) : (
          ""
        )}
        <motion.h1 variants={fadeIn} initial="hidden" animate="show">
          Upcoming Games
        </motion.h1>
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
        <motion.h1 variants={fadeIn} initial="hidden" animate="show">
          Popular Games
        </motion.h1>
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
        <motion.h1 variants={fadeIn} initial="hidden" animate="show">
          New Games
        </motion.h1>
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
      </AnimateSharedLayout>
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
  column-gap: 3rem;
  row-gap: 5rem;
`;

export default Home;
