import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Story from "../components/Story";
import Ads from "../components/Ads";
import Footer from "../components/Footer";
import Chat from "../components/Chat";
import { NavLink } from "react-router-dom";
import $ from "jquery";

class Contact extends Component {
  componentDidMount() {
    $(".nav a").on("click", function() {
      $(".nav")
        .find(".active")
        .removeClass("active");
      $(this)
        .parent()
        .addClass("active");
    });
  }
  render() {
    return (
      <>
        <Navbar />
        <div>
          <Banner />
          <div className="row">
            <div className="col-3 mobile-xs-ver mobile-ver ipad-ver dacktop-md-ver p-4">
              <NavLink to="/">
                <div className="row pl-3 pb-2">
                  <div className="col-1" style={{ marginLeft: -60 }}></div>
                  <a
                    className="col font-size21"
                    style={{
                      color: "#7f8685",
                      textDecoration: "none",
                    }}
                  >
                    <img
                      src="/img/svg/home.svg"
                      className=""
                      style={{ width: 24 }}
                    />
                    &nbsp;&nbsp; หน้าหลัก
                  </a>
                </div>
              </NavLink>

              <NavLink to="/amuletlist">
                <div className="row pl-3 pb-2">
                  <div className="col-1" style={{ marginLeft: -60 }}></div>

                  <a
                    className="col font-size21 "
                    style={{ color: "#7f8685", textDecoration: "none" }}
                  >
                    <img
                      src="/img/svg/amulet-list.svg"
                      className=""
                      style={{ width: 24 }}
                    />
                    &nbsp;&nbsp; รายการพระเครื่อง
                  </a>
                </div>
              </NavLink>

              <NavLink to="/certificate">
                <div className="row pl-3 pb-2">
                  <div className="col-1" style={{ marginLeft: -60 }}></div>
                  <a
                    className="col font-size21 cl-dark-grey"
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      src="/img/svg/certificate.svg"
                      className=""
                      style={{ width: 24 }}
                    />
                    &nbsp;&nbsp; ตรวจสอบใบรับรอง
                  </a>
                </div>
              </NavLink>

              <NavLink to="/news">
              <div className="row pl-3 pb-2">
                <div className="col-1" style={{ marginLeft: -60 }}></div>
                <a
                  className="col font-size21 cl-dark-grey"
                  style={{ textDecoration: "none" }}
                  href="{{ url('/new') }}"
                >
                  <img
                    src="/img/svg/news.svg"
                    className=""
                    style={{ width: 24 }}
                  />
                  &nbsp;&nbsp; ข่าวสาร
                </a>
              </div>
              </NavLink>
              <NavLink to="/contact">
              <div className="row pl-3 pb-2">
                <div
                  className="col-1"
                  style={{ backgroundColor: "#d09b2c", marginLeft: -60 }}
                ></div>
                <a
                  className="col font-size21"
                  style={{ color: "#d09b2c", textDecoration: "none" }}
                  href="{{ url('/contact') }}"
                >
                  <img
                    src="/img/svg/contact2.svg"
                    className=""
                    style={{ width: 24 }}
                  />
                  &nbsp;&nbsp; ติดต่อเรา
                </a>
              </div>
              </NavLink>

              <NavLink to="/policy">
              <div className="row pl-3 pb-2 mb-4">
                <div className="col-1" style={{ marginLeft: -60 }}></div>
                <a
                  className="col font-size21 cl-dark-grey"
                  style={{ textDecoration: "none" }}
                  href="{{ url('/policys') }}"
                >
                  <img
                    src="/img/svg/policy.svg"
                    className=""
                    style={{ width: 24 }}
                  />
                  &nbsp;&nbsp; นโยบายและเงื่อนไข
                </a>
              </div>
              </NavLink>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-4">
              <div className="bg-light card-new">
                <div className="container text-center">
                  <h5
                    className="font-weight-bold "
                    style={{ fontSize: 24, padding: "30px 0 10px 0" }}
                  >
                    ติดต่อเรา
                  </h5>
                  <a style={{ fontSize: 15 }}>
                    บริษัท พระเครื่องเมืองไทย จำกัด
                    <br />
                    บริหารโดย โทน บางแค
                    <br />
                    <br />
                    บริการ รับเช่า-รับจัดหาพระเครื่อง พระบูชา เหรียญคณาจารย์
                    ยอดนิยมทุกชนิด
                    <br />
                    และของเก่าโบราณทุกประเภท ทั่วราชอาณาจักร ในราคายุติธรรม
                    <br />
                    บริการเอ็กซเรย์ ออกบัตรรับรองพระเครื่อง และ
                    หนังสือรับรองพระแท้
                  </a>
                  <hr />
                </div>
                <div className="container">
                  <div className="row pb-5">
                    <a
                      className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 font-weight-bold text-dark"
                      style={{ fontSize: 15 }}
                    >
                      ข้อมูลการติดต่อ
                    </a>
                    <a
                      className="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-2 text-dark"
                      style={{ fontSize: 15 }}
                    >
                      โทร
                    </a>
                    <a
                      className="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-10 text-dark"
                      style={{ fontSize: 15 }}
                    >
                      : 02-953-5587
                    </a>
                    <a
                      className="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-2 text-dark"
                      style={{ fontSize: 15 }}
                    >
                      Facebook
                    </a>
                    <a
                      className="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-10 text-dark"
                      style={{ fontSize: 15 }}
                    >
                      : https://facebook.com/โทน บางแค Fc
                    </a>
                    <a
                      className="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-2 text-dark"
                      style={{ fontSize: 15 }}
                    >
                      LineID
                    </a>
                    <a
                      className="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-10 text-dark"
                      style={{ fontSize: 15 }}
                    >
                      : @tone888
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3 mobile-xs-ver mobile-ver ipad-ver dacktop-md-ver p-4">
              <div className="">
                <b className="font-size18">วิดีโอถ่ายทอดสด</b>
                <div className="d-flex mt-3">
                  <i
                    className="far fa-play-circle text-light"
                    data-toggle="modal"
                    data-target="#liveModal"
                    style={{
                      marginTop: 45,
                      position: "absolute",
                      fontSize: 50,
                      opacity: 0.5,
                      margin: "50px 0 0 150",
                    }}
                  ></i>
                  <img
                    className="w-100"
                    src="/img/png/profile pic/Group 1054.png"
                    data-toggle="modal"
                    data-target="#liveModal"
                  />
                  <a
                    className="badge bg-danger text-light rounded-pill"
                    style={{ position: "absolute", margin: "1.25rem" }}
                  >
                    Live <i className="fas fa-caret-down"></i>
                  </a>
                </div>
                <div
                  className="card p-3 mt-3"
                  style={{ borderRadius: 10, color: "#7f8685" }}
                >
                  <b className="text-dark font-size15">
                    ตารางเวลาถ่ายทอดสดวิดีโอ
                  </b>
                  <hr />
                  <div className="row">
                    <h5 className="d-flex mr-2 font-size15">MON</h5>
                    <h5 className="col mr-2 badge rounded-pill font-weight-light bag-light-yellow">
                      10.00-11.00
                    </h5>
                    <h5 className="col badge rounded-pill font-weight-light bag-light-yellow">
                      19.00-20.00
                    </h5>
                  </div>
                  <div className="row">
                    <h5 className="d-flex mr-2 font-size15">TUE</h5>
                    <h5 className="col"></h5>
                    <h5 className="col badge rounded-pill font-weight-light bag-light-yellow">
                      19.00-20.00
                    </h5>
                  </div>
                  <div className="row">
                    <h5 className="d-flex mr-2 font-size15">WED</h5>
                    <h5 className="col mr-2 badge rounded-pill font-weight-light bag-light-yellow">
                      10.00-11.00
                    </h5>
                    <h5 className="col badge rounded-pill font-weight-light bag-light-yellow">
                      19.00-20.00
                    </h5>
                  </div>
                  <div className="row">
                    <h5 className="d-flex mr-2 font-size15">THU</h5>
                    <h5 className="col"></h5>
                    <h5 className="col badge rounded-pill font-weight-light bag-light-yellow">
                      19.00-20.00
                    </h5>
                  </div>
                  <div className="row">
                    <h5 className="d-flex mr-2 font-size15">FRI</h5>
                    <h5 className="col"></h5>
                    <h5 className="col badge rounded-pill font-weight-light bag-light-yellow">
                      19.00-20.00
                    </h5>
                  </div>
                  <div className="row">
                    <h5 className="d-flex mr-2 font-size15">SAT</h5>
                    <h5 className="col badge rounded-pill font-weight-light bag-light-yellow">
                      10.00-11.00
                    </h5>
                    <h5 className="col"></h5>
                  </div>
                  <div className="row">
                    <h5 className="d-flex mr-2 font-size15">SUN</h5>
                    <h5 className="col"></h5>
                    <h5 className="col badge rounded-pill font-weight-light bag-light-yellow">
                      19.00-20.00
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <Chat />
      </>
    );
  }
}

export default Contact;
