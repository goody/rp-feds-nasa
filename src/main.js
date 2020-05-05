import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import PotD from "./components/PotD.vue";

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter);

// 2. Define route components
const Home = { template: "<div>home</div>" };
// const PotD = { template: "<div>PotD</div>" };
const SF = { template: "<div>SF</div>" };
const ISS = { template: "<div>ISS</div>" };

/* let nasaData = {
  date: "2020-05-04",
  explanation:
    "What it would look like to approach planet Earth?  Such an event was recorded visually in great detail by ESA's and JAXA's robotic BepiColombo spacecraft last month as it swung back past Earth on its journey in to the planet Mercury.  Earth can be seen rotating on approach as it comes out from behind the spacecraft's high-gain antenna in this nearly 10-hour time-lapse video.  The Earth is so bright that no background stars are visible.  Launched in 2018, the robotic BepiColombo used the gravity of Earth to adjust its course, the first of nine planetary flybys over the next seven years -- but the only one involving Earth. Scheduled to enter orbit in 2025, BepiColombo will take images and data of the surface and magnetic field of Mercury in an effort to better understand the early evolution of our Solar System and its innermost planet.    New: APOD now available through Instagram in Portuguese",
  media_type: "video",
  service_version: "v1",
  title: "Earth Flyby of BepiColombo",
  url: "https://www.youtube.com/embed/zWFuCO7jyBk?rel=0",
}; */

// 3. Create the router
const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: Home },
    {
      path: "/potd",
      component: PotD,
      props: { msg: "Welcome to Your Vue.js App" },
    },
    { path: "/sf", component: SF },
    { path: "/iss", component: ISS },
  ],
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
