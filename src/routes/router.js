import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import homePage from "../components/homePage";
import aboutPage from "../components/aboutPage";
import resumePage from "../components/resumePage";
import portfolioPage from "../components/portfolioPage";
import blogPage from "../components/blogPage";
import contactPage from "../components/contactPage";

export const router = new VueRouter({
    // mode: "history",
    routes: [
        { path: "*", redirect: '/homePage' },
        { path: "/", redirect: '/homePage' },

        { path: "/homePage", component: homePage },
        { path: "/aboutPage", component: aboutPage },
        { path: "/resumePage", component: resumePage },
        { path: "/portfolioPage", component: portfolioPage },
        { path: "/blogPage", component: blogPage },
        { path: "/contactPage", component: contactPage },
    ]
})