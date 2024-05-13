import React from "react";

// Componentes
import Header from "./Components/Header";
import Button from "./Components/Button";

// Vídeo
import Video from "./assets/video.mp4";

const App = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 480);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="hero-section">
        <div className="bkg-video">
          <video src={Video} autoPlay muted loop></video>
        </div>

        <div className="content">
          {isMobile ? (
            <h1>
              Descubra MetaQuest
              <br /> o mundo ao seu alcance
            </h1>
          ) : (
            <h1>
              Descubra MetaQuest
              <br /> um novo mundo ao seu alcance
            </h1>
          )}

          <p>Tudo que você precisa sem esvaziar o bolso</p>
          <Button type="primary-btn" text="Adquira o seu" setIcon={false} />
          <span className="value">A partir de R$ 249,90</span>
        </div>
      </main>
      <section className="technology-section">
        <span>Tecnologia virtual</span>
        <div>
          <h5>
            Tecnologia de outro mundo com
            <br /> preço dentro da sua realidade
          </h5>
          <p>
            Com a inovadora realidade mista de alta resolução, você pode
            interagir facilmente com o mundo virtual, mantendo a presença em seu
            espaço físico em cores de alta definição.
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
