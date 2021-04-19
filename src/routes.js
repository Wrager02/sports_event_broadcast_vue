
import Event from "./components/Event";

export const routes = [
    {
        path: '/',
        name: 'home',
        component: require('./components/Over.vue').default
    },
    {
        path: '/home',
        redirect: '/'
    },
    {
        name: "Event",
        path: '/event/:game/:id',
        component: Event,
        props: {

        }
    },
]