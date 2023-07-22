import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import grandM from '../../public/images/babcia.jpg';
import grandF from '../../public/images/dziadek.jpg';
import mission from '../../public/images/mission.jpg';
import boss from '../../public/images/szefu.jpg';
import '../styles/About.css';

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className="origin" data-aos="fade" data-aos-once="true">
        <div className="text" id="origin-text">
          <h2>Skąd jesteśmy?</h2>
          <div className="where-content">
            <p>
              Nasza główna siedziba mieści się w Krakowie, gdzie realizujemy
              najwięcej projektów. Jednak jeśli twoje zlecenie nie jest z
              małoposki to nie jest problem! Specjalizujemy się w realizowaniu
              projektów w całej Polsce.
            </p>
          </div>
        </div>
      </section>
      <section className="mission" data-aos="fade-down-right" data-aos-once="true">
        <div className='text'>
          <h2>Nasza misja</h2>
          <div className="mission-content" id="mission-text">
            <img className='img-mission' src={mission}></img>
            <p className='p-mission'>
              Naszą główną misją jest dążenie do nowych horyzontów inżynierii,
              gdzie przekraczamy granice wyobraźni i technologii, tworząc
              wyjątkowe i innowacyjne rozwiązania w dziedzinie infrastruktury
              wodnej. W naszych projektach mostów i tam, stawiamy na
              bezpieczeństwo, funkcjonalność i komfort użytkowania, aby nasze
              dzieła połączyły społeczności, ułatwiły przepływ towarów i promowały
              zrównoważony rozwój. Angażujemy się w projektowanie mostów i tam,
              które szanują środowisko naturalne. Wprowadzamy ekologiczne
              technologie i rozwiązania, minimalizując wpływ na ekosystemy wodne i
              ich otoczenie. Współpraca i partnerstwo z naszymi klientami i
              społecznościami, dla których pracujemy, są kluczowe dla osiągnięcia
              sukcesu. Razem stawiamy na transparentność, zaufanie i wzajemne
              zrozumienie, aby dostarczyć projekty, które przynoszą rzeczywistą
              wartość. Dążymy do nieustannego poszerzania horyzontów naszej wiedzy
              i technologii. Innowacyjność i ciągły rozwój stanowią fundament
              naszych projektów, dzięki czemu możemy zrealizować najbardziej
              wyjątkowe i wymagające przedsięwzięcia.
            </p>
          </div>
        </div>
      </section>
      <section className="team" data-aos="zoom-in" data-aos-once="true">
        <h2>Poznaj nasz zespół!</h2>
        <div className="team-container">
          <div className="img-container">
            <img className="img-boss" src={boss}></img>
            <p>Janusz Filipczyk, inżynier z powołania</p>
          </div>
          <div className="about-container">
            <h3>Janusz Filipczyk</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
              finibus ex. Etiam et est lectus. Sed eget nisi at ligula pulvinar
              hendrerit. Sed ac ligula eu eros pharetra pretium. Sed non
              vehicula lectus. Curabitur augue leo, congue eu orci nec, pulvinar
              suscipit dolor. Fusce consectetur turpis sed arcu auctor
              dignissim. Duis eu justo eget ante euismod porta eget non dolor.
              Quisque sit amet magna ut elit interdum vulputate. Aenean ac
              elementum velit. Duis eleifend feugiat nulla, non mattis mauris
              lobortis et. Cras et orci ligula. Mauris commodo porta suscipit.
              Integer dui nisl, elementum posuere ex sit amet, mollis
              scelerisque tellus. Curabitur in nulla felis. Vestibulum ut
              placerat leo, vitae lobortis tortor. Sed interdum arcu eu lacus
              bibendum, nec euismod quam placerat. Curabitur tellus ipsum,
              ultrices id arcu sed, pharetra blandit nisl. Proin vestibulum
              commodo tincidunt. Aliquam cursus sem at turpis eleifend, eget
              laoreet lacus luctus. Vivamus est augue, sagittis accumsan dui sit
              amet, molestie laoreet urna. Nulla et dolor urna. Vestibulum
              eleifend nisl odio, nec feugiat sem convallis vitae. Cras at metus
              nec turpis elementum lacinia et sed metus. Fusce congue laoreet
              felis id tincidunt. Quisque facilisis nunc vel elit imperdiet
              finibus. Sed finibus tortor quam, id suscipit leo rhoncus vitae.
              Aenean ligula quam, dignissim ac nunc nec, posuere convallis
              dolor. Maecenas sit amet porttitor risus. Aenean venenatis, justo
              quis pellentesque egestas, ex urna bibendum arcu, non porta turpis
              nulla ut odio.
            </p>
          </div>
        </div>
        <div className="team-container">
          <div className="img-container">
            <img className="img-boss" src={grandM}></img>
            <p>Babcia Grażynka, psycholog firmowy</p>
          </div>
          <div className="about-container">
            <h3>Babcia Grażynka</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
              finibus ex. Etiam et est lectus. Sed eget nisi at ligula pulvinar
              hendrerit. Sed ac ligula eu eros pharetra pretium. Sed non
              vehicula lectus. Curabitur augue leo, congue eu orci nec, pulvinar
              suscipit dolor. Fusce consectetur turpis sed arcu auctor
              dignissim. Duis eu justo eget ante euismod porta eget non dolor.
              Quisque sit amet magna ut elit interdum vulputate. Aenean ac
              elementum velit. Duis eleifend feugiat nulla, non mattis mauris
              lobortis et. Cras et orci ligula. Mauris commodo porta suscipit.
              Integer dui nisl, elementum posuere ex sit amet, mollis
              scelerisque tellus. 
            </p>
          </div>
        </div>
        <div className="team-container">
          <div className="img-container">
            <img className="img-boss" src={grandF}></img>
            <p>Dziadek Janusz, spec techniczny</p>
          </div>
          <div className="about-container">
            <h3>Dziadek Janusz</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
              finibus ex. Etiam et est lectus. Sed eget nisi at ligula pulvinar
              hendrerit. Sed ac ligula eu eros pharetra pretium. Sed non
              vehicula lectus. Curabitur augue leo, congue eu orci nec, pulvinar
              suscipit dolor. Fusce consectetur turpis sed arcu auctor
              dignissim. Duis eu justo eget ante euismod porta eget non dolor.
              Quisque sit amet magna ut elit interdum vulputate. Aenean ac
              elementum velit. Duis eleifend feugiat nulla, non mattis mauris
              lobortis et. Cras et orci ligula. Mauris commodo porta suscipit.
              Integer dui nisl, elementum posuere ex sit amet, mollis
              scelerisque tellus. Curabitur in nulla felis. Vestibulum ut
              placerat leo, vitae lobortis tortor. Sed interdum arcu eu lacus
              bibendum, nec euismod quam placerat. Curabitur tellus ipsum,
              ultrices id arcu sed, pharetra blandit nisl. Proin vestibulum
              commodo tincidunt. Aliquam cursus sem at turpis eleifend, eget
              laoreet lacus luctus. Vivamus est augue, sagittis accumsan dui sit
              amet, molestie laoreet urna. Nulla et dolor urna. Vestibulum
              eleifend nisl odio, nec feugiat sem convallis vitae. Cras at metus
              nec turpis elementum lacinia et sed metus. Fusce congue laoreet
              felis id tincidunt.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
