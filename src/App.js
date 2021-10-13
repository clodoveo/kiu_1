import "./styles.css";
import { useState, React } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { AnimatedRoute } from "react-router-transition";
import { ConfigContext } from "./contexts/ConfigContext";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider
} from "react-query";

import Splash from "./screens/Splash";
import LanguageSelector from "./screens/LanguageSelector";
import GuideSelector from "./screens/GuideSelector";
import Start from "./screens/Start";
import Menu from "./screens/Menu";
import Opener from "./screens/Opener";
import Info from "./screens/Info";
import Services from "./screens/Services";
import VideoPlayer from "./screens/VideoPlayer";

// Create a client
const queryClient = new QueryClient();

export default function App() {
  const [language, setLanguage] = useState("");
  const [guide, setGuide] = useState("");

  return (
    <ConfigContext.Provider value={{ language, setLanguage, guide, setGuide }}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="App">
            <AnimatedRoute
              exact
              path="/"
              component={Splash}
              atEnter={{ offset: 100 }}
              atLeave={{ offset: 100 }}
              atActive={{ offset: 0, position: "absolute", zIndex: 0 }}
              mapStyles={(styles) => ({
                //transform: `translate3d(1000,0,-100); position:fixed; zIndex:0`
              })}
              className="splash"
            />
            <AnimatedRoute
              exact
              path="/language"
              component={LanguageSelector}
              atEnter={{ offset: 100, position: "fixed" }}
              atLeave={{ offset: 100 }}
              atActive={{ offset: 0 }}
              mapStyles={(styles) => ({
                transform: `translateY(${styles.offset}%)`
              })}
              className="language"
            />
            <AnimatedRoute
              exact
              path="/guide"
              component={GuideSelector}
              atEnter={{ offset: 100, position: "fixed" }}
              atLeave={{ offset: 100 }}
              atActive={{ offset: 0 }}
              mapStyles={(styles) => ({
                transform: `translateY(${styles.offset}%)`
              })}
              className="guide"
            />
            <Route exact path="/start" component={Start} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/opener/:type" component={Opener} />
            <Route exact path="/info" component={Info} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/services/:id" component={Services} />

            <Route exact path="/video" component={VideoPlayer} />
          </div>
          <div
            style={{
              display: "flex",
              //position: "fixed",
              flexDirection: "column"
            }}
          >
            <Link to="/">spalsh</Link>
            <Link to="/language">language</Link>
            <Link to="/guide">guide</Link>
            <Link to="/start">start</Link>
            <Link to="/menu">menu</Link>
            <Link to="/opener">opener</Link>
            <Link to="/info">info</Link>
            <Link to="/services">services</Link>
            <Link to="/video">video</Link>
          </div>
        </Router>
      </QueryClientProvider>
    </ConfigContext.Provider>
  );
}
