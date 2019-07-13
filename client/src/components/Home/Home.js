import React from "react";

function Home() {
  return (
    <div>
      <div id="wrapper">



        <section id="intro" className="intro">
          <div className="intro-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="wow fadeInDown" data-wow-offset="0" data-wow-delay="0.1s">
                    <h2 className="h-ultra">RX Reminder</h2>
                  </div>
                  <div className="wow fadeInUp" data-wow-offset="0" data-wow-delay="0.1s">
                    <h4 className="h-light">The smartest, easiest way to manage your medication</h4>
                  </div>
                  <div className="well well-trans">
                    <div className="wow fadeInRight" data-wow-delay="0.1s">

                      <ul className="lead-list">
                        <li><span className="fa fa-check fa-2x icon-success"></span> <span className="list"><strong>Simplify your life with RX Reminder</strong><br />RX Reminder makes it easy to manage all your meds like a PRO</span></li>
                        <li><span className="fa fa-check fa-2x icon-success"></span> <span className="list"><strong>It's quick and easy</strong><br />Set up any reminder schedule with all of our meds</span></li>
                        <li><span className="fa fa-check fa-2x icon-success"></span> <span className="list"><strong>Access to the FDA Database</strong><br />Search the FDA for side effects and interactions with your meds</span></li>
                      </ul>
                    </div>
                  </div>


                </div>
                <div className="col-lg-6">
                  <div className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                    <link href="#" rel="stylesheet" />
                    <img src={require("../../img/dummy/img-1.png")} className="img-responsive" alt="" />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id="boxes" className="home-section paddingtop-80">

          <div className="container">
            <div className="row">
              <div className="col-sm-3 col-md-3">
                <div className="wow fadeInUp" data-wow-delay="0.2s">
                  <div className="box text-center">

                    <i className="fa fa-check fa-3x circled bg-skin"></i>
                    <h4 className="h-bold">Never miss a dose</h4>
                    <p>
                      RX Reminder will send you a notification when it's time to take your pills.
            </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-md-3">
                <div className="wow fadeInUp" data-wow-delay="0.2s">
                  <div className="box text-center">

                    <i className="fa fa-list-alt fa-3x circled bg-skin"></i>
                    <h4 className="h-bold">Schedule your doses</h4>
                    <p>
                      Schedule your pill time via text message or email with a special note about the doses.
            </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-md-3">
                <div className="wow fadeInUp" data-wow-delay="0.2s">
                  <div className="box text-center">
                    <i className="fa fa-user-md fa-3x circled bg-skin"></i>
                    <h4 className="h-bold">Help by specialist</h4>
                    <p>
                      Contact a real doctor if you have any questions about taking a specific medicine.
            </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-md-3">
                <div className="wow fadeInUp" data-wow-delay="0.2s">
                  <div className="box text-center">

                    <i className="fa fa-hospital-o fa-3x circled bg-skin"></i>
                    <h4 className="h-bold">FDA access</h4>
                    <p>
                      Get more information on your pills, including side effects, via the FDA database.
            </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        

        <section id="service" className="home-section nopadding paddingtop-60">

          <div className="container">

            <div className="row">
              <div className="col-sm-6 col-md-6">
                <div className="wow fadeInUp" data-wow-delay="0.2s">
                  <img src={require("../../img//dummy/img-1.jpg")} className="img-responsive" alt="" />
                </div>
              </div>
              <div className="col-sm-3 col-md-3">

                <div className="wow fadeInRight" data-wow-delay="0.1s">
                  <div className="service-box">
                    <div className="service-icon">
                      <span className="fa fa-stethoscope fa-3x"></span>
                    </div>
                    <div className="service-desc">
                      <h5 className="h-light">Medical checkup</h5>
                      <p>Vestibulum tincidunt enim in pharetra malesuada.</p>
                    </div>
                  </div>
                </div>

                <div className="wow fadeInRight" data-wow-delay="0.2s">
                  <div className="service-box">
                    <div className="service-icon">
                      <span className="fa fa-wheelchair fa-3x"></span>
                    </div>
                    <div className="service-desc">
                      <h5 className="h-light">Nursing Services</h5>
                      <p>Vestibulum tincidunt enim in pharetra malesuada.</p>
                    </div>
                  </div>
                </div>
                <div className="wow fadeInRight" data-wow-delay="0.3s">
                  <div className="service-box">
                    <div className="service-icon">
                      <span className="fa fa-plus-square fa-3x"></span>
                    </div>
                    <div className="service-desc">
                      <h5 className="h-light">Pharmacy</h5>
                      <p>Vestibulum tincidunt enim in pharetra malesuada.</p>
                    </div>
                  </div>
                </div>


              </div>
              <div className="col-sm-3 col-md-3">

                <div className="wow fadeInRight" data-wow-delay="0.1s">
                  <div className="service-box">
                    <div className="service-icon">
                      <span className="fa fa-h-square fa-3x"></span>
                    </div>
                    <div className="service-desc">
                      <h5 className="h-light">Gyn Care</h5>
                      <p>Vestibulum tincidunt enim in pharetra malesuada.</p>
                    </div>
                  </div>
                </div>

                <div className="wow fadeInRight" data-wow-delay="0.2s">
                  <div className="service-box">
                    <div className="service-icon">
                      <span className="fa fa-filter fa-3x"></span>
                    </div>
                    <div className="service-desc">
                      <h5 className="h-light">Neurology</h5>
                      <p>Vestibulum tincidunt enim in pharetra malesuada.</p>
                    </div>
                  </div>
                </div>
                <div className="wow fadeInRight" data-wow-delay="0.3s">
                  <div className="service-box">
                    <div className="service-icon">
                      <span className="fa fa-user-md fa-3x"></span>
                    </div>
                    <div className="service-desc">
                      <h5 className="h-light">Sleep Center</h5>
                      <p>Vestibulum tincidunt enim in pharetra malesuada.</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>





        <section id="testimonial" className="home-section paddingbot-60 parallax" data-stellar-background-ratio="0.5">

          <div className="carousel-reviews broun-block">
            <div className="container">
              <div className="row">
                <div id="carousel-reviews" className="carousel slide" data-ride="carousel">

                  <div className="carousel-inner">
                    <div className="item active">
                      <div className="col-md-4 col-sm-6">
                        <div className="block-text rel zmin">
                          <a title="" href="#">Just what I need</a>
                          <div className="mark">My rating: <span className="rating-input"><span data-value="0" className="glyphicon glyphicon-star"></span><span data-value="1" className="glyphicon glyphicon-star"></span><span data-value="2" className="glyphicon glyphicon-star"></span><span data-value="3"
                            className="glyphicon glyphicon-star"></span><span data-value="4" className="glyphicon glyphicon-star"></span></span>
                          </div>
                          <p>I never thought that I would have memory problems at 25, but it turns out that I do! RX Reminder helps me remember to take my daily asthema medication.</p>
                          <ins className="ab zmin sprite sprite-i-triangle block"></ins>
                        </div>
                        <div className="person-text rel text-light">
                          <img src={require("../../img/testimonials/1.jpg")} alt="" className="person img-circle" />
                          <a title="" href="#">Hailey</a>
                          <span>Dallas, Texas</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 hidden-xs">
                        <div className="block-text rel zmin">
                          <a title="" href="#">A sense of relief</a>
                          <div className="mark">My rating: <span className="rating-input"><span data-value="0" className="glyphicon glyphicon-star"></span><span data-value="1" className="glyphicon glyphicon-star"></span><span data-value="2" className="glyphicon glyphicon-star"></span><span data-value="3"
                            className="glyphicon glyphicon-star"></span><span data-value="4" className="glyphicon glyphicon-star"></span></span>
                          </div>
                          <p>It was a blessing to find RX Reminder because I was able to set up my mom! Now, I don't have to call her daily to reminder her to take her heart pills!</p>
                          <ins className="ab zmin sprite sprite-i-triangle block"></ins>
                        </div>
                        <div className="person-text rel text-light">
                          <img src={require("../../img/testimonials/2.jpg")} alt="" className="person img-circle" />
                          <a title="" href="#">Matt</a>
                          <span>Fort Worth, Texas</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 hidden-sm hidden-xs">
                        <div className="block-text rel zmin">
                          <a title="" href="#">A saving grace</a>
                          <div className="mark">My rating: <span className="rating-input"><span data-value="0" className="glyphicon glyphicon-star"></span><span data-value="1" className="glyphicon glyphicon-star"></span><span data-value="2" className="glyphicon glyphicon-star"></span><span data-value="3"
                            className="glyphicon glyphicon-star"></span><span data-value="4" className="glyphicon glyphicon-star"></span></span>
                          </div>
                          <p>I take a lot of medications for my kidney problems, and RX Reminder helps me to keep track of what pills I need to take at certain times of the day.</p>
                          <ins className="ab zmin sprite sprite-i-triangle block"></ins>
                        </div>
                        <div className="person-text rel text-light">
                          <img src={require("../../img/testimonials/3.jpg")} alt="" className="person img-circle" />
                          <a title="" href="#">Amber</a>
                          <span>San Antonio, Texas</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="col-md-4 col-sm-6">
                        <div className="block-text rel zmin">
                          <a title="" href="#">Easy set up and use</a>
                          <div className="mark">My rating: <span className="rating-input"><span data-value="0" className="glyphicon glyphicon-star"></span><span data-value="1" className="glyphicon glyphicon-star"></span><span data-value="2" className="glyphicon glyphicon-star"></span><span data-value="3"
                            className="glyphicon glyphicon-star"></span><span data-value="4" className="glyphicon glyphicon-star"></span></span>
                          </div>
                          <p>RX Reminder was easy to set up and use. I just entered the medication that I needed, when to take it and what reminders I needed. It took care of the rest.</p>
                          <ins className="ab zmin sprite sprite-i-triangle block"></ins>
                        </div>
                        <div className="person-text rel text-light">
                          <img src={require("../../img/testimonials/4.jpg")} alt="" className="person img-circle" />
                          <a title="" href="#">Mike</a>
                          <span>Austin, Texas</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 hidden-xs">
                        <div className="block-text rel zmin">
                          <a title="" href="#">Such a life saver</a>
                          <div className="mark">My rating: <span className="rating-input"><span data-value="0" className="glyphicon glyphicon-star"></span><span data-value="1" className="glyphicon glyphicon-star"></span><span data-value="2" className="glyphicon glyphicon-star"></span><span data-value="3"
                            className="glyphicon glyphicon-star"></span><span data-value="4" className="glyphicon glyphicon-star"></span></span>
                          </div>
                          <p>This has been a life saver for my sister who has trouble remembering to take her pills. I searched around and found RX Reminder to be the best thing for her.</p>
                          <ins className="ab zmin sprite sprite-i-triangle block"></ins>
                        </div>
                        <div className="person-text rel text-light">
                          <img src={require("../../img/testimonials/5.jpg")} alt="" className="person img-circle" />
                          <a title="" href="#">Emily</a>
                          <span>Houston, Texas</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 hidden-sm hidden-xs">
                        <div className="block-text rel zmin">
                          <a title="" href="#">My independence is back</a>
                          <div className="mark">My rating: <span className="rating-input"><span data-value="0" className="glyphicon glyphicon-star"></span><span data-value="1" className="glyphicon glyphicon-star"></span><span data-value="2" className="glyphicon glyphicon-star"></span><span data-value="3"
                            className="glyphicon glyphicon-star"></span><span data-value="4" className="glyphicon glyphicon-star"></span><span data-value="5" className="glyphicon glyphicon-star"></span> </span>
                          </div>
                          <p>RX Reminder gives me a sense of independence when I'm at college because my mom isn't constantly calling me to remind me to take my pills!</p>
                          <ins className="ab zmin sprite sprite-i-triangle block"></ins>
                        </div>
                        <div className="person-text rel text-light">
                          <img src={require("../../img/testimonials/6.jpg")} alt="" className="person img-circle" />
                          <a title="" href="#">Sara</a>
                          <span>Norman, Oklahoma</span>
                        </div>
                      </div>
                    </div>


                  </div>

                  <a className="left carousel-control" href="#carousel-reviews" role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                  </a>
                  <a className="right carousel-control" href="#carousel-reviews" role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>





        <footer>

          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-8">
                <div className="wow fadeInDown" data-wow-delay="0.1s">
                  <div className="widget">
                    <h5>About RX Reminder</h5>
                    <p>
                      RX Reminder&reg; is the best reminder and health care manager you'll find on the market today. If you really want to stay on track, RX Reminder&reg; makes it easy to manage all your meds every day with our simple and easy reminder notifcations.
            </p>
                    <p>
                      Your scheduled SMS will help you remember to take your medications with reminders like, "Time to take your heart pills. Remember to eat something before!" In addition, you can schedule email reminders for daily dosing and routine refill reminders.
            </p>
                    <p>
                      If you are confused or have any questions, please call us at (800) DOCTORS and one of our experts will be able to help answer medication questions for you.
            </p>
                  </div>
                </div>

              </div>


              <div className="col-sm-6 col-md-4">
                <div className="wow fadeInDown" data-wow-delay="0.1s">
                  <div className="widget">
                    <h5>Our location</h5>
                    <p>1234 SMU Bootcamp Avenue <br /> Dallas, TX 75001</p>

                  </div>
                </div>
                <div className="widget">

                  <ul>
                    <li>
                      <span className="fa-stack fa-lg">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-calendar-o fa-stack-1x fa-inverse"></i>
                      </span> 24/7/365
            </li>
                    <li>
                      <span className="fa-stack fa-lg">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-phone fa-stack-1x fa-inverse"></i>
                      </span> (800) DOCTORS
            </li>
                    <li>
                      <span className="fa-stack fa-lg">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-envelope-o fa-stack-1x fa-inverse"></i>
                      </span> doctors@rxreminders.com
            </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="sub-footer">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <div className="wow fadeInLeft" data-wow-delay="0.1s">
                    <div className="text-left">
                      <p>&copy;RX Reminder&reg;</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <div className="wow fadeInRight" data-wow-delay="0.1s">
                    <div className="text-right">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default Home;
