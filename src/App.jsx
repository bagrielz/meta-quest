import React from "react";

// Componentes
import Header from "./Components/Header";
import Button from "./Components/Button";

// Vídeos e imagens
import HomeVideo from "./assets/home-video.mov";
import Snow from "./assets/snow.mov";
import Loader from "./assets/Loader.png";
import SmallLoader from "./assets/SmallLoader.png";
import MetaQuestPro from "./assets/MetaQuestPro.png";

// Ícones
import Energy from "./assets/icons/Energy.svg";
import Add from "./assets/icons/Add.svg";
import VisionPro from "./assets/icons/VisionPro.svg";

const App = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 760);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 760);
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
          <video src={HomeVideo} autoPlay muted loop></video>
        </div>

        <div className="main-content">
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
          <h5>Tecnologia de outro mundo com preço dentro da sua realidade</h5>
          <p>
            Com a inovadora realidade mista de alta resolução, você pode
            interagir facilmente com o mundo virtual, mantendo a presença em seu
            espaço físico em cores de alta definição.
          </p>
        </div>
      </section>
      <section className="loading-section">
        <div className="loading-column-left">
          <div className="loading-bkg-video">
            <video src={Snow} autoPlay muted loop></video>
            <div className="loading-information">
              <span>Carregamento</span>
              <span>10x</span>
              <span>mais rápido</span>
            </div>
          </div>

          <div className="loading-description">
            <p>
              Meta Quest Pro vem com todos os produtos e mais alguns para que
              você possa começar a trabalhar, criar e colaborar - controladores
              Meta Quest Touch Pro, base de carregamento com adaptador de
              alimentação USB-C rápido, 10 sensores VR/MR avançados, 256 GB de
              armazenamento, 12 GB de RAM, e um processador Snapdragon XR2+
              Qualcomm
            </p>
          </div>
        </div>
        <div className="loading-column-right">
          <div className="loading-cta">
            <div>
              <img src={Energy} alt="Ícone de adicionar compra" />
              <p>
                Projetado para carregamento fácil do sistema com um{" "}
                <span>adaptador rápido de 45 W</span> incluído para manter o
                Meta Quest Pro e os controladores prontos sempre que sua
                criatividade surgir.
              </p>
              <Button
                type="primary-icon-btn"
                text="Compre agora"
                setIcon={true}
                icon={Add}
              />
            </div>
            {isMobile ? (
              <img
                className="loader-image"
                src={SmallLoader}
                alt="Imagem do carregador"
              />
            ) : (
              <img
                className="loader-image"
                src={Loader}
                alt="Imagem do carregador"
              />
            )}
          </div>
        </div>
      </section>
      <section className="new-possiblities-section">
        <div className="new-possibilities-description">
          <span>Novas possibilidades</span>
          <div>
            <h4>Um fone de ouvido, tantas possibilidades</h4>
            <p>
              Meta Quest Pro reúne o que há de mais moderno em VR para mudar as
              perspectivas sobre como projetamos para mundos físicos e virtuais.
              Usando pintura VR e vários aplicativos de estúdio, o processo
              criativo vai para um outro nível.
            </p>
            <button>
              <img src={VisionPro} alt="Ícone do Vision Pro" />
              Visualizar Meta Vision Pro 3D
            </button>
          </div>
        </div>
        <div className="meta-quest-pro-image">
          <img src={MetaQuestPro} alt="Imagem de um Meta Quest Pro" />
        </div>
      </section>
    </div>
  );
};

export default App;
