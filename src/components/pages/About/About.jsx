import React, { useEffect } from "react";
import "./About.css";
import addict1 from "../../assets/img/addict1.jpg";
import addict2 from "../../assets/img/addict2.jpg";
import addict3 from "../../assets/img/addict3.jpg";
import addict4 from "../../assets/img/addict4.jpg";
import a from "../../assets/img/thh.jpg";
import angry from "../../assets/img/OIP.jpg";
import com1 from "../../assets/img/13.jpg";
import com from "../../assets/img/audio.jpg";
import back from "../../assets/img/audio.jpg";
import { SocialIcon } from "react-social-icons";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import NavBar from "../../NavBar/Header/Navbar";
import Footer from "../../NavBar/Footer/Footer";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCarousel,
  CCarouselControl,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem,
} from "@coreui/react";

import {} from "@coreui/react";

const slides = [addict1, addict2, addict3, addict4];

const About = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url('${a}')`;
  }, []);

  return (
    <React.Fragment>
      <NavBar />
      <div id="about">
        <div className="container">
          <div className="row mt-5 mb-5" id="about_container">
            <div className="header">How Video Game Addiction Recognize</div>
            <div className="text">
              Video gaming is great to do things you enjoy. But can you go too
              far with a hobby? And at what point does it become an addiction?
              That’s the question experts are trying to answer about playing
              video games.Even though gaming has been around for almost 50
              years, studies about its harms are still in the early stages.
              Different groups have come to different conclusions about whether
              problem playing should be called an addiction.
            </div>
            <div className="text">
              There we have focus some signs of addicted childs
            </div>
          </div>
        </div>
        <section
          style={{
            backgroundColor: "rgb(37, 37, 36)",
            backgroundSize: "cover",
          }}
        >
          <div className="topic">Anger on others</div>
          <div>
            <div className="description">
              Stopping video games for any reason has a long-lasting negative
              impact on your child’s emotions. He becomes depressed, moody,
              angry, aggressive or violent when he is unable to play. An
              explosion of anger or aggression directed at the person who has
              taken away the game
            </div>
            <div>
              <img src={angry} />
            </div>
          </div>

          <div className="topic">
            Preoccupation with video games when not playing
          </div>
          <div>
            <div className="description">
              Preoccupation with Video Games Preoccupation with a pursuit is a
              key sign of any form of addiction. Children who eat, drink, sleep
              and talk about video games when not engaged in the activity have
              become preoccupied or obsessed with it. Physical Signs of Video
              Game Addiction
            </div>
            <div>{/* <img src={angry} /> */}</div>
          </div>

          <div className="topic">
            Difficulty becoming absorbed in other activities
          </div>
          <div>
            <div className="description">
              Playing video games for extended amounts of time can cause
              children to experience many of the same symptoms seen in computer
              vision syndrome in adults. Extensive viewing of the game screen
              can lead to eye discomfort,fatigue, blurry vision, and headaches.
              Kids seem to become so engrossed in video games that they forget
              to take breaks
            </div>
            <div>{/* <img src={angry} /> */}</div>
          </div>

          <div className="topic">
            {" "}
            Loses track of time while on electronics. Does not follow time
            limits
          </div>
          <div>
            <div className="description">
              Researchers at Oxford University have taken this notion a step
              farther. After studying the issue of limiting video game time and
              general screen time, they concluded that there is no correlation,
              positive or negative, between digital or online activity and
              wellbeing. Limiting time spent playing games, therefore, might not
              be all that beneficial.
            </div>
            <div>{/* <img src={angry} /> */}</div>
          </div>

          <div className="topic"> Loss of interest in other activities</div>
          <div>
            <div className="description">
              Loss of Interest in Other Activities When it comes to video games,
              children (or teenagers) prone to addiction will spend more and
              more time at the game controls. Activities once enjoyed will start
              to fall by the wayside as video game addiction takes hold.
              downplaying use. loss of relationship, educational, or career
              opportunities. gaming to escape or relieve anxiety, guilt, or
              other negative mood states. failure to control.
            </div>
            <div>{/* <img src={angry} /> */}</div>
          </div>

          <div className="topic">
            {" "}
            Declining interest in school performance, personal hygiene and/or
            difficulty sleeping.
          </div>
          <div>
            <div className="description">
              Behavioural Signs of Video Game Addiction Declining Interest in
              School Performance As with any addictive behaviour, the more a
              person indulges in an addictive pursuit the more he or she wants
              to indulge. Under these circumstances, it’s inevitable that
              interest in school work will start to decline. Causes of
              sleeplessness may include aging, too much stimulation before
              bedtime (such as watching television, playing video games, or
              exercising), consuming too much caffeine, noise disturbances, an
              uncomfortable bedroom, or a feeling of excitement
            </div>
            <div>{/* <img src={angry} /> */}</div>
          </div>

          <div className="row mt-5 mb-5" id="about_container">
            <div className="col" id="about-details">
              <div className="card h-100" id="about-slide">
                <CCard color="dark" className="text-white h-100">
                  <CCardHeader className="quoteTopic">
                    Quote of the Day
                  </CCardHeader>
                  <CCardBody className="quoteText">
                    “In an agricultural society, or during a time of exploration
                    and settlement, or hunting and fathering–which is to say,
                    most of mankind’s history–energetic boys were particularly
                    prized for their strength, speed, and agility. […] As
                    recently as the 1950s, most families still had some kind of
                    agricultural connection. Many of these children, girls as
                    well as boys, would have been directing their energy and
                    physicality in constructive ways: doing farm chores, baling
                    hay, splashing in the swimming hole, climbing trees, racing
                    to the sandlot for a game of baseball. Their unregimented
                    play would have been steeped in nature.”
                  </CCardBody>
                  <div className="quote">
                    ― Richard Louv, Last Child in the Woods: Saving Our Children
                    from Nature-Deficit Disorder
                  </div>
                </CCard>
              </div>
            </div>
            <div className="col-6" id="about_card">
              <CCard>
                <CCarousel animate autoSlide={3000}>
                  <CCarouselIndicators />
                  <CCarouselInner>
                    <CCarouselItem>
                      <img
                        className="d-block w-100"
                        src={slides[0]}
                        alt="slide 1"
                        height="500"
                      />
                    </CCarouselItem>
                    <CCarouselItem>
                      <img
                        className="d-block w-100"
                        src={slides[1]}
                        alt="slide 2"
                        height="500"
                      />
                    </CCarouselItem>
                    <CCarouselItem>
                      <img
                        className="d-block w-100"
                        src={slides[2]}
                        alt="slide 3"
                        height="500"
                      />
                    </CCarouselItem>
                    <CCarouselItem>
                      <img
                        className="d-block w-100"
                        src={slides[3]}
                        alt="slide 3"
                        height="500"
                      />
                    </CCarouselItem>
                  </CCarouselInner>
                  <CCarouselControl direction="prev" />
                  <CCarouselControl direction="next" />
                </CCarousel>
              </CCard>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default About;
