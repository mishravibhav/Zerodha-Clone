import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer__container">
      <div className="Footer__subcontainer">
        <div className="Footer_top">
        <div className="Footer__column">
          <img src="https://zerodha.com/static/images/logo.svg" alt="logo" />
          <p style={{color:"#9b9b9b",fontSize:"15px"}}>© 2010 - 2021, Zerodha Broking Ltd.All rights reserved.</p>
          <p><i class="fas fa-phone-alt"></i> +91 80 4718 1888 </p>
          <p>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin"></i>
            <i class="fab fa-telegram"></i>
          </p>
        </div>

        <div className="Footer__column">
          <h4>Company</h4>
          <p><a className="Footer-Links" href="">About</a></p>
          <p><a className="Footer-Links" href="">Products</a></p>
          <p><a className="Footer-Links" href="">Pricing</a></p>
          <p><a className="Footer-Links" href="">Referral programme</a></p>
          <p><a className="Footer-Links" href="">Careers</a></p>
          <p><a className="Footer-Links" href="">Zerodha.tech</a></p>
          <p><a className="Footer-Links" href="">Press & media</a></p>
          <p><a className="Footer-Links" href="">Zerodha Cares (CSR)</a></p>
        </div>

        <div className="Footer__column">
          <h4>Support</h4>
          <p><a className="Footer-Links" href="">Contact</a></p>
          <p><a className="Footer-Links" href="">Support portal</a></p>
          <p><a className="Footer-Links" href="">Z-Connect blog</a></p>
          <p><a className="Footer-Links" href="">List of charges</a></p>
          <p><a className="Footer-Links" href="">Downloads & resources</a></p>
          <p><a className="Footer-Links" href="">Videos</a></p>
        </div>

        <div className="Footer__column">
          <h4>Account</h4>
          <p><a className="Footer-Links" href="">Open an account</a></p>
          <p><a className="Footer-Links" href="">Fund transfer</a></p>
          <p><a className="Footer-Links" href="">60 day challenge</a></p>
        </div>
        </div>
        <div className="footer_bottom">
            <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Broking Ltd. –
            SEBI Registration no.: IN-DP-431-2019 Commodity Trading through
            Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.:
            INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th
            Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
            Phase, Bengaluru - 560078, Karnataka, India. For any complaints
            pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
            </p>
            <br />
            <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name, PAN,
            Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
            Speedy redressal of the grievances
            </p>
            <br />
            <p>
            Investments in securities market are subject to market risks; read all
            the related documents carefully before investing.
            </p>
            <br />
            <p>
            Attention investors: 1) Stock brokers can accept securities as margins
            from clients only by way of pledge in the depository system w.e.f
            September 01, 2020. 2) Update your e-mail and phone number with your
            stock broker / depository participant and receive OTP directly from
            depository on your e-mail and/or mobile number to create pledge. 3)
            Check your securities / MF / bonds in the consolidated account
            statement issued by NSDL/CDSL every month.
            </p>
            <br />
            <p>
            "Prevent unauthorised transactions in your account. Update your mobile
            numbers/email IDs with your stock brokers. Receive information of your
            transactions directly from Exchange on your mobile/email at the end of
            the day. Issued in the interest of investors. KYC is one time exercise
            while dealing in securities markets - once KYC is done through a SEBI
            registered intermediary (broker, DP, Mutual Fund etc.), you need not
            undergo the same process again when you approach another
            intermediary." Dear Investor, if you are subscribing to an IPO, there
            is no need to issue a cheque. Please write the Bank account number and
            sign the IPO application form to authorize your bank to make payment
            in case of allotment. In case of non allotment the funds will remain
            in your bank account. As a business we don't give stock tips, and have
            not authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
