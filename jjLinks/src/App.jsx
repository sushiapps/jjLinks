
import "./App.css";

// List of website links
const links = [
  {
    title: "Discover Weekly",
    subtitle: "by Spotify · 30 songs",
    url: "https://www.spotify.com",
    image: "/images/page1.jpg",
  },
  {
    title: "Workday – Pop",
    subtitle: "by Spotify · 134 songs",
    url: "https://www.spotify.com",
    image: "/images/page2.jpg",
  },
  {
    title: "Country Blend",
    subtitle: "by Spotify · 33 songs",
    url: "https://www.spotify.com",
    image: "/images/page3.jpg",
  },
  {
    title: "Indie Chill »» Covers",
    subtitle: "by Spotify · 69 songs",
    url: "https://www.spotify.com",
    image: "/images/page1.jpg",
  },
  {
    title: "Country BBQ",
    subtitle: "by Spotify · 47 songs",
    url: "https://www.spotify.com",
    image: "/images/page2.jpg",
  },
  {
    title: "Dark Dance Floors",
    subtitle: "by Spotify · 52 songs",
    url: "https://www.spotify.com",
    image: "/images/page3.jpg",
  },
];

function App() {
  return (
    <div className="page">

      {/* Banner */}
      <header className="banner">
        <img
          src="/images/banner.jpg"
          alt=""
          className="banner-image"
        />

        <div className="banner-overlay">
          <h1>JJ Mads Links</h1>
          <p>A collection of my favorite places on the web.</p>
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
        © {new Date().getFullYear()} JJ Mads Links
      </footer>

    </div>
  );
}

export default App;
