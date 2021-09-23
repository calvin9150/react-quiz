import { Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { db } from "./firebase";
import { collection, getDoc, getDocs } from "firebase/firestore";

import "./App.css";
import Start from "./pages/Start";
import Quiz from "./pages/Quiz";
import Score from "./pages/Score";
import Comment from "./pages/Comment";
import Rank from "./pages/Rank";

import { loadQuizFB } from "./redux/quiz";

function App() {
  // useEffect(async () => {
  //   const query = await getDocs(collection(db, "bucket"));
  //   console.log(query);
  //   query.forEach((doc) => {
  //     console.log(doc.id, doc.data());
  //   });
  // }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadQuizFB());
  }, []);

  return (
    <div className="App">
      <Route path="/" exact>
        <Start />
      </Route>
      <Route path="/quiz" exact>
        <Quiz />
      </Route>
      <Route path="/score" exact>
        <Score />
      </Route>
      <Route path="/comment" exact>
        <Comment />
      </Route>
      <Route path="/rank" exact>
        <Rank />
      </Route>
    </div>
  );
}

export default App;
