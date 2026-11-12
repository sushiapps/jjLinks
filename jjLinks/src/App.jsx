
import "./App.css";

// List of website links
const links = [
  {
    title: "Itzel and the Dark Amulet",
    subtitle: "2026 · Paperback (Amazon)",
    url: "https://link.amazon/B05BqXeop",
    image: "/images/page1.jpg",
  },
  {
    title: "Itzel and the Dark Amulet",
    subtitle: "2026 · eBook Edition (Kindle)",
    url: "https://link.amazon/B07cgg7Od",
    image: "/images/page2.jpg",
  },
  {
    title: "Spirit of the Kings",
    subtitle: "2016 · Paperback (Amazon)",
    url: "https://link.amazon/B02MBhYVX",
    image: "/images/page3.jpg",
  },
   {
    title: "Spirit of the Kings",
    subtitle: "2016 · eBook Edition (Kindle)",
    url: "https://link.amazon/B08TzJyll",
    image: "/images/page4.png",
  },
  {
    title: "an era of abc rhymes",
    subtitle: "2023 · Portrait Hardcover [bonus pages] (Amazon)",
    url: "https://link.amazon/B02jHuIXM",
    image: "/images/page5.png",
  },
  {
    title: "an era of abc rhymes",
    subtitle: "2023 · Landscape Hardcover (IngramSpark)",
    url: "https://shop.ingramspark.com/b/084?params=rBGCdBfop4fzWFDHKZBTJCziOK9RpwAtn3T3OUQ8QgV",
    image: "/images/page5.png",
  },
];

function App() {
  return (
    <div className="page">

      {/* Banner */}
      <header className="banner">
        <img
          src="/images/banner.png"
          alt=""
          className="banner-image"
        />

        <div className="banner-overlay">
          <h1>JJ Madrigal</h1>
          <p>a new world of magic</p>
        </div>
      </header>

      {/* Link List */}
      <main className="link-list">

        {links.map((link) => (
          <a
            key={link.title}
            href={link.url}
            className="link-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Thumbnail */}
            <img
              src={link.image}
              alt=""
              className="link-image"
            />

            {/* Title and Subtitle */}
            <div className="link-info">
              <span className="link-title">
                {link.title}
              </span>

              <span className="link-subtitle">
                {link.subtitle}
              </span>
            </div>

            {/* Navigation Arrow */}
            <span className="arrow">›</span>

          </a>
        ))}

      </main>

      {/* Footer */}
      <footer className="footer">
        © 2016 - {new Date().getFullYear()} JJ Madrigal
      </footer>

    </div>
  );
}

export default App;
