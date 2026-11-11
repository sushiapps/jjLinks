const links = [
  {
    title: "My First Link",
    url: "https://example.com",
    image: "/images/page1.jpg",
  },
  {
    title: "Another Great Site",
    url: "https://example.com",
    image: "/images/page2.jpg",
  },
  {
    title: "Something Else",
    url: "https://example.com",
    image: "/images/page3.jpg",
  },
];

function App() {
  return (
    <div className="page">
      <header className="banner">
        <img
          src="/images/banner.jpg"
          alt="JJ Mads Links"
          className="banner-image"
       />
        <div className="banner-overlay">
          <h1>JJ Mads Links</h1>
          <p>A collection of my favorite places on the web.</p>
        </div>
      </header>

      <main className="link-list">
        {links.map((link) => (
          <a
            key={link.title}
            href={link.url}
            className="link-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={link.image} alt="" className="link-image" />

            <span className="link-title">{link.title}</span>

            <span className="arrow">→</span>
          </a>
        ))}
      </main>
    </div>
  );
}

export default App;