import Layout from './Layout/Layout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Service from './pages/service/Service';
import Contact from './pages/contact/Contact';
//import Comments from './pages/comments/Comments';
import Faq from './pages/faq/Faq';

function App() {
  return (
    <Layout>       
      <Home/>
      <About/>
      <Service/>
      {/* <Comments/> */}
      <Faq />
      <Contact/>
      
    </Layout>
  );
}

export default App;
