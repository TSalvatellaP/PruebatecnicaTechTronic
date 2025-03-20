import Header from '../components/Header';
import Footer from '../components/Footer';
import ArticleList from '../components/postList/ArticleList';
import Sidebar from '../components/sidebar/Sidebar';

const Home = () => {

    return(
      <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col md:flex-row container mx-auto px-4 py-8 gap-8 flex-grow">
        <section className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-4">Últimos artículos</h1>
          <ArticleList />
        </section>
        <aside className="md:w-1/3">
          <Sidebar/>
        </aside>
      </main>
      <Footer />
    </div>

    );
}

export default Home;