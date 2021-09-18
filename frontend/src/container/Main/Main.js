import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Main.css";
import FirstView from "./FirstView.js";
import Contact from "./Contact.js";

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <FirstView />
      <div className="bg wrapper">
        <div className="main-contents">
          <div className="grids">
            <div data-aos="fade-up" className="boxes">
              <section id="nino-story">
                <div className="container">
                  <h2 className="nino-sectionHeading">
                    A Little Bit Of Information
                  </h2>
                  <p className="nino-sectionDesc">
                    <strong>
                      Artificial intelligence meeting minutes summary service
                    </strong>
                  </p>
                  <p className="nino-sectionDesc">
                    "인공지능 회의 요약 서비스" 서비스/ 기술 설명 등등
                    소개글"인공지능 회의 요약 서비스" 서비스/ 기술 설명 등등
                    소개글
                  </p>
                </div>
              </section>
            </div>

            <div data-aos="fade-in" className="boxes">
              <section id="nino-services">
                <div className="container">
                  <h2 className="nino-sectionHeading">Amazing Services</h2>
                  <div className="sectionContent">
                    <div className="fw" layout="row">
                      <div className="col-md-4 col-sm-6 item ">
                        <div layout="row">
                          <div>
                            <h4 class="nino-serviceTitle">Css/JS</h4>
                            <p>
                              Photography is the science, art and practice of
                              creating durable images by recording light or
                              other electromagnetic radiation
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 item ">
                        <div layout="row">
                          <i className="mdi mdi-blender nino-icon fsr"></i>
                          <div>
                            <h4 className="nino-serviceTitle">Web Design</h4>
                            <p>
                              Web design encompasses many different skills and
                              disciplines in the production and maintenance of
                              websites.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 item ">
                        <div layout="row">
                          <i className="mdi mdi-bookmark-plus-outline nino-icon fsr"></i>
                          <div>
                            <h4 className="nino-serviceTitle">Creativity</h4>
                            <p>
                              Creativity is a phenomenon whereby something new
                              and somehow valuable is formed. The created item
                              may be intangible or a physical object.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 item ">
                        <div layout="row">
                          <i className="mdi mdi-buffer nino-icon fsr"></i>
                          <div>
                            <h4 className="nino-serviceTitle">seo</h4>
                            <p>
                              Search engine optimization (SEO) is the process of
                              affecting the visibility of a website or a web
                              page in a web search engine's unpaid results.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 item ">
                        <div layout="row">
                          <i className="mdi mdi-desktop-mac nino-icon fsr"></i>
                          <div>
                            <h4 className="nino-serviceTitle">Css/Html</h4>
                            <p>
                              HyperText Markup Language, commonly abbreviated as
                              HTML, is the standard markup language used to
                              create web pages.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 item ">
                        <div layout="row">
                          <i className="mdi mdi-diamond nino-icon fsr"></i>
                          <div>
                            <h4 className="nino-serviceTitle">digital</h4>
                            <p>
                              With digital signals, system noise, provided it is
                              not too great, will not change the quantification
                              whereas with signals handled using analog
                              processing.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
