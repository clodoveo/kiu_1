import { matchPath } from "react-router-dom"


import Splash from "./screens/Splash";
import LanguageSelector from "./screens/LanguageSelector";
import GuideSelector from "./screens/GuideSelector";
import Start from "./screens/Start";
import Menu from "./screens/Menu";
import Chat from "./screens/Chat";
import Map from "./screens/Map";
import Info from "./screens/Info";
import ServicesList from "./screens/ServicesList";
import ServiceDetails from "./screens/ServiceDetails";
import VideoPlaylist from "./screens/VideoPlaylist";

function NotFound() {
	return <Redirect to="/" />
}


// se route.skipLanguage: true il valore di language non è richiesto
// se route.skipGuide: true il valore di guide non è richiesto

const routes = [
	{ key: "splash", path: "/", exact: true, component: Splash, skipLanguage: true, skipGuide: true },
	{ key: "language", path: "/language", exact: true, component: LanguageSelector, skipLanguage: true, skipGuide: true },
	{ key: "guide", path: "/guide", exact: true, component: GuideSelector },
	{ key: "start", path: "/start", exact: true, component: Start },
	{ key: "menu", path: "/menu", exact: true, component: Menu },
	{ key: "chat", path: "/chat", exact: true, component: Chat },
	{ key: "map", path: "/map", exact: true, component: Map },
	{ key: "info", path: "/info", exact: true, component: Info },
	{ key: "video", path: "/video", exact: true, component: VideoPlaylist },
	{ key: "services", path: "/services", exact: true, component: ServicesList },
	{ key: "service-details", path: "/services/:id", exact: true, component: ServiceDetails },

	// rimanda tutto il resto alla root
	{ key: "404", path: "/", component: NotFound, skipLanguage: true }
]

export default routes

export function routeFromUrl(url) {
	return routes.find(route => matchPath(url, route))
}