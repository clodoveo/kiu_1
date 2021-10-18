import "./styles.css";
import { useState, React } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useLocation
} from "react-router-dom";
import { ConfigContext } from "./contexts/ConfigContext";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider
} from "react-query";

import { AnimatePresence } from "framer-motion";

import Splash from "./screens/Splash";
import LanguageSelector from "./screens/LanguageSelector";
import GuideSelector from "./screens/GuideSelector";
import Start from "./screens/Start";
import Menu from "./screens/Menu";
import Opener from "./screens/Opener";
import Info from "./screens/Info";
import ServicesList from "./screens/ServicesList";
import ServiceContents from "./screens/ServiceContents";
import VideoPlayer from "./screens/VideoPlayer";

// Create a client
const queryClient = new QueryClient();

export default function App() {
  const [language, setLanguage] = useState("");
  const [guide, setGuide] = useState("");

  return (
    <ConfigContext.Provider value={{ language, setLanguage, guide, setGuide }}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Router>
            <Pages />
            <div
              style={{
                display: "flex",
                //position: "fixed",
                flexDirection: "column"
              }}
            ></div>
          </Router>
        </div>
      </QueryClientProvider>
    </ConfigContext.Provider>
  );
}

const routes = [
  { path: "/", component: Splash, className: "splash" },
  { path: "/language", component: LanguageSelector, className: "language" },
  { path: "/guide", component: GuideSelector, className: "guide" },
  { path: "/guide", component: GuideSelector, className: "guide" },
  { path: "/start", component: Start, className: "start" }
];

function Pages() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        {routes.map(({ path, className, component }, index) => {
          return (
            <Route
              key={index}
              exact
              path={path}
              className={className}
              component={component}
            />
          );
        })}
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/opener/:type" component={Opener} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/services" component={ServicesList} />
        <Route exact path="/services/:id" component={ServiceContents} />
        <Route exact path="/video" component={VideoPlayer} />
      </Switch>
    </AnimatePresence>
  );
}
