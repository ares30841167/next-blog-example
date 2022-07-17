import Home from "../../pages/index";

export default {
  title: "Pages/Home",
  component: Home,
  parameters: {
    jest: 'home.test.jsx',
  },
};

export const HomePage = () => <Home />