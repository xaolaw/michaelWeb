import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef } from 'react';
import bulb from '../../public/cards-images/bulb.png';
import excavator from '../../public/cards-images/excavator.png';
import safety from '../../public/cards-images/safwty.png';
import '../styles/Home.css';

function Home() {
  const ref = useRef(null);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const learnMore = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <>
      <main className="home-main">
        <section className="main-menu">
          <div className="slider">
            <div className="slide"></div>
            <div className="slide"></div>
            <div className="slide"></div>
            <div className="slide"></div>
            <div className="slide"></div>
            <div className="title">
              <h1>
                <span className="company-name">SmartHydro</span>
              </h1>
            </div>
            <button className="learn-more" onClick={learnMore}>
              Dowiedz się więcej
            </button>
          </div>
        </section>
        <section ref={ref} className="what-you-doin">
          <div className="core-values">
            <h2 data-aos="zoom-in" data-aos-once="true" className="who-are-we">
              Kim jesteśmy?
            </h2>
            <div className="text-about">
              <p data-aos-once="true" data-aos="fade-left" className="about-us">
                Jesteśmy grupą specjalistów z kierunkowym wykształceniem oraz
                doświadczeniem w dziedzinach budownictwa lądowego i wodnego,
                współpracującą pod szyldem{' '}
                <strong color="blue">Smart Hydro</strong>. Specjalizujemy się w
                szerokim pasmie usług z budownictwa ladowego i wodnego, przede
                wszystkim w legalizacji samowoli budowlanych, sporządzania
                analiz konstrukcyjnych jak i wiele innych. Jako wiodącą firma
                specjalizująca się w budownictwie wodnym, nasza praca jest
                oparta na trzech kluczowych wartościach:
              </p>
            </div>
          </div>
          <div className="cointaner-cards">
            <div data-aos="flip-left" className="card" data-aos-once="true">
              <img className="card-image" src={safety}></img>
              <div className="card-content">
                <h2>Bezpieczeństwo na pierwszym miejscu:</h2>
                <p>
                  Dzięki naszym starannym rozwiązaniom inżynierskim i
                  rygorystycznym testom, nasze projekty są odporne na
                  ekstremalne warunki hydrologiczne, gwarantując ochronę zarówno
                  ludzi, jak i środowiska.
                </p>
              </div>
            </div>
            <div data-aos="flip-left" className="card" data-aos-once="true">
              <img className="card-image" src={bulb}></img>
              <div className="card-content">
                <h2>Zrównoważony rozwój i troska o środowisko:</h2>
                <p>
                  Wierzymy w budowanie dla przyszłości. Nasze rozwiązania
                  opierają się na zasadach zrównoważonego rozwoju, minimalizując
                  negatywny wpływ na środowisko.
                </p>
              </div>
            </div>
            <div data-aos="flip-left" className="card" data-aos-once="true">
              <img className="card-image" src={excavator}></img>
              <div className="card-content">
                <h2>Efektywność i innowacyjność:</h2>
                <p>
                  Nasz zespół wykorzystuje najnowsze technologie i innowacyjne
                  podejścia, aby zapewnić efektywne i wydajne rozwiązania dla
                  naszych klientów.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="offer">
          <div className="core-values">
            <h2 data-aos="zoom-in" data-aos-once="true" className="who-are-we">
              Oferta
            </h2>
            <div className="text-about">
              <p data-aos-once="true" data-aos="fade-left" className="about-us">
                Choć nasza oferta jest szeroka, zdajemy sobie sprawę, że każde
                zlecenie budowlane może być unikalne i wymagać niestandardowego
                podejścia. Dlatego, jeżeli masz zlecenie z dziedzin budownictwa
                lądowego i/lub hydrotechnicznego, które nie zawiera się w naszej
                standardowej ofercie, serdecznie zachęcamy do skorzystania z
                naszego formularza kontaktowego. Wyślij nam szczegółowy opis
                zagadnienia, które Cię interesuje, a nasi doświadczeni
                inżynierowie i specjaliści skrupulatnie przeanalizują
                zgłoszenie.
              </p>
            </div>
          </div>
        </section>
        <section className="realizations">
          <div className="core-values">
            <h2 data-aos="zoom-in" data-aos-once="true" className="who-are-we">
              Realizacje
            </h2>
            <div className="text-about">
              <p data-aos-once="true" data-aos="fade-left" className="about-us">
                Nasze doświadczenie jest budowane przede wszystkim na praktyce,
                którą zdobywamy przy konkretnych projektach. Jesteśmy otwarci na
                wszelkie nowe ścieżki rozwoju, co sprawia że ciągle poszerzamy
                nasze możliwości działania. Oczywiście najskuteczniejszym
                sposobem na udowodnienie kwalifiakcji jest przedstawienie
                naszych osiągnięć, dlatego oto niektóre z nich:
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export default Home;
