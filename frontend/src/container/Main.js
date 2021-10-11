import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "../component/Header.js";
import Footer from "../component/Footer.js";
import "./Main.css";
import Navigation from "../component/Navigation.js";

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Navigation />
      <div>
        <div className="grids">
          <div data-aos="fade-in" className="boxes">
            <section id="nino-services">
              <div class="container">
                <div class="sectionContent">
                  <div class="fw" layout="row">
                    <a href="/post">
                      <button class="snip1535">Get Started</button>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div data-aos="fade-up" className="boxes">
            <section id="nino-story">
              <div class="container">
                <h2 class="nino-sectionHeading">A Little Bit Of Information</h2>
                <p class="nino-sectionDesc">
                  <strong>
                    Artificial intelligence meeting minutes summary service
                  </strong>
                </p>
                <p class="nino-sectionDesc">
                  "인공지능 회의 요약 서비스" 서비스/ 기술 설명 등등
                  소개글"인공지능 회의 요약 서비스" 서비스/ 기술 설명 등등
                  소개글
                </p>
              </div>
            </section>
          </div>

          <div data-aos="fade-in" className="boxes">
            <section id="nino-services">
              <div class="container">
                <h2 class="nino-sectionHeading">Amazing Services</h2>
                <div class="sectionContent">
                  <div class="fw" layout="row">
                    <div class="col-md-4 col-sm-6 item ">
                      <div layout="row">
                        <img
                          src="https://cdn.icon-icons.com/icons2/2066/PNG/512/instagram_icon_125245.png"
                          width="10%"
                          height="10%"
                        ></img>
                        <div>
                          <h4 class="nino-serviceTitle">Css/Html</h4>
                          <p>
                            Photography is the science, art and practice of
                            creating durable images by recording light or other
                            electromagnetic radiation
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-6 item ">
                      <div layout="row">
                        <i class="mdi mdi-blender nino-icon fsr"></i>
                        <div>
                          <h4 class="nino-serviceTitle">Web Design</h4>
                          <p>
                            Web design encompasses many different skills and
                            disciplines in the production and maintenance of
                            websites.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-6 item ">
                      <div layout="row">
                        <i class="mdi mdi-bookmark-plus-outline nino-icon fsr"></i>
                        <div>
                          <h4 class="nino-serviceTitle">Creativity</h4>
                          <p>
                            Creativity is a phenomenon whereby something new and
                            somehow valuable is formed. The created item may be
                            intangible or a physical object.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-6 item ">
                      <div layout="row">
                        <i class="mdi mdi-buffer nino-icon fsr"></i>
                        <div>
                          <h4 class="nino-serviceTitle">seo</h4>
                          <p>
                            Search engine optimization (SEO) is the process of
                            affecting the visibility of a website or a web page
                            in a web search engine's unpaid results.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-6 item ">
                      <div layout="row">
                        <i class="mdi mdi-desktop-mac nino-icon fsr"></i>
                        <div>
                          <h4 class="nino-serviceTitle">Css/Html</h4>
                          <p>
                            HyperText Markup Language, commonly abbreviated as
                            HTML, is the standard markup language used to create
                            web pages.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-6 item ">
                      <div layout="row">
                        <i class="mdi mdi-diamond nino-icon fsr"></i>
                        <div>
                          <h4 class="nino-serviceTitle">digital</h4>
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
          <div data-aos="fade-left" className="boxes">
            <section id="contact">
              <div class="container">
                <div class="row">
                  <div class="col-md-12 col-sm-12">
                    <div
                      class="wow fadeInUp section-title"
                      data-wow-delay="0.2s"
                    >
                      <h2 class="nino-sectionHeading">Contact Us</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur venenatis
                        tincidunt.
                      </p>
                    </div>
                  </div>

                  <div class="col-md-12 col-sm-12">
                    <div class="wow fadeInUp" data-wow-delay="0.6s">
                      <form id="contact-form">
                        <div class="col-md-4 col-sm-4">
                          <input
                            type="text"
                            class="form-control"
                            name="name"
                            placeholder="Name"
                          />
                        </div>
                        <div class="col-md-4 col-sm-4">
                          <input
                            type="email"
                            class="form-control"
                            name="email"
                            placeholder="Email"
                          />
                        </div>
                        <div class="col-md-4 col-sm-4">
                          <input
                            type="text"
                            class="form-control"
                            name="name"
                            placeholder="Subject"
                          />
                        </div>
                        <div class="col-md-12 col-sm-12">
                          <textarea
                            class="form-control"
                            rows="5"
                            name="message"
                            placeholder="Message"
                          ></textarea>
                        </div>
                        <div class="col-md-offset-9 col-md-3 col-sm-offset-3 col-sm-6">
                          <button
                            id="submit"
                            type="submit"
                            class="form-control"
                            name="submit"
                          >
                            Send Message
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
