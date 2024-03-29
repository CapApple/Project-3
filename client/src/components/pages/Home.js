import React from "react";
import Auth from "../Auth";
function Home() {
  return (
    <div>
      <div id="wrapper">

        <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
          <div class="top-area">
            <div class="container">
              <div class="row">
                <div class="col-sm-6 col-md-6">
                  <p class="bold text-left">Contact Your RX Reminder Experts</p>
                </div>
                <div class="col-sm-6 col-md-6">
                  <p class="bold text-right">Call 24/7 at (800) DOCTORS </p>
                </div>
              </div>
            </div>
          </div>
          <div class="container navigation">

            <div class="navbar-header page-scroll">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                <i class="fa fa-bars"></i>
              </button>
              <a class="navbar-brand" href="index.html">
                <img src={require("../../img/rxr.png")} alt="" width="150" height="40" />
              </a>
            </div>

           
    <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
              <ul class="nav navbar-nav">
                <li class="active"><a href="#intro">Home</a></li>
                <li><a href="#service">Service</a></li>
                <li><a href="#testimonial">Testimonials</a></li>
               <li> <Auth /> </li>
              </ul>
            </div>
          </div>
        </nav>

       
<section id="intro" class="intro">
          <div class="intro-content"> 
            <div class="container">
              <div class="row">
                <div class="col-lg-6">
                  <div class="wow fadeInDown" data-wow-offset="0" data-wow-delay="0.1s">
                    <h2 class="h-ultra">RX Reminder</h2>
                  </div>
                  <div class="wow fadeInUp" data-wow-offset="0" data-wow-delay="0.1s">
                    <h4 class="h-light">The smartest, easiest way to manage your medication</h4>
                </div>
                <div class="well well-trans">
                  <div class="wow fadeInRight" data-wow-delay="0.1s">

                    <ul class="lead-list">
                      <li><span class="fa fa-check fa-2x icon-success"></span> <span class="list"><strong>Simplify your life with RX Reminder</strong><br />RX Reminder makes it easy to manage all your meds like a PRO</span></li>
                      <li><span class="fa fa-check fa-2x icon-success"></span> <span class="list"><strong>It's quick and easy</strong><br />Set up any reminder schedule with all of our meds</span></li>
                      <li><span class="fa fa-check fa-2x icon-success"></span> <span class="list"><strong>Access to the FDA Database</strong><br />Search the FDA for side effects and interactions with your meds</span></li>
                    </ul>
                  </div>
                </div>


              </div>
              <div class="col-lg-6">
                <div class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                  <link href="#" rel="stylesheet" />
                    <img src={require("../../img/dummy/img-1.png")} class="img-responsive" alt="" />
                  
          </div>
                </div>
              </div>
            </div>
          </div>
        </section>


<section id="boxes" class="home-section paddingtop-80">

          <div class="container">
            <div class="row">
              <div class="col-sm-3 col-md-3">
                <div class="wow fadeInUp" data-wow-delay="0.2s">
                  <div class="box text-center">

                    <i class="fa fa-check fa-3x circled bg-skin"></i>
                    <h4 class="h-bold">Never miss a dose</h4>
                    <p>
                      RX Reminder will send you a notification when it's time to take your pills.
            </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-3 col-md-3">
                <div class="wow fadeInUp" data-wow-delay="0.2s">
                  <div class="box text-center">

                    <i class="fa fa-list-alt fa-3x circled bg-skin"></i>
                    <h4 class="h-bold">Schedule your doses</h4>
                    <p>
                      Schedule your pill time via text message or email with a special note about the doses.
            </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-3 col-md-3">
                <div class="wow fadeInUp" data-wow-delay="0.2s">
                  <div class="box text-center">
                    <i class="fa fa-user-md fa-3x circled bg-skin"></i>
                    <h4 class="h-bold">Help by specialist</h4>
                    <p>
                      Contact a real doctor if you have any questions about taking a specific medicine.
            </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-3 col-md-3">
                <div class="wow fadeInUp" data-wow-delay="0.2s">
                  <div class="box text-center">

                    <i class="fa fa-hospital-o fa-3x circled bg-skin"></i>
                    <h4 class="h-bold">FDA access</h4>
                    <p>
                      Get more information on your pills, including side effects, via the FDA database.
            </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>           

<section id="testimonial" class="home-section paddingbot-60 parallax" data-stellar-background-ratio="0.5">

                      <div class="carousel-reviews broun-block">
                        <div class="container">
                          <div class="row">
                            <div id="carousel-reviews" class="carousel slide" data-ride="carousel">

                              <div class="carousel-inner">
                                <div class="item active">
                                  <div class="col-md-4 col-sm-6">
                                    <div class="block-text rel zmin">
                                      <a title="" href="#">Just what I need</a>
                                      <div class="mark">My rating: <span class="rating-input"><span data-value="0" class="glyphicon glyphicon-star"></span><span data-value="1" class="glyphicon glyphicon-star"></span><span data-value="2" class="glyphicon glyphicon-star"></span><span data-value="3"
                                        class="glyphicon glyphicon-star"></span><span data-value="4" class="glyphicon glyphicon-star"></span></span>
                                      </div>
                                      <p>I never thought that I would have memory problems at 25, but it turns out that I do! RX Reminder helps me remember to take my daily asthema medication.</p>
                                      <ins class="ab zmin sprite sprite-i-triangle block"></ins>
                                    </div>
                                    <div class="person-text rel text-light">
                                      <img src={require("../../img/testimonials/1.jpg")} alt="" class="person img-circle" />
                                      <a title="" href="#">Hailey</a>
                                      <span>Dallas, Texas</span>
                                    </div>
                                  </div>
                                  <div class="col-md-4 col-sm-6 hidden-xs">
                                    <div class="block-text rel zmin">
                                      <a title="" href="#">A sense of relief</a>
                                      <div class="mark">My rating: <span class="rating-input"><span data-value="0" class="glyphicon glyphicon-star"></span><span data-value="1" class="glyphicon glyphicon-star"></span><span data-value="2" class="glyphicon glyphicon-star"></span><span data-value="3"
                                        class="glyphicon glyphicon-star"></span><span data-value="4" class="glyphicon glyphicon-star"></span></span>
                                      </div>
                                      <p>It was a blessing to find RX Reminder because I was able to set up my mom! Now, I don't have to call her daily to reminder her to take her heart pills!</p>
                                      <ins class="ab zmin sprite sprite-i-triangle block"></ins>
                                    </div>
                                    <div class="person-text rel text-light">
                                      <img src={require("../../img/testimonials/2.jpg")} alt="" class="person img-circle" />
                                      <a title="" href="#">Matt</a>
                                      <span>Fort Worth, Texas</span>
                                    </div>
                                  </div>
                                  <div class="col-md-4 col-sm-6 hidden-sm hidden-xs">
                                    <div class="block-text rel zmin">
                                      <a title="" href="#">A saving grace</a>
                                      <div class="mark">My rating: <span class="rating-input"><span data-value="0" class="glyphicon glyphicon-star"></span><span data-value="1" class="glyphicon glyphicon-star"></span><span data-value="2" class="glyphicon glyphicon-star"></span><span data-value="3"
                                        class="glyphicon glyphicon-star"></span><span data-value="4" class="glyphicon glyphicon-star"></span></span>
                                      </div>
                                      <p>I take a lot of medications for my kidney problems, and RX Reminder helps me to keep track of what pills I need to take at certain times of the day.</p>
                                      <ins class="ab zmin sprite sprite-i-triangle block"></ins>
                                    </div>
                                    <div class="person-text rel text-light">
                                      <img src={require("../../img/testimonials/3.jpg")} alt="" class="person img-circle" />
                                      <a title="" href="#">Amber</a>
                                      <span>San Antonio, Texas</span>
                                    </div>
                                  </div>
                                </div>
                                <div class="item">
                                  <div class="col-md-4 col-sm-6">
                                    <div class="block-text rel zmin">
                                      <a title="" href="#">Easy set up and use</a>
                                      <div class="mark">My rating: <span class="rating-input"><span data-value="0" class="glyphicon glyphicon-star"></span><span data-value="1" class="glyphicon glyphicon-star"></span><span data-value="2" class="glyphicon glyphicon-star"></span><span data-value="3"
                                        class="glyphicon glyphicon-star"></span><span data-value="4" class="glyphicon glyphicon-star"></span></span>
                                      </div>
                                      <p>RX Reminder was easy to set up and use. I just entered the medication that I needed, when to take it and what reminders I needed. It took care of the rest.</p>
                                      <ins class="ab zmin sprite sprite-i-triangle block"></ins>
                                    </div>
                                    <div class="person-text rel text-light">
                                      <img src={require("../../img/testimonials/4.jpg")} alt="" class="person img-circle" />
                                      <a title="" href="#">Mike</a>
                                      <span>Austin, Texas</span>
                                    </div>
                                  </div>
                                  <div class="col-md-4 col-sm-6 hidden-xs">
                                    <div class="block-text rel zmin">
                                      <a title="" href="#">Such a life saver</a>
                                      <div class="mark">My rating: <span class="rating-input"><span data-value="0" class="glyphicon glyphicon-star"></span><span data-value="1" class="glyphicon glyphicon-star"></span><span data-value="2" class="glyphicon glyphicon-star"></span><span data-value="3"
                                        class="glyphicon glyphicon-star"></span><span data-value="4" class="glyphicon glyphicon-star"></span></span>
                                      </div>
                                      <p>This has been a life saver for my sister who has trouble remembering to take her pills. I searched around and found RX Reminder to be the best thing for her.</p>
                                      <ins class="ab zmin sprite sprite-i-triangle block"></ins>
                                    </div>
                                    <div class="person-text rel text-light">
                                      <img src={require("../../img/testimonials/5.jpg")} alt="" class="person img-circle" />
                                      <a title="" href="#">Emily</a>
                                      <span>Houston, Texas</span>
                                    </div>
                                  </div>
                                  <div class="col-md-4 col-sm-6 hidden-sm hidden-xs">
                                    <div class="block-text rel zmin">
                                      <a title="" href="#">My independence is back</a>
                                      <div class="mark">My rating: <span class="rating-input"><span data-value="0" class="glyphicon glyphicon-star"></span><span data-value="1" class="glyphicon glyphicon-star"></span><span data-value="2" class="glyphicon glyphicon-star"></span><span data-value="3"
                                        class="glyphicon glyphicon-star"></span><span data-value="4" class="glyphicon glyphicon-star"></span><span data-value="5" class="glyphicon glyphicon-star"></span> </span>
                                      </div>
                                      <p>RX Reminder gives me a sense of independence when I'm at college because my mom isn't constantly calling me to remind me to take my pills!</p>
                                      <ins class="ab zmin sprite sprite-i-triangle block"></ins>
                                    </div>
                                    <div class="person-text rel text-light">
                                      <img src={require("../../img/testimonials/6.jpg")} alt="" class="person img-circle" />
                                      <a title="" href="#">Sara</a>
                                      <span>Norman, Oklahoma</span>
                                    </div>
                                  </div>
                                </div>


                              </div>

                              <a class="left carousel-control" href="#carousel-reviews" role="button" data-slide="prev">
                                <span class="glyphicon glyphicon-chevron-left"></span>
                              </a>
                              <a class="right carousel-control" href="#carousel-reviews" role="button" data-slide="next">
                                <span class="glyphicon glyphicon-chevron-right"></span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  
                    
                    
                    
                    
<footer>

                      <div class="container">
                        <div class="row">
                          <div class="col-sm-6 col-md-8">
                            <div class="wow fadeInDown" data-wow-delay="0.1s">
                              <div class="widget">
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


                          <div class="col-sm-6 col-md-4">
                            <div class="wow fadeInDown" data-wow-delay="0.1s">
                              <div class="widget">
                                <h5>Our location</h5>
                                <p>1234 SMU Bootcamp Avenue <br/> Dallas, TX 75001</p>

          </div>
                              </div>
                              <div class="widget">

                                <ul>
                                  <li>
                                    <span class="fa-stack fa-lg">
                                      <i class="fa fa-circle fa-stack-2x"></i>
                                      <i class="fa fa-calendar-o fa-stack-1x fa-inverse"></i>
                                    </span> 24/7/365
            </li>
                                  <li>
                                    <span class="fa-stack fa-lg">
                                      <i class="fa fa-circle fa-stack-2x"></i>
                                      <i class="fa fa-phone fa-stack-1x fa-inverse"></i>
                                    </span> (800) DOCTORS
            </li>
                                  <li>
                                    <span class="fa-stack fa-lg">
                                      <i class="fa fa-circle fa-stack-2x"></i>
                                      <i class="fa fa-envelope-o fa-stack-1x fa-inverse"></i>
                                    </span> doctors@rxreminders.com
            </li>

                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="sub-footer">
                          <div class="container">
                            <div class="row">
                              <div class="col-sm-6 col-md-6 col-lg-6">
                                <div class="wow fadeInLeft" data-wow-delay="0.1s">
                                  <div class="text-left">
                                    <p>&copy;RX Reminder&reg;</p>
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-6 col-md-6 col-lg-6">
                                <div class="wow fadeInRight" data-wow-delay="0.1s">
                                  <div class="text-right">

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
