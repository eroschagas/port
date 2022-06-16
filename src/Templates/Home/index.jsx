import { sites } from "../../database/sites";

export const Home = () => {
  return (
    <div>
      <div className="portfolio-title">
        <h1>Eros Chagas</h1>
        <div>
          <a
            target="_blank"
            href="https://www.instagram.com/eros.chagas"
            rel="noreferrer"
          >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/eros-chagas-b93911b3/"
            rel="noreferrer"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a
            target="_blank"
            href="https://github.com/eroschagas"
            rel="noreferrer"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </div>
      </div>
      <div className="portfolio-sites">
        {sites.map((p, i) => (
          <div className="portfolio-card" key={i}>
            <a
              target="_blank"
              href={p.link}
              rel="noreferrer"
            >
              <div className="card-background">
                <h1>{p.name}</h1>
              </div>
              <img src={p.img} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
