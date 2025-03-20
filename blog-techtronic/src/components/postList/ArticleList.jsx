import Button from './Button';

const ArticleList = () => {
  const articles = [
    { title: 'El futuro de la tecnología wearable en 2025', summary: 'La tecnología vestible evoluciona a un ritmo sin precedentes, con la aparición de nuevas innovaciones que prometen revolucionar la forma en que interactuamos con nuestros dispositivos y controlamos nuestra salud.' },
    { title: 'Los 5 mejores smartphones de 2024: Un análisis exhaustivo', summary: 'Hemos probado los últimos smartphones insignia para ayudarte a hacer una decisión informada sobre tu próxima compra.' },
    { title: 'Título del artículo 3', summary: 'Resumen del artículo 3...' },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {articles.map((article, index) => (
            <article
              key={index}
              className={`mb-8 p-6 bg-white shadow-md rounded-md ${index === 0 ? 'animate-fade-in' : ''}`}
            >
              <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
              <p>{article.summary}</p>
              <a href="#" className="text-blue-500 hover:underline">Leer más</a>
            </article>
          ))}
        </div>
      </div>
      <Button/>
    </section>
  );
};

export default ArticleList;