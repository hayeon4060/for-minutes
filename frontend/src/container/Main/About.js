import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./About.css";
import Cards from "../Cards/Cards";

import OH_1 from "../../images/OH_1.jpg";
import OH_2 from "../../images/OH_2.jpg";
import OH_3 from "../../images/OH_3.PNG";
import PI_1 from "../../images/PI_1.PNG";
import PI_2 from "../../images/PI_2.PNG";
import PI_3 from "../../images/PI_3.PNG";
import HY from "../../images/HY.png";
import JJ from "../../images/JJ.jpg";
import TL from "../../images/TL.jpg";
import SJ from "../../images/SJ.jpg";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div>
        <div className="grids">
          <div data-aos="fade-up" className="boxes">
            <section id="nino-latestBlog">
              <div class="container">
                <h2 class="nino-sectionHeading">Our History</h2>
                <div class="sectionContent">
                  <div class="row">
                    <div class="col-md-4 col-sm-4">
                      <article>
                        <div class="articleThumb">
                          <img src={OH_1} alt="" />
                          <div class="date">
                            <span class="number">27</span>
                            <span class="text">Mar</span>
                          </div>
                        </div>
                        <h3 class="articleTitle">
                          <div>프로젝트 기획 발표</div>
                        </h3>
                        <p class="articleDesc">
                          인공지능 회의 요약 서비스 'For-Minutes' 기획 <br />{" "}
                          적용 기술에 대한 자료 수집
                        </p>
                      </article>
                    </div>
                    <div class="col-md-4 col-sm-4">
                      <article>
                        <div class="articleThumb">
                          <img src={OH_2} alt="" />
                          <div class="date">
                            <span class="number">6</span>
                            <span class="text">May</span>
                          </div>
                        </div>
                        <h3 class="articleTitle">
                          <div>프로젝트 진행 및 회의</div>
                        </h3>
                        <p class="articleDesc">
                          프로젝트의 전반적인 기반 구축과 각 담당 포지션
                          프로그래밍 진행
                        </p>
                      </article>
                    </div>
                    <div class="col-md-4 col-sm-4">
                      <article>
                        <div class="articleThumb">
                          <img src={OH_3} alt="" />
                          <div class="date">
                            <span class="number">21</span>
                            <span class="text">June</span>
                          </div>
                        </div>
                        <h3 class="articleTitle">
                          <div>캡스톤 1학기 가전시</div>
                        </h3>
                        <p class="articleDesc">프로젝트 진행 상황 발표</p>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div data-aos="fade-up" className="boxes">
            <section id="nino-story">
              <div class="container">
                <h2 class="nino-sectionHeading">Paticipate In</h2>
                <p class="nino-sectionDesc">
                  인공지능 회의 요약 서비스 "For-minutes"
                  <br />
                  참여 중인 프로젝트
                </p>
                <div class="sectionContent">
                  <div class="row nino-hoverEffect">
                    <div class="col-md-4 col-sm-4">
                      <div class="item">
                        <a class="overlay" href="#">
                          <span class="content">
                            <i class="mdi mdi-account-multiple nino-icon"></i>
                            덕성여자대학교 <br />
                            졸업 작품 프로젝트
                          </span>
                          <img src={PI_1} alt="" />
                        </a>
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-4">
                      <div class="item">
                        <a class="overlay" href="#">
                          <span class="content">
                            <i class="mdi mdi-image-filter-center-focus-weak nino-icon"></i>
                            한이음 ICT 멘토링
                          </span>
                          <img src={PI_2} alt="" />
                        </a>
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-4">
                      <div class="item">
                        <a class="overlay" href="#">
                          <span class="content">
                            <i class="mdi mdi-airplay nino-icon"></i>
                            공개SW 개발자대회
                          </span>
                          <img src={PI_3} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div data-aos="fade-right" className="boxes">
            <section id="work">
              <div class="container">
                <div class="row">
                  <div class="col-md-12 col-sm-12">
                    <div
                      class="wow fadeInUp section-title"
                      data-wow-delay="0.2s"
                    >
                      <h2 class="nino-sectionHeading">Team JDJS</h2>
                    </div>
                  </div>
                  <Cards />
                  <div
                    class="wow fadeInUp col-md-3 col-sm-6"
                    data-wow-delay="0.4s"
                  >
                    <div class="work-thumb">
                      <img
                        src={TL}
                        class="img-responsive"
                        alt="Work"
                        width="100%"
                      />
                    </div>
                    <h4>Frontend_LTR</h4>
                  </div>

                  <div
                    class="wow fadeInUp col-md-3 col-sm-6"
                    data-wow-delay="0.6s"
                  >
                    <div class="work-thumb">
                      <img
                        src={JJ}
                        class="img-responsive"
                        alt="Work"
                        width="100%"
                      />
                    </div>
                    <h4>Frontend_YJJ</h4>
                  </div>

                  <div
                    class="wow fadeInUp col-md-3 col-sm-6"
                    data-wow-delay="0.8s"
                  >
                    <div class="work-thumb">
                      <img
                        src={SJ}
                        class="img-responsive"
                        alt="Work"
                        width="100%"
                      />
                    </div>
                    <h4>Backend_KSJ</h4>
                  </div>

                  <div
                    class="wow fadeInUp col-md-3 col-sm-6"
                    data-wow-delay="0.8s"
                  >
                    <div class="work-thumb">
                      <img
                        src={HY}
                        class="img-responsive"
                        alt="Work"
                        width="100%"
                      />
                    </div>
                    <h4>Backend_LHY</h4>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div data-aos="fade-left" className="boxes">
            <section id="nino-happyClient">
              <div class="container">
                <h2 class="nino-sectionHeading">What we say</h2>
                <div class="sectionContent">
                  <div class="row">
                    <div class="col-md-6">
                      <div layout="row" class="item">
                        <div class="nino-avatar fsr">
                          <img class="img-circle" src={TL} alt="" />
                        </div>
                        <div class="info">
                          <h4 class="name">Lee Tae Rim</h4>
                          <span class="regency">Frontend</span>
                          <p class="desc">
                            이태림 말했잖아 언젠가 이런 날이 온다면 난 널 혼자
                            내버려두지 않을 거라고 죄다 낭떠러지야, 봐 예상했던
                            것보다 더 아플지도 모르지만 내 손을 잡으면 하늘을
                            나는 정도 그 이상도 느낄 수 있을 거야 눈 딱 감고
                            낙하- 하- 믿어 날 눈 딱 감고 낙하 눈 딱 감고 낙하-
                            하- 믿어 날 눈 딱 감고 낙하
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div layout="row" class="item">
                        <div class="nino-avatar fsr">
                          <img class="img-circle" src={JJ} alt="" />
                        </div>
                        <div class="info">
                          <h4 class="name">Yoo Jin Joo</h4>
                          <span class="regency">Frontend</span>
                          <p class="desc">
                            유진주 말했잖아 언젠가 이런 날이 온다면 난 널 혼자
                            내버려두지 않을 거라고 죄다 낭떠러지야, 봐 예상했던
                            것보다 더 아플지도 모르지만 내 손을 잡으면 하늘을
                            나는 정도 그 이상도 느낄 수 있을 거야 눈 딱 감고
                            낙하- 하- 믿어 날 눈 딱 감고 낙하 눈 딱 감고 낙하-
                            하- 믿어 날 눈 딱 감고 낙하
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div layout="row" class="item">
                        <div class="nino-avatar fsr">
                          <img class="img-circle" src={SJ} alt="" />
                        </div>
                        <div class="info">
                          <h4 class="name">Kang Su Ji</h4>
                          <span class="regency">Backend</span>
                          <p class="desc">
                            강수지 말했잖아 언젠가 이런 날이 온다면 난 널 혼자
                            내버려두지 않을 거라고 죄다 낭떠러지야, 봐 예상했던
                            것보다 더 아플지도 모르지만 내 손을 잡으면 하늘을
                            나는 정도 그 이상도 느낄 수 있을 거야 눈 딱 감고
                            낙하- 하- 믿어 날 눈 딱 감고 낙하 눈 딱 감고 낙하-
                            하- 믿어 날 눈 딱 감고 낙하
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div layout="row" class="item">
                        <div class="nino-avatar fsr">
                          <img class="img-circle" src={HY} alt="" />
                        </div>
                        <div class="info">
                          <h4 class="name">Lee Ha Yeon</h4>
                          <span class="regency">Backend</span>
                          <p class="desc">
                            이하연 말했잖아 언젠가 이런 날이 온다면 난 널 혼자
                            내버려두지 않을 거라고 죄다 낭떠러지야, 봐 예상했던
                            것보다 더 아플지도 모르지만 내 손을 잡으면 하늘을
                            나는 정도 그 이상도 느낄 수 있을 거야 눈 딱 감고
                            낙하- 하- 믿어 날 눈 딱 감고 낙하 눈 딱 감고 낙하-
                            하- 믿어 날 눈 딱 감고 낙하
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
