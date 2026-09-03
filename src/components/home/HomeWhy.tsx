import { homeWhy } from "@/data/home";
import { HomeReveal } from "./HomeReveal";
import "./home-why.css";

export function HomeWhy() {
  return (
    <section id="why" className="wc-home-why">
      <div className="wc-container">
        <HomeReveal as="header" className="wc-home-why-head">
          <h2 className="wc-home-why-title">
            A partner who
            <br />
            stays with you.
          </h2>
          <p className="wc-home-why-quote">
            One team, clear decisions, and work that still holds up as you grow.
          </p>
        </HomeReveal>

        <div className="wc-home-why-layout">
          <HomeReveal className="wc-home-why-figure">
            <div className="wc-home-why-photo">
              <img
                src="/about/img5.jpg"
                alt="A Woodenclouds teammate working with a client in the studio."
                draggable={false}
              />
            </div>
          </HomeReveal>

          <ul className="wc-home-why-list">
            {homeWhy.map((item, i) => {
              const index = String(i + 1).padStart(2, "0");
              return (
                <li key={item.title} className="wc-home-why-item">
                  <div className="wc-home-why-row">
                    <span className="wc-home-why-num">{index}</span>
                    <span className="wc-home-why-copy">
                      <span className="wc-home-why-item-title">{item.title}</span>
                      <span className="wc-home-why-item-body">{item.body}</span>
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
