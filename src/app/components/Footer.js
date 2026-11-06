import "./Footer.css";

const LOGO =
  "https://cdn.prod.website-files.com/69372e47ab695bf5546b46ec/69388fa01bc6655a709f40a4_Logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="page-padding">
        <div className="container">
          <div className="wrap footer-wrap">

            {/* Footer top */}
            <div className="footer-top">

              {/* Logo column */}
              <div className="footer-col">
                <div className="footer-col-title is-first">
                  <h3 className="h6 mob-h8">(Get in touch)</h3>
                  <div className="footer-line is-top"></div>
                </div>

                <img
                  src={LOGO}
                  alt="ELYSE logo"
                  className="footer-logo"
                />
              </div>

              <div className="footer-right">

                {/* Location */}
                <div className="footer-col">
                  <div className="footer-col-title">
                    <h3 className="h6 mob-h8">(location)</h3>
                  </div>

                  <address className="is-location">
                    <div className="b1">
                      Cala Aurelia, Liguria, Italy
                    </div>
                  </address>
                </div>

                {/* Contact */}
                <div className="footer-col">
                  <div className="footer-col-title">
                    <h3 className="h6 mob-h8">(Contact)</h3>
                  </div>

                  <div className="contact-box">
                    <a
                      href="mailto:info@elyseresidence.com"
                      className="text-link-light"
                    >
                      <div className="h6 mob-h8">
                        info@elyseresidence.com
                      </div>
                    </a>

                    <a
                      href="tel:+3901874522900"
                      className="text-link-light"
                    >
                      <div className="h6 mob-h8">
                        +3901874522900
                      </div>
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Footer bottom */}
            <div className="footer-bottom">

              <div className="b4 mob-c1">
                ©<span>2025</span>. Elyse Residence. All rights reserved.
              </div>

              <div className="footer-right in-bottom">

                <a href="#" className="text-link-light-50">
                  <div className="b4 mob-c1">
                    Manage cookies
                  </div>
                </a>

                <a
                  href="https://phenomenonstudio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link-light-50 phenomenon-link"
                >
                  <div className="b4 mob-c1">Made by</div>

                  <div className="phenomenon-icon">
                    <svg
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.2278 6.09992C13.6699 6.42942 12.8375 6.92098 12.1159 7.54474L12.2317 7.82565C13.1838 7.75649 14.1207 7.51522 14.7484 7.35358C14.9456 7.3028 15.1122 7.25987 15.2394 7.23261C15.8427 7.10332 17.3311 7.05313 18 7.04425V10.9553C17.3311 10.9465 15.8427 10.8963 15.2394 10.7669C15.1122 10.7396 14.9452 10.6966 14.7476 10.6458C14.1201 10.4842 13.1838 10.2432 12.2324 10.174L12.1155 10.4549C12.8376 11.0791 13.6705 11.5709 14.2286 11.9004C14.4039 12.004 14.5522 12.0915 14.6613 12.1621C15.1793 12.4973 16.2673 13.5143 16.7465 13.981L13.9811 16.7465C13.5143 16.2673 12.4977 15.1791 12.1622 14.6612C12.0915 14.5519 12.0038 14.4035 11.9001 14.2278C11.5706 13.6699 11.079 12.8375 10.4553 12.1159L10.1741 12.2319C10.2432 13.1835 10.4842 14.1199 10.6458 14.7475C10.6967 14.9451 10.7397 15.1121 10.7669 15.2394C10.8964 15.8427 10.9461 17.3311 10.9553 18H7.04432C7.0532 17.3311 7.10339 15.8427 7.23268 15.2394C7.25994 15.1123 7.30287 14.9456 7.35366 14.7484C7.51527 14.1208 7.75648 13.184 7.82569 12.2321L7.54513 12.1154C6.92119 12.8371 6.42951 13.6697 6.09994 14.2278C5.99623 14.4034 5.90847 14.552 5.83781 14.6612C5.50273 15.1793 4.48572 16.2673 4.01894 16.7465L1.25346 13.981C1.7327 13.5143 2.82069 12.4975 3.33871 12.1621C3.44783 12.0915 3.59606 12.004 3.77143 11.9004C4.32938 11.571 5.16209 11.0793 5.88403 10.4553L5.76827 10.1746C4.81664 10.2437 3.88014 10.4848 3.25245 10.6464C3.05503 10.6972 2.88777 10.7402 2.76063 10.7675C2.15732 10.8969 0.668867 10.9471 0 10.9559V7.04485C0.668867 7.05373 2.15732 7.10393 2.76063 7.23322C2.88764 7.26047 3.05427 7.30338 3.25142 7.35414C3.87894 7.51574 4.81569 7.75696 5.76747 7.8262L5.88446 7.54503C5.16274 6.92112 4.33023 6.42947 3.7722 6.09992C3.59652 5.99616 3.44803 5.90847 3.33879 5.83778C2.82067 5.5027 1.73268 4.48569 1.25354 4.01891L4.01902 1.25341C4.4857 1.73265 5.5027 2.82065 5.83788 3.33867C5.90845 3.44779 5.99597 3.59602 6.09952 3.77139L7.82571 5.76817C7.75648 4.81616 7.51527 3.87957 7.35366 3.25163C7.30289 3.05448 7.25993 2.88766 7.23268 2.76064C7.10339 2.15733 7.0532 0.668872 7.04432 0H10.9553C10.9464 0.668872 10.8964 2.15733 10.7669 2.76064C10.7397 2.88779 10.696 3.05465 10.6459 3.25207C10.4844 3.87957 10.2432 4.81607 10.1741 5.76739L10.4551 5.88431C11.0792 5.1623 11.571 4.32943 11.9005 3.7714C12.004 3.59602 12.0915 3.44779 12.1621 3.33867C12.4973 2.82065 13.5143 1.73265 13.981 1.25341L16.7465 4.01891C16.2673 4.48569 15.1793 5.5028 14.6612 5.83778C14.5522 5.90847 14.4039 5.99616 14.2278 6.09992Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  <div className="b4 mob-c1">Phenomenon</div>
                </a>

              </div>

              <div className="footer-line"></div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}