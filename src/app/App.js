import React, { useEffect } from "react";
import "../styles.css";

import { useDispatch, useSelector } from "react-redux";
import PuzzleGame from "../features/puzzleGame/PuzzleGame";

function App() {
  // const dispatch = useDispatch();
  // const { isLoading, hasError } = useSelector((state) => state.allRecipes);

  // useEffect(() => {
  //   dispatch(loadRecipes());
  // }, [dispatch]);

  // const onTryAgainHandler = () => {
  //   dispatch(loadRecipes());
  // };

  return (
    <main>
      <h1 className="text-3xl font-bold underline">To do...</h1>
      <PuzzleGame></PuzzleGame>
    </main>
  );
}

export default App;
