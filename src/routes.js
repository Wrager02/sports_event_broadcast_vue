import Over from './components/Over';
import Event from "./components/Event";

export const routes = [
    {
        path: '/',
        name: 'home',
        component: Over
    },
    {
        path: '/home',
        redirect: '/'
    },
    {
        name: "Event",
        path: '/event/:id',
        component: Event
    },
]