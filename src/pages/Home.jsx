import '../styles/Home.css';

function Home() {
  const learnMore = () => {
    alert('learningn more');
  };
  return (
    <>
      <main className="home-main">
        <section className="main-menu">
          <div className='slider'>
            <div className='slide'></div>
            <div className='slide'></div>
            <div className='slide'></div>
            <div className='slide'></div>
            <div className='slide'></div>
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
        <section className="what-you-doin"></section>
      </main>
    </>
  );
}
export default Home;
