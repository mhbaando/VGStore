/*
 * Home.jsx Waa page ugu horaya ee so kacaya marka webka laso boqdo
 * waxan uu ka koobnayhy dhowr container mid walbna uu sii hayo
 * Dhowr components
 */

import {
  Navigation,
  Header,
  Categories,
  Populars,
  Promotions,
  Sales,
  HomeBlog,
  Subscribe,
  Footer,
} from "../../Containers/index";

// hlkan buu ka bilabnyaa
const Home = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Categories />
      <Populars />
      <Promotions />
      <Sales />
      <HomeBlog />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;
