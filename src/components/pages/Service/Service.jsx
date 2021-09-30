import React, { useEffect, useState } from "react";
import home from "../../assets/img/code.jpg";
import NavBar from "../../NavBar/Header/Navbar";
import Footer from "../../NavBar/Footer/Footer";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCarousel,
  CCarouselInner,
  CCarouselItem,
} from "@coreui/react";
import { Games } from "./Games";
import Pagination from "./Pagination";

function Service() {
  const [page, setPage] = useState(1);
  const startIndex = (page - 1) * 1;
  const selectedGame = Games.slice(startIndex, startIndex + 1);

  const totalPages = Games.length / 1;

  const handleClick = (num) => {
    setPage(num);
  };
  useEffect(() => {
    document.body.style.backgroundImage = `url('${home}')`;
  }, []);
  return (
    <React.Fragment>
      <NavBar />
      <div
        className=""
        id="services"
        style={{ padding: "10px", marginLeft: "5cm", marginRight: "5cm" }}
      >
        <p
          style={{
            color: "white",
            fontFamily: "Segoe UI",
            fontSize: "40px",
            fontWeight: "bold",
          }}
          id="service_tite"
        >
          Dangerous Online Games
        </p>
        <div className="mb-3">
          <Pagination totalPages={totalPages} handleClick={handleClick} />
        </div>
        <div>
          {selectedGame.map((game, index) => {
            return (
              <CCard color="dark" className="text-white " key={index}>
                <CCardHeader><p style={{ fontSize: "30px" }}> {game.name}</p></CCardHeader>
                <CCardBody>
                  <div className="row">
                    <div className="col" style={{ float: "left" }}>
                      <div>
                        <p
                          style={{
                            fontSize: "30px",
                            color: "#0000ff",
                            fontWeight: "bold",
                          }}
                        >
                          What is {game.name} ?
                        </p>
                      </div>
                      <div className="text" style={{ alignItems: "start" }}>
                        <p style={{ fontSize: "20px" }}>{game.intro}</p>
                      </div>
                    </div>
                    <div className="col">
                      <CCarousel>
                        <CCarouselInner>
                          <CCarouselItem>
                            <img
                              className="d-block"
                              src={game.img}
                              alt="slide 1"
                              height="500"
                              width="1100"
                            />
                          </CCarouselItem>
                        </CCarouselInner>
                      </CCarousel>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div style={{ color: "red" }}>
                      <p
                        style={{
                          fontSize: "30px",
                          color: "#0000ff",
                          fontWeight: "bold",
                        }}
                      >
                        Is {game.name} Content Suitable for All Ages?
                      </p>
                    </div>
                    <div>
                      <p style={{ fontSize: "20px" }}> {game.age}</p>
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div style={{ color: "red" }}>
                      <p
                        style={{
                          fontSize: "30px",
                          color: "#0000ff",
                          fontWeight: "bold",
                        }}
                      >
                        Parental Controls and other Safety Features?
                      </p>
                    </div>
                    <div>
                      <p style={{ fontSize: "20px" }}> {game.parent}</p>
                    </div>
                  </div>
                </CCardBody>
              </CCard>
            );
          })}
        </div>
      </div>
      <div className="mb-5">
        <Pagination totalPages={totalPages} handleClick={handleClick} />
      </div>
      <div className="mt-5">
        <Footer/>
      </div>
    </React.Fragment>
  );
}

export default Service;
