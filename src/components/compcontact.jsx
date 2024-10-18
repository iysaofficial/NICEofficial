function CompContact() {
  return (
    <>
      {/* PAGE HEADER START */}
      <div className="all-title-box">
        <div className="container text-center">
          <h1>Kontak</h1>
          <br />
          <a href="/">Beranda</a>
        </div>
      </div>
      {/* PAGE HEADER END */}

      <section className="contact-section">
        <div id="contact" className="section wb">
          <div className="container">
            <div id="overviews" className="section wb">
              <div className="container">
                <div className="section-title row text-center">
                  <div className="col-md-8 offset-md-2">
                    <h1>Kontak Kami</h1>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className="wrapper">
                    <div className="inner-hmv">
                      <div className="text-center">
                        <i class="fa-solid fa-map-location-dot fa-5x mb-2"></i>
                      </div>
                      <h4 className="text-center">
                        <a
                          href="https://goo.gl/maps/muWqimWHYjAgWSaQ8"
                          target="_blank"
                        >
                          Jalan Kemang RT. 3 RW. 6, Pasir Putih Sawangan Kota
                          Depok, Jawa Barat 16511, Indonesia.
                        </a>
                      </h4>
                    </div>

                    <div className="inner-hmv">
                      <div className="text-center">
                        <i class="fa-solid fa-phone-volume fa-5x mb-2"></i>
                      </div>
                      <h5 className="text-center">
                        <a href="https://wa.me/6288213248890" target="_blank">
                          0882 - 1324 - 8890
                        </a>
                      </h5>
                      <h5 className="text-center">
                        <a href="https://wa.me/6281770914129" target="_blank">
                          0817 - 7091 - 4129
                        </a>
                      </h5>
                    </div>

                    <div className="inner-hmv">
                      <div className="text-center">
                        <i class="fa-regular fa-envelope fa-5x mb-2"></i>
                      </div>
                      <h5 className="text-center">
                        <a
                          href="mailto:niceofficial.iysa@gmail.com"
                          target="_blank"
                        >
                          niceofficial.iysa@gmail.com
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <form
                    action="https://formspree.io/f/xdoqlzwd"
                    method="POST"
                    id="contactForm"
                    data-sb-form-api-token="API_TOKEN"
                  >
                    <div class="row align-items-stretch mb-5">
                      <div class="col-md-6">
                        {/* Name input */}
                        <div class="form-group">
                          <input
                            class="form-control"
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Nama *"
                            required
                          />
                          <div
                            class="invalid-feedback"
                            data-sb-feedback="name:required"
                          >
                            A name is required.
                          </div>
                        </div>
                        {/* Email address input  */}
                        <div class="form-group">
                          <input
                            class="form-control"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Email *"
                            required
                          />
                          <div
                            class="invalid-feedback"
                            data-sb-feedback="email:required"
                          >
                            An email is required.
                          </div>
                          <div
                            class="invalid-feedback"
                            data-sb-feedback="email:email"
                          >
                            Email is not valid.
                          </div>
                        </div>
                        {/* Phone number input */}
                        <div class="form-group mb-md-0">
                          <input
                            class="form-control"
                            id="phone"
                            type="tel"
                            name="phone"
                            placeholder="Nomor Telepon *"
                            required
                          />
                          <div
                            class="invalid-feedback"
                            data-sb-feedback="phone:required"
                          >
                            A phone number is required.
                          </div>
                        </div>
                      </div>
                      {/* Message input */}
                      <div class="col-md-6">
                        <div class="form-group form-group-textarea mb-md-0">
                          <textarea
                            class="form-control"
                            id="message"
                            name="message"
                            placeholder="Pesan *"
                            required
                          ></textarea>
                          <div
                            class="invalid-feedback"
                            data-sb-feedback="message:required"
                          >
                            A message is required.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="d-none" id="submitErrorMessage">
                      <div class="text-center text-danger mb-3">
                        Error sending message!
                      </div>
                    </div>
                    {/* Submit Button */}
                    <div class="text-center">
                      <button
                        class="btn btn-action text-uppercase"
                        id="submitButton"
                        type="submit"
                      >
                        Kirim Pesan
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CompContact;
