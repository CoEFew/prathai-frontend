import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Story from "../components/Story";
import Ads from "../components/Ads";
import Footer from "../components/Footer";
import Chat from "../components/Chat";
import { NavLink } from "react-router-dom";
import $ from "jquery";

class Main extends Component {
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
                  <div
                    className="col-1"
                    style={{ backgroundColor: "#d09b2c", marginLeft: -60 }}
                  ></div>
                  <a
                    className="col font-size21"
                    style={{
                      color: "#d09b2c",
                      textDecoration: "none",
                    }}
                  >
                    <img
                      src="/img/svg/home2.svg"
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
                    className="col font-size21 cl-dark-grey"
                    style={{ textDecoration: "none" }}
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
                    href="{{ url('/certificate') }}"
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
                  <div className="col-1" style={{ marginLeft: -60 }}></div>
                  <a
                    className="col font-size21 cl-dark-grey"
                    style={{ textDecoration: "none" }}
                    href="{{ url('/contact') }}"
                  >
                    <img
                      src="/img/svg/contact.svg"
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
              <Story />
              <div className="bg-light">
                <div className="container">
                  <div className="pt-3 mb-3">
                    <b className="font-size18">โพสต์ขายทางนี้</b>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2 col-xs-2 col-sm-2 col-md-1 col-lg-1 col-xl-1">
                    <img
                      src="/img/png/profile pic/Mask Group 2.png"
                      className="img-profile"
                    />
                  </div>
                  <div className="col-10 col-xs-10 col-sm-10 col-md-11 col-lg-11 col-xl-11">
                    <input
                      type="text"
                      className="form-control border w-100"
                      style={{ borderRadius: 10 }}
                      placeholder="คุณกำลังจะขายพระอะไร ?"
                    />
                    <a
                      className="btn rounded-pill text-light mt-3 mb-2"
                      style={{ backgroundColor: "#d09b2c", width: 170 }}
                    >
                      โพสต์
                    </a>
                  </div>
                </div>
                <hr />

                <nav className="text-center">
                  <div className="row nav nav-tabs" id="nav-tab" role="tablist">
                    <a
                      className="col nav-item nav-link nav-tabs-post active font-weight-bold"
                      id="nav-home-tab"
                      data-toggle="tab"
                      href="#nav-home"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      โพสต์ทั้งหมด
                    </a>
                    <a
                      className="col nav-item nav-link nav-tabs-post font-weight-bold"
                      id="nav-new-tab"
                      data-toggle="tab"
                      href="#nav-new"
                      role="tab"
                      aria-controls="nav-new"
                      aria-selected="false"
                    >
                      ข่าวสาร
                    </a>
                    <a
                      className="col nav-item nav-link nav-tabs-post font-weight-bold"
                      id="nav-contact-tab"
                      data-toggle="tab"
                      href="#nav-contact"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      ร้านพระที่ติดตาม
                    </a>
                    <a
                      className="col nav-item nav-link nav-tabs-post font-weight-bold"
                      id="nav-like-tab"
                      data-toggle="tab"
                      href="#nav-like"
                      role="tab"
                      aria-controls="nav-like"
                      aria-selected="false"
                    >
                      พระที่ถูกใจ
                    </a>
                  </div>
                </nav>
              </div>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div
                    className="bg-light card-new"
                    style={{ borderTopRightRadius: 0, borderTopLeftRadius: 0 }}
                  >
                    <div className="pt-3">
                      <div className="row">
                        <div className="col-2 col-xs-2 col-sm-2 col-md-1 col-lg-1 col-xl-1">
                          <img
                            src="/img/png/profile pic/Group 1079.png"
                            className="img-profile"
                          />
                        </div>
                        <div className="col-8 col-xs-8 col-sm-8 col-md-9 col-lg-9 col-xl-9">
                          <b className="font-size16">โทน บางแค FC</b>
                          &nbsp;&nbsp;
                          <a
                            className="font-size15"
                            style={{ color: "#d09b2c" }}
                          >
                            ติดตาม
                          </a>
                          <br />
                          <h5
                            className="font-size16"
                            style={{ color: "#a9aca7" }}
                          >
                            @Tone8888
                          </h5>
                          <h5
                            className="font-size13"
                            style={{ color: "#a9aca7", marginTop: -5 }}
                          >
                            3 ชั่วโมงก่อน
                          </h5>
                        </div>
                        <div className="col-2 col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 d-flex justify-content-end">
                          <img src="/img/svg/save.svg" style={{ width: 20 }} />
                          &nbsp;
                          <img src="/img/svg/other.svg" style={{ width: 20 }} />
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <p className="text-primary font-size15">#โทนบางแคFC</p>
                      <p
                        className="text-primary font-size15"
                        style={{ marginTop: -15 }}
                      >
                        #รับเช่าพระด้วยเงินสดให้ราคายุติธรรม
                      </p>
                      <p className="font-size15" style={{ marginTop: -15 }}>
                        <h5 className="font-size15">
                          สวัสดียามเช้าครับ ท่านที่กดรหัสจองเหรียญ
                          ทองคำฝังเพชรเข้ามาทั้ง5พิมพ์ วันนี้เวลา 12.00 น.
                          แอดมินจะเก็บยอดของทุกท่านให้ครบภายในวันนี้
                          หากมีเพิ่มเติมสามารถใส่รหัส A4-A5-A6-A7-A8
                          เข้ามาได้เลยนะครับ...
                        </h5>
                        <h5
                          className="font-size15"
                          style={{ color: "#d09b2c", marginTop: -10 }}
                        >
                          อ่านเพิ่มเติม
                        </h5>
                      </p>

                      <img
                        src="/img/jpeg/Post1.jpg"
                        style={{ width: "100%" }}
                        data-toggle="modal"
                        data-target="#contentModal"
                      />

                      <div className="row mt-3">
                        <div className="col-3">
                          <h5
                            className="font-size15"
                            style={{ color: "#a9aca7" }}
                          >
                            <img
                              src="/img/svg/like3.svg"
                              className="rounded-circle"
                              style={{ width: 25, backgroundColor: "#d09b2c" }}
                            />{" "}
                            2.9 หมื่น
                          </h5>
                        </div>
                        <div className="col d-flex justify-content-end">
                          <h5
                            className="font-size15"
                            style={{ color: "#a9aca7" }}
                          >
                            ความคิดเห็น 1.4 พัน รายการ แชร์ 4.7 พัน ครั้ง
                          </h5>
                        </div>
                      </div>
                      <hr style={{ marginTop: "0rem" }} />
                      <div className="row">
                        <div className="col">
                          <h5
                            className="font-size15"
                            style={{ color: "#a9aca7" }}
                          >
                            <img
                              src="/img/svg/like.svg"
                              className=""
                              style={{ width: 15 }}
                            />{" "}
                            ถูกใจ
                          </h5>
                        </div>
                        <div className="col d-flex justify-content-center">
                          <h5
                            className="font-size15"
                            style={{ color: "#a9aca7" }}
                          >
                            <i className="far fa-comment-alt"></i>{" "}
                            แสดงความคิดเห็น
                          </h5>
                        </div>
                        <div className="col d-flex justify-content-end">
                          <h5
                            className="font-size15"
                            style={{ color: "#a9aca7" }}
                          >
                            <i className="far fa-share-square"></i> แชร์
                          </h5>
                        </div>
                      </div>
                      <hr style={{ marginTop: 0 }} />
                      <h5
                        className="font-size15"
                        style={{ color: "#d09b2c", marginTop: -5 }}
                      >
                        ความคิดเห็นก่อนหน้า
                      </h5>
                      <div className="row">
                        <div
                          className="col-2 col-xs-2 col-sm-2 col-md-1 col-lg-1 col-xl-1"
                          style={{ padding: "0!important" }}
                        >
                          <img
                            src="/img/png/profile pic/Group 1084.png"
                            className="img-profile"
                          />
                        </div>
                        <div className="col-10 col-xs-10 col-sm-10 col-md-11 col-lg-11 col-xl-11">
                          <div
                            style={{
                              backgroundColor: "#f0ebe1",
                              borderRadius: 10,
                            }}
                          >
                            <div className="d-flex">
                              <b
                                className="font-size15"
                                style={{
                                  color: "#d09b2c",
                                  marginTop: 5,
                                  padding: "0.375rem",
                                }}
                              >
                                ออย' เด็กดื้อ
                              </b>{" "}
                              &nbsp; &nbsp;
                              <h5
                                className="font-size15"
                                style={{
                                  color: "#a9aca7",
                                  marginTop: 5,
                                  padding: "0.375rem",
                                }}
                              >
                                2 ชั่วโมงก่อน
                              </h5>
                            </div>
                            <h5
                              className="font-size15"
                              style={{ marginTop: -15, padding: "0.375rem" }}
                            >
                              ผมจะปล่อยหลวงพ่อคง แต่ติดต่อไม่ได้ครับ
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div
                          className="col-2 col-xs-2 col-sm-2 col-md-1 col-lg-1 col-xl-1"
                          style={{ padding: "0!important" }}
                        >
                          <img
                            src="/img/png/profile pic/Mask Group 2.png"
                            className="img-profile"
                          />
                        </div>
                        <div className="col-10 col-xs-10 col-sm-10 col-md-11 col-lg-11 col-xl-11 mt-1 mb-5">
                          <input
                            type="text"
                            className="form-control border-0 mt-1 "
                            style={{ backgroundColor: "#f0ebe1" }}
                            placeholder="เขียนความคิดเห็น..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-light card-new">
                    <div>
                      <div className="mt-3 pt-3">
                        <div className="row">
                          <div className="col-2 col-xs-2 col-sm-2 col-md-1 col-lg-1 col-xl-1">
                            <img
                              src="/img/png/profile pic/Group 1079.png"
                              className="img-profile"
                            />
                          </div>
                          <div className="col-8 col-xs-8 col-sm-8 col-md-9 col-lg-9 col-xl-9">
                            <b className="font-size16">โทน บางแค FC</b>
                            &nbsp;&nbsp;
                            <a
                              className="font-size15"
                              style={{ color: "#d09b2c" }}
                            >
                              ติดตาม
                            </a>
                            <br />
                            <h5
                              className="font-size16"
                              style={{ color: "#a9aca7" }}
                            >
                              @Tone8888
                            </h5>
                            <h5
                              className="font-size13"
                              style={{ color: "#a9aca7", marginTop: -5 }}
                            >
                              8 ชั่วโมงก่อน
                            </h5>
                          </div>
                          <div className="col-2 col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 d-flex justify-content-end">
                            <img
                              src="/img/svg/save.svg"
                              style={{ width: 20 }}
                            />
                            &nbsp;
                            <img
                              src="/img/svg/other.svg"
                              style={{ width: 20 }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="container">
                        <p className="text-primary font-size15">
                          #เหรียญนกยุงโภคทรัพย์ #ครูบาอริยชาติอริยะจิตโต
                        </p>
                        <p
                          className="text-primary font-size15"
                          style={{ marginTop: -15 }}
                        >
                          #4289 #6395 #เศรษฐีแสนล้าน
                        </p>
                        <p className="font-size15" style={{ marginTop: -15 }}>
                          <h5 className="font-size15">
                            ถ้าคุณรู้ความหมายStoriesเรื่องราววันข้างหน้าคุณจะเสียดาย
                          </h5>
                        </p>
                        <img
                          src="/img/jpeg/Post2.jpg"
                          style={{ width: "100%" }}
                        />
                        <div className="row mt-3">
                          <div className="col-3">
                            <h5
                              className="font-size15"
                              style={{ color: "#a9aca7" }}
                            >
                              <img
                                src="/img/svg/like3.svg"
                                className="rounded-circle"
                                style={{
                                  width: 25,
                                  backgroundColor: "#d09b2c",
                                }}
                              />{" "}
                              2.9 หมื่น
                            </h5>
                          </div>
                          <div className="col d-flex justify-content-end">
                            <h5
                              className="font-size15"
                              style={{ color: "#a9aca7" }}
                            >
                              ความคิดเห็น 1.4 พัน รายการ แชร์ 4.7 พัน ครั้ง
                            </h5>
                          </div>
                        </div>
                        <hr style={{ marginTop: "0rem" }} />
                        <div className="row">
                          <div className="col">
                            <h5
                              className="font-size15"
                              style={{ color: "#a9aca7" }}
                            >
                              <img
                                src="/img/svg/like.svg"
                                className=""
                                style={{ width: 15 }}
                              />{" "}
                              ถูกใจ
                            </h5>
                          </div>
                          <div className="col d-flex justify-content-center">
                            <h5
                              className="font-size15"
                              style={{ color: "#a9aca7" }}
                            >
                              <i className="far fa-comment-alt"></i>{" "}
                              แสดงความคิดเห็น
                            </h5>
                          </div>
                          <div className="col d-flex justify-content-end">
                            <h5
                              className="font-size15"
                              style={{ color: "#a9aca7" }}
                            >
                              <i className="far fa-share-square"></i> แชร์
                            </h5>
                          </div>
                        </div>
                        <hr style={{ marginTop: 0 }} />
                        <h5
                          className="font-size15"
                          style={{ color: "#d09b2c", marginTop: -5 }}
                        >
                          ความคิดเห็นก่อนหน้า
                        </h5>
                        <div className="row">
                          <div
                            className="col-2 col-xs-2 col-sm-2 col-md-1 col-lg-1 col-xl-1"
                            style={{ padding: "0!important" }}
                          >
                            <img
                              src="/img/png/profile pic/Mask Group 2.png"
                              className="img-profile"
                            />
                          </div>
                          <div className="col-10 col-xs-10 col-sm-10 col-md-11 col-lg-11 col-xl-11 mt-1 mb-5">
                            <input
                              type="text"
                              className="form-control border-0 mt-1"
                              style={{ backgroundColor: "#f0ebe1" }}
                              placeholder="เขียนความคิดเห็น..."
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-new"
                  role="tabpanel"
                  aria-labelledby="nav-new-tab"
                >
                  <div
                    className="bg-light card-new"
                    style={{ borderTopRightRadius: 0, borderTopLeftRadius: 0 }}
                  >
                    <div className="pt-3">
                      <div className="row">
                        <div className="col-2 col-xs-2 col-sm-2 col-md-1 col-lg-1 col-xl-1">
                          <img
                            src="/img/หน้า Home/Home - ข่าวสาร/รูปภาพ/png/Group 1584.png"
                            className="img-profile"
                          />
                        </div>
                        <div className="col-8 col-xs-8 col-sm-8 col-md-9 col-lg-9 col-xl-9">
                          <b className="font-size16">Meta Prathai Officiail</b>
                          &nbsp;&nbsp;
                          <a
                            className="font-size15"
                            style={{ color: "#d09b2c" }}
                          >
                            ติดตาม
                          </a>
                          <br />
                          <h5
                            className="font-size16"
                            style={{ color: "#a9aca7" }}
                          >
                            @MetaPraThai
                          </h5>
                          <h5
                            className="font-size13"
                            style={{ color: "#a9aca7", marginTop: -5 }}
                          >
                            3 ชั่วโมงก่อน
                          </h5>
                        </div>
                        <div className="col-2 col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 d-flex justify-content-end">
                          <img src="/img/svg/save.svg" style={{ width: 20 }} />
                          &nbsp;
                          <img src="/img/svg/other.svg" style={{ width: 20 }} />
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <p className="text-primary font-size15">
                        #ใบรับรองพระแท้ #ใบเซอร์ #ใบการันตีคุณภาพ
                      </p>
                      <p className="font-size15" style={{ marginTop: -15 }}>
                        <a className="font-size15">
                          ขอบคุณที่นำพระมาออกบัตรประเมินราคากับเรา ขอบคุณ
                          FCที่มาใช้บริการนะครับ วันนี้เปิดบริการนะครับ
                          ตรวจสอบพระออกบัตรพร้อมประเมินราคา ได้ภายในวันเดียว
                          11.0 น. ถึง 19.00 น. ยินดีต้อนรับ...
                        </a>
                        <a style={{ color: "#d09b2c" }}>อ่านเพิ่มเติม</a>
                      </p>
                      <img
                        src="/img/หน้า Home/Home - ข่าวสาร/รูปภาพ/jpeg/02hCb0.jpg"
                        style={{ width: "100%" }}
                      />
                      <div className="row mt-3">
                        <div className="col-3">
                          <h5
                            className="font-size15"
                            style={{ color: "#a9aca7" }}
                          >
                            <img
                              src="/img/svg/like3.svg"
                              className="rounded-circle"
                              style={{ width: 25, backgroundColor: "#d09b2c" }}
                            />{" "}
                            2.9 หมื่น
                          </h5>
                        </div>
                        <div className="col d-flex justify-content-end">
                          <h5
                            className="font-size15"
                            style={{ color: "#a9aca7" }}
                          >
                            ความคิดเห็น 1.4 พัน รายการ แชร์ 4.7 พัน ครั้ง
                          </h5>
                        </div>
                      </div>
                      <hr style={{ marginTop: "0rem" }} />
                      <div className="row">
                        <div className="col">
                          <h5
                            className="font-size15"
                            style={{ color: "#a9aca7" }}
                          >
                            <img
                              src="/img/svg/like.svg"
                              className=""
                              style={{ width: 15 }}
                            />{" "}
                            ถูกใจ
                          </h5>
                        </div>
                        <div className="col d-flex justify-content-center">
                          <h5
                            className="font-size15"
                            style={{ color: "#a9aca7" }}
                          >
                            <i className="far fa-comment-alt"></i>{" "}
                            แสดงความคิดเห็น
                          </h5>
                        </div>
                        <div className="col d-flex justify-content-end">
                          <h5
                            className="font-size15"
                            style={{ color: "#a9aca7" }}
                          >
                            <i className="far fa-share-square"></i> แชร์
                          </h5>
                        </div>
                      </div>
                      <hr style={{ marginTop: 0 }} />
                      <h5
                        className="font-size15"
                        style={{ color: "#d09b2c", marginTop: -5 }}
                      >
                        ความคิดเห็นก่อนหน้า
                      </h5>
                      <div className="row">
                        <div
                          className="col-2 col-xs-2 col-sm-2 col-md-1 col-lg-1 col-xl-1"
                          style={{ padding: "0!important" }}
                        >
                          <img
                            src="/img/png/profile pic/Group 1084.png"
                            className="img-profile"
                          />
                        </div>
                        <div className="col-10 col-xs-10 col-sm-10 col-md-11 col-lg-11 col-xl-11">
                          <div
                            style={{
                              backgroundColor: "#f0ebe1",
                              borderRadius: 10,
                            }}
                          >
                            <div className="d-flex">
                              <b
                                className="font-size15"
                                style={{
                                  color: "#d09b2c",
                                  marginTop: 5,
                                  padding: "0.375rem",
                                }}
                              >
                                ออย' เด็กดื้อ
                              </b>{" "}
                              &nbsp; &nbsp;
                              <h5
                                className="font-size15"
                                style={{
                                  color: "#a9aca7",
                                  marginTop: 5,
                                  padding: "0.375rem",
                                }}
                              >
                                2 ชั่วโมงก่อน
                              </h5>
                            </div>
                            <h5
                              className="font-size15"
                              style={{ marginTop: -15, padding: "0.375rem" }}
                            >
                              ขอบคุณครับ
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div
                          className="col-2 col-xs-2 col-sm-2 col-md-1 col-lg-1 col-xl-1"
                          style={{ padding: "0!important" }}
                        >
                          <img
                            src="/img/png/profile pic/Mask Group 2.png"
                            className="img-profile"
                          />
                        </div>
                        <div className="col-10 col-xs-10 col-sm-10 col-md-11 col-lg-11 col-xl-11 mt-1 mb-5">
                          <input
                            type="text"
                            className="form-control border-0 mt-1 "
                            style={{ backgroundColor: "#f0ebe1" }}
                            placeholder="เขียนความคิดเห็น..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-light card-new">
                    <div>
                      <div className="mt-3 pt-3">
                        <div className="row">
                          <div className="col-2 col-xs-2 col-sm-2 col-md-1 col-lg-1 col-xl-1">
                            <img
                              src="/img/หน้า Home/Home - ข่าวสาร/รูปภาพ/png/Group 1584.png"
                              className="img-profile"
                            />
                          </div>
                          <div className="col-8 col-xs-8 col-sm-8 col-md-9 col-lg-9 col-xl-9">
                            <b className="font-size16">
                              Meta Prathai Officiail
                            </b>
                            &nbsp;&nbsp;
                            <a
                              className="font-size15"
                              style={{ color: "#d09b2c" }}
                            >
                              ติดตาม
                            </a>
                            <br />
                            <h5
                              className="font-size16"
                              style={{ color: "#a9aca7" }}
                            >
                              @MetaPraThai
                            </h5>
                            <h5
                              className="font-size13"
                              style={{ color: "#a9aca7", marginTop: -5 }}
                            >
                              3 ชั่วโมงก่อน
                            </h5>
                          </div>
                          <div className="col-2 col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 d-flex justify-content-end">
                            <img
                              src="/img/svg/save.svg"
                              style={{ width: 20 }}
                            />
                            &nbsp;
                            <img
                              src="/img/svg/other.svg"
                              style={{ width: 20 }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="container">
                        <p className="font-size15">
                          <a className="font-size15">
                            สวัสดียามเช้าสามาชิกFCทุกท่านครับ
                            <br />
                            หากเรามีการวางแผนในการดำเนินชีวิต
                            ในทุกวินาทีของลมหายใจ ผมเชื่อว่า
                            ชีวิตคุณจะเปลี่ยนไปในทางที่ดีเสมอ
                            จงรักษาโอกาสเมื่อได้รับ
                            จงพัฒนาโอกาสใหม่ให้ดีกว่าเดิม ตลอดเวลา นั่นแหละ
                          </a>
                          <a style={{ color: "#d09b2c" }}>อ่านเพิ่มเติม</a>
                        </p>
                        <img
                          src="/img/หน้า Home/Home - ข่าวสาร/รูปภาพ/jpeg/l863qi.jpg"
                          style={{ width: "100%" }}
                        />
                        <div className="row mt-3">
                          <div className="col-3">
                            <h5
                              className="font-size15"
                              style={{ color: "#a9aca7" }}
                            >
                              <img
                                src="/img/svg/like3.svg"
                                className="rounded-circle"
                                style={{
                                  width: 25,
                                  backgroundColor: "#d09b2c",
                                }}
                              />{" "}
                              2.9 หมื่น
                            </h5>
                          </div>
                          <div className="col d-flex justify-content-end">
                            <h5
                              className="font-size15"
                              style={{ color: "#a9aca7" }}
                            >
                              ความคิดเห็น 1.4 พัน รายการ แชร์ 4.7 พัน ครั้ง
                            </h5>
                          </div>
                        </div>
                        <hr style={{ marginTop: "0rem" }} />
                        <div className="row">
                          <div className="col">
                            <h5
                              className="font-size15"
                              style={{ color: "#a9aca7" }}
                            >
                              <img
                                src="/img/svg/like.svg"
                                className=""
                                style={{ width: 15 }}
                              />{" "}
                              ถูกใจ
                            </h5>
                          </div>
                          <div className="col d-flex justify-content-center">
                            <h5
                              className="font-size15"
                              style={{ color: "#a9aca7" }}
                            >
                              <i className="far fa-comment-alt"></i>{" "}
                              แสดงความคิดเห็น
                            </h5>
                          </div>
                          <div className="col d-flex justify-content-end">
                            <h5
                              className="font-size15"
                              style={{ color: "#a9aca7" }}
                            >
                              <i className="far fa-share-square"></i> แชร์
                            </h5>
                          </div>
                        </div>
                        <hr style={{ marginTop: 0 }} />
                        <h5
                          className="font-size15"
                          style={{ color: "#d09b2c", marginTop: -5 }}
                        >
                          ความคิดเห็นก่อนหน้า
                        </h5>
                        <div className="row">
                          <div
                            className="col-2 col-xs-2 col-sm-2 col-md-1 col-lg-1 col-xl-1"
                            style={{ padding: "0!important" }}
                          >
                            <img
                              src="/img/png/profile pic/Mask Group 2.png"
                              className="img-profile"
                            />
                          </div>
                          <div className="col-10 col-xs-10 col-sm-10 col-md-11 col-lg-11 col-xl-11 mt-1 mb-5">
                            <input
                              type="text"
                              className="form-control border-0 mt-1"
                              style={{ backgroundColor: "#f0ebe1" }}
                              placeholder="เขียนความคิดเห็น..."
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  <div
                    className="bg-light card-new"
                    style={{ borderTopRightRadius: 0, borderTopLeftRadius: 0 }}
                  >
                    <div className="row">
                      <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-center">
                        <div
                          className="border p-4 mt-4 "
                          style={{ borderColor: "#a9aca7", borderRadius: 10 }}
                        >
                          <img
                            src="/img/หน้า Home/Home - ร้านพระที่ติดตาม/รูปภาพ/png/Group 228.png"
                            className="img-profile-follow"
                          />
                          <h5 className="font-size15 mt-4">
                            บอยท่า พระจันทร์ FC
                          </h5>
                          <h5
                            className="font-size15"
                            style={{ color: "#a9aca7" }}
                          >
                            @boythaphrachan
                          </h5>
                          <button
                            className="btn border rounded-pill"
                            style={{ color: "#a9aca7", borderColor: "#a9aca7" }}
                          >
                            กำลังติดตาม
                          </button>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-center">
                        <div
                          className="border p-4 mt-4 "
                          style={{ borderColor: "#a9aca7", borderRadius: 10 }}
                        >
                          <img
                            src="/img/หน้า Home/Home - ร้านพระที่ติดตาม/รูปภาพ/png/Group 231.png"
                            className="img-profile-follow"
                          />
                          <h5 className="font-size15 mt-4">
                            ร้านพระเครื่องนพเก้า
                          </h5>
                          <h5
                            className="font-size15"
                            style={{ color: "#a9aca7" }}
                          >
                            @Noppagao168
                          </h5>
                          <button
                            className="btn border rounded-pill"
                            style={{ color: "#a9aca7", borderColor: "#a9aca7" }}
                          >
                            กำลังติดตาม
                          </button>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-center">
                        <div
                          className="border p-4 mt-4"
                          style={{ borderColor: "#a9aca7", borderRadius: 10 }}
                        >
                          <img
                            src="/img/หน้า Home/Home - ร้านพระที่ติดตาม/รูปภาพ/png/Group 240.png"
                            className="img-profile-follow"
                          />
                          <h5 className="font-size15 mt-4">
                            หวานเจี๊ยบพระเครื่อง Fc.
                          </h5>
                          <h5
                            className="font-size15"
                            style={{ color: "#a9aca7" }}
                          >
                            @Waanjeab
                          </h5>
                          <button
                            className="btn border rounded-pill"
                            style={{ color: "#a9aca7", borderColor: "#a9aca7" }}
                          >
                            กำลังติดตาม
                          </button>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-center">
                        <div
                          className="border p-4 mt-4"
                          style={{ borderColor: "#a9aca7", borderRadius: 10 }}
                        >
                          <img
                            src="/img/หน้า Home/Home - ร้านพระที่ติดตาม/รูปภาพ/png/Group 234.png"
                            className="img-profile-follow"
                          />
                          <h5 className="font-size15 mt-4">
                            พระเครื่องเมืองไทย รับประกันแท้สากล
                          </h5>
                          <h5
                            className="font-size15"
                            style={{ color: "#a9aca7" }}
                          >
                            @Thaiamulet
                          </h5>
                          <button
                            className="btn border rounded-pill"
                            style={{ color: "#a9aca7", borderColor: "#a9aca7" }}
                          >
                            กำลังติดตาม
                          </button>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-center">
                        <div
                          className="border p-4 mt-4 "
                          style={{ borderColor: "#a9aca7", borderRadius: 10 }}
                        >
                          <img
                            src="/img/หน้า Home/Home - ร้านพระที่ติดตาม/รูปภาพ/png/Group 243.png"
                            className="img-profile-follow"
                          />
                          <h5 className="font-size15 mt-4">
                            พระเครื่องเรื่องสนุก
                          </h5>
                          <h5
                            className="font-size15"
                            style={{ color: "#a9aca7" }}
                          >
                            @delightfulamulets
                          </h5>
                          <button
                            className="btn border rounded-pill"
                            style={{ color: "#a9aca7", borderColor: "#a9aca7" }}
                          >
                            กำลังติดตาม
                          </button>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-center">
                        <div
                          className="border p-4 mt-4 "
                          style={{ borderColor: "#a9aca7", borderRadius: 10 }}
                        >
                          <img
                            src="/img/หน้า Home/Home - ร้านพระที่ติดตาม/รูปภาพ/png/Group 237.png"
                            className="img-profile-follow"
                          />
                          <h5 className="font-size15 mt-4">
                            นิยมพระแท้Byโจ้ พีหัง
                          </h5>
                          <h5
                            className="font-size15"
                            style={{ color: "#a9aca7" }}
                          >
                            @sathuamulet
                          </h5>
                          <button
                            className="btn border rounded-pill"
                            style={{ color: "#a9aca7", borderColor: "#a9aca7" }}
                          >
                            กำลังติดตาม
                          </button>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-center">
                        <div
                          className="border p-4 mt-4"
                          style={{ borderColor: "#a9aca7", borderRadius: 10 }}
                        >
                          <img
                            src="/img/หน้า Home/Home - ร้านพระที่ติดตาม/รูปภาพ/png/Group 221.png"
                            className="img-profile-follow"
                          />
                          <h5 className="font-size15 mt-4">คลองหกพระเครื่อง</h5>
                          <h5
                            className="font-size15"
                            style={{ color: "#a9aca7" }}
                          >
                            @Yaamulet
                          </h5>
                          <button
                            className="btn border rounded-pill"
                            style={{ color: "#a9aca7", borderColor: "#a9aca7" }}
                          >
                            กำลังติดตาม
                          </button>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-center mb-3">
                        <div
                          className="border p-4 mt-4"
                          style={{ borderColor: "#a9aca7", borderRadius: 10 }}
                        >
                          <img
                            src="/img/หน้า Home/Home - ร้านพระที่ติดตาม/รูปภาพ/png/Group 224.png"
                            className="img-profile-follow"
                          />
                          <h5 className="font-size15 mt-4">
                            ร้าน บ้านอยู่ดี มงคลอุดมลาภ
                          </h5>
                          <h5
                            className="font-size15"
                            style={{ color: "#a9aca7" }}
                          >
                            @Baan-yu-dee
                          </h5>
                          <button
                            className="btn border rounded-pill"
                            style={{ color: "#a9aca7", borderColor: "#a9aca7" }}
                          >
                            กำลังติดตาม
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-like"
                  role="tabpanel"
                  aria-labelledby="nav-like-tab"
                >
                  <div
                    className="bg-light card-new"
                    style={{ borderTopRightRadius: 0, borderTopLeftRadius: 0 }}
                  >
                    <div className="pt-3">
                      <div className="row">
                        <div className="col-2 col-xs-2 col-sm-2 col-md-1 col-lg-1 col-xl-1">
                          <img
                            src="/img/png/profile pic/Group 1079.png"
                            className="img-profile"
                          />
                        </div>
                        <div className="col-8 col-xs-8 col-sm-8 col-md-9 col-lg-9 col-xl-9">
                          <b className="font-size16">พระเมืองนนท์</b>
                          &nbsp;&nbsp;
                          <a
                            className="font-size15"
                            style={{ color: "#d09b2c" }}
                          >
                            ติดตาม
                          </a>
                          <br />
                          <h5
                            className="font-size16"
                            style={{ color: "#a9aca7" }}
                          >
                            @pramuangnon1
                          </h5>
                          <h5
                            className="font-size13"
                            style={{ color: "#a9aca7", marginTop: -5 }}
                          >
                            2 วันก่อน
                          </h5>
                        </div>
                        <div className="col-2 col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 d-flex justify-content-end">
                          <img src="/img/svg/save2.svg" style={{ width: 20 }} />
                          &nbsp;
                          <img src="/img/svg/other.svg" style={{ width: 20 }} />
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <p>"เหรียญหลวงปู่เปลี่ยน รุ่นแรก วัดใต้ ปี2472"</p>
                      <p>ท่านสามรถดูคลิปวิดีโอเพิ่มได้เพียงคลิ๊กที่ลิ้งค์</p>
                      <p className="text-primary mb-0 font-size15">
                        #https://youtube/1HUy3qtMoPM
                      </p>
                      <p className="text-primary mb-0 font-size15">
                        #เหรียญหลวงปู่เปลี่ยนรุ่นแรก
                      </p>
                      <p className="text-primary mb-0 font-size15">#วัดใต้</p>
                      <p className="text-primary mb-0 font-size15">
                        #หยิบกล้องส่งพระ
                      </p>
                      <p className="text-primary font-size15">#โทนบางแค</p>

                      <div className="row">
                        <img
                          className="col-6 p-1"
                          src="/img/หน้า Home/Home - พระที่ถูกใจ/รูปภาพ/jpeg/Group 150.jpg"
                          style={{ width: "100%" }}
                        />
                        <img
                          className="col-6 p-1"
                          src="/img/หน้า Home/Home - พระที่ถูกใจ/รูปภาพ/jpeg/Group 152.jpg"
                          style={{ width: "100%" }}
                        />
                        <img
                          className="col-6 p-1"
                          src="/img/หน้า Home/Home - พระที่ถูกใจ/รูปภาพ/jpeg/Group 154.jpg"
                          style={{ width: "100%" }}
                        />
                        <img
                          className="col-6 p-1"
                          src="/img/หน้า Home/Home - พระที่ถูกใจ/รูปภาพ/jpeg/Group 156.jpg"
                          style={{ width: "100%" }}
                        />
                      </div>

                      <div className="row mt-3">
                        <div className="col-3">
                          <h5
                            className="font-size15"
                            style={{ color: "#a9aca7" }}
                          >
                            <img
                              src="/img/svg/like3.svg"
                              className="rounded-circle"
                              style={{ width: 25, backgroundColor: "#d09b2c" }}
                            />{" "}
                            2.9 หมื่น
                          </h5>
                        </div>
                        <div className="col d-flex justify-content-end">
                          <h5
                            className="font-size15"
                            style={{ color: "#a9aca7" }}
                          >
                            ความคิดเห็น 1.4 พัน รายการ แชร์ 4.7 พัน ครั้ง
                          </h5>
                        </div>
                      </div>
                      <hr style={{ marginTop: "0rem" }} />
                      <div className="row">
                        <div className="col">
                          <h5
                            className="font-size15"
                            style={{ color: "#a9aca7" }}
                          >
                            <img
                              src="/img/svg/like.svg"
                              className=""
                              style={{ width: 15 }}
                            />{" "}
                            ถูกใจ
                          </h5>
                        </div>
                        <div className="col d-flex justify-content-center">
                          <h5
                            className="font-size15"
                            style={{ color: "#a9aca7" }}
                          >
                            <i className="far fa-comment-alt"></i>{" "}
                            แสดงความคิดเห็น
                          </h5>
                        </div>
                        <div className="col d-flex justify-content-end">
                          <h5
                            className="font-size15"
                            style={{ color: "#a9aca7" }}
                          >
                            <i className="far fa-share-square"></i> แชร์
                          </h5>
                        </div>
                      </div>
                      <hr style={{ marginTop: 0 }} />
                      <h5
                        className="font-size15"
                        style={{ color: "#d09b2c", marginTop: -5 }}
                      >
                        ความคิดเห็นก่อนหน้า
                      </h5>
                      <div className="row">
                        <div
                          className="col-2 col-xs-2 col-sm-2 col-md-1 col-lg-1 col-xl-1"
                          style={{ padding: "0!important" }}
                        >
                          <img
                            src="/img/png/profile pic/Mask Group 2.png"
                            className="img-profile"
                          />
                        </div>
                        <div className="col-10 col-xs-10 col-sm-10 col-md-11 col-lg-11 col-xl-11 mt-1 mb-5">
                          <input
                            type="text"
                            className="form-control border-0 mt-1 "
                            style={{ backgroundColor: "#f0ebe1" }}
                            placeholder="เขียนความคิดเห็น..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-light card-new">
                    <div>
                      <div className="mt-3 pt-3">
                        <div className="row">
                          <div className="col-2 col-xs-2 col-sm-2 col-md-1 col-lg-1 col-xl-1">
                            <img
                              src="/img/png/profile pic/Group 1079.png"
                              className="img-profile"
                            />
                          </div>
                          <div className="col-8 col-xs-8 col-sm-8 col-md-9 col-lg-9 col-xl-9">
                            <b className="font-size16">โทน บางแค FC</b>
                            &nbsp;&nbsp;
                            <a
                              className="font-size15"
                              style={{ color: "#d09b2c" }}
                            >
                              ติดตาม
                            </a>
                            <br />
                            <h5
                              className="font-size16"
                              style={{ color: "#a9aca7" }}
                            >
                              @Tone8888
                            </h5>
                            <h5
                              className="font-size13"
                              style={{ color: "#a9aca7", marginTop: -5 }}
                            >
                              8 ชั่วโมงก่อน
                            </h5>
                          </div>
                          <div className="col-2 col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 d-flex justify-content-end">
                            <img
                              src="/img/svg/save2.svg"
                              style={{ width: 20 }}
                            />
                            &nbsp;
                            <img
                              src="/img/svg/other.svg"
                              style={{ width: 20 }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="container">
                        <p className="font-size15">ช่วงนี้กำลังแรงครับ</p>
                        <p className="font-size15" style={{ marginTop: -15 }}>
                          หลวงพ่อรุ่งวัดท่ากระบือ ใครมีแบบนี้รับเช่านะครับ
                        </p>
                        <div className="row">
                          <img
                            className="col-6 p-1"
                            src="/img/หน้า Home/Home - พระที่ถูกใจ/รูปภาพ/jpeg/Group 150.jpg"
                            style={{ width: "100%" }}
                          />
                          <img
                            className="col-6 p-1"
                            src="/img/หน้า Home/Home - พระที่ถูกใจ/รูปภาพ/jpeg/Group 152.jpg"
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div className="row mt-3">
                          <div className="col-3">
                            <h5
                              className="font-size15"
                              style={{ color: "#a9aca7" }}
                            >
                              <img
                                src="/img/svg/like3.svg"
                                className="rounded-circle"
                                style={{
                                  width: 25,
                                  backgroundColor: "#d09b2c",
                                }}
                              />{" "}
                              2.9 หมื่น
                            </h5>
                          </div>
                          <div className="col d-flex justify-content-end">
                            <h5
                              className="font-size15"
                              style={{ color: "#a9aca7" }}
                            >
                              ความคิดเห็น 1.4 พัน รายการ แชร์ 4.7 พัน ครั้ง
                            </h5>
                          </div>
                        </div>
                        <hr style={{ marginTop: "0rem" }} />
                        <div className="row">
                          <div className="col">
                            <h5
                              className="font-size15"
                              style={{ color: "#a9aca7" }}
                            >
                              <img
                                src="/img/svg/like.svg"
                                className=""
                                style={{ width: 15 }}
                              />{" "}
                              ถูกใจ
                            </h5>
                          </div>
                          <div className="col d-flex justify-content-center">
                            <h5
                              className="font-size15"
                              style={{ color: "#a9aca7" }}
                            >
                              <i className="far fa-comment-alt"></i>{" "}
                              แสดงความคิดเห็น
                            </h5>
                          </div>
                          <div className="col d-flex justify-content-end">
                            <h5
                              className="font-size15"
                              style={{ color: "#a9aca7" }}
                            >
                              <i className="far fa-share-square"></i> แชร์
                            </h5>
                          </div>
                        </div>
                        <hr style={{ marginTop: 0 }} />
                        <h5
                          className="font-size15"
                          style={{ color: "#d09b2c", marginTop: -5 }}
                        >
                          ความคิดเห็นก่อนหน้า
                        </h5>
                        <div className="row">
                          <div
                            className="col-2 col-xs-2 col-sm-2 col-md-1 col-lg-1 col-xl-1"
                            style={{ padding: "0!important" }}
                          >
                            <img
                              src="/img/png/profile pic/Group 1084.png"
                              className="img-profile"
                            />
                          </div>
                          <div className="col-10 col-xs-10 col-sm-10 col-md-11 col-lg-11 col-xl-11">
                            <div
                              style={{
                                backgroundColor: "#f0ebe1",
                                borderRadius: 10,
                              }}
                            >
                              <div className="d-flex">
                                <b
                                  className="font-size15"
                                  style={{
                                    color: "#d09b2c",
                                    marginTop: 5,
                                    padding: "0.375rem",
                                  }}
                                >
                                  ออย' เด็กดื้อ
                                </b>{" "}
                                &nbsp; &nbsp;
                                <h5
                                  className="font-size15"
                                  style={{
                                    color: "#a9aca7",
                                    marginTop: 5,
                                    padding: "0.375rem",
                                  }}
                                >
                                  2 ชั่วโมงก่อน
                                </h5>
                              </div>
                              <h5
                                className="font-size15"
                                style={{ marginTop: -15, padding: "0.375rem" }}
                              >
                                แจ่มครับ
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div
                            className="col-2 col-xs-2 col-sm-2 col-md-1 col-lg-1 col-xl-1"
                            style={{ padding: "0!important" }}
                          >
                            <img
                              src="/img/png/profile pic/Mask Group 2.png"
                              className="img-profile"
                            />
                          </div>
                          <div className="col-10 col-xs-10 col-sm-10 col-md-11 col-lg-11 col-xl-11 mt-1 mb-5">
                            <input
                              type="text"
                              className="form-control border-0 mt-1"
                              style={{ backgroundColor: "#f0ebe1" }}
                              placeholder="เขียนความคิดเห็น..."
                            />
                          </div>
                        </div>
                      </div>
                    </div>
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
                <hr
                  className="mt-4 rounded"
                  style={{ borderWidth: 2, backgroundColor: "#c3c1bd" }}
                />
              </div>
              <div>
                <b className="font-size18">ตามหาพระ</b>
                <form className="mt-3">
                  <div className="form-row">
                    <div className="col-12 mb-2">
                      <select
                        className="custom-select my-1 mr-sm-2 rounded-pill"
                        id="inlineFormCustomSelectPref"
                      >
                        <option selected>เลือกจากพระเภทพระ</option>
                        <option value="1">พระบูชา</option>
                        <option value="2">พระกรุ</option>
                        <option value="3">เครื่องราง</option>
                        <option value="4">พระรูปหล่อ</option>
                        <option value="5">พระปิดตา</option>
                        <option value="6">เหรียญหล่อ</option>
                        <option value="7">พระกรึ่ง พระชัย</option>
                        <option value="8">พระอื่นๆ</option>
                      </select>
                    </div>
                    <div className="col-12 mb-2">
                      <input
                        type="text"
                        className="form-control rounded-pill"
                        placeholder="ชื่อพระเครื่อง / ร้านพระ"
                      />
                    </div>
                    <div className="col-6 mb-2">
                      <select
                        className="custom-select my-1 mr-sm-2 rounded-pill"
                        id="inlineFormCustomSelectPref"
                      >
                        <option selected>ราคา</option>
                        <option value="1">100-999</option>
                        <option value="2">1000-1499</option>
                        <option value="3">1500-5000</option>
                      </select>
                    </div>
                    <div className="col-6 mb-2">
                      <select
                        className="custom-select my-1 mr-sm-2 rounded-pill"
                        id="inlineFormCustomSelectPref"
                      >
                        <option selected>จังหวัด</option>
                        <option value="1">กรุงเทพ</option>
                        <option value="2">ระนอง</option>
                        <option value="3">ระยอง</option>
                        <option value="3">ยะลา</option>
                      </select>
                    </div>
                  </div>
                </form>
                <button
                  className="btn text-light rounded-pill col-12"
                  style={{ backgroundColor: "#d09b2c" }}
                >
                  ค้นหาพระ
                </button>
                <hr
                  className="mt-4 rounded"
                  style={{ borderWidth: 2, backgroundColor: "#c3c1bd" }}
                />
              </div>
              <div>
                <div className="mt-3 mb-2">
                  <b className="font-size18">ร้านที่คุณอาจจะถูกใจ</b>
                </div>

                <div className="row mb-3">
                  <div className="d-flex">
                    <img
                      src="/img/png/profile pic/Group 1058.png"
                      className="img-profile"
                    />
                  </div>
                  <div className="col">
                    <b className="font-size15">บอย ท่าพระจันทร์ FC</b>
                    <h5 className="font-size14" style={{ color: "#a9aca7" }}>
                      @boythaphrachan
                    </h5>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn bg-light rounded-pill font-size15"
                      style={{ color: "#d09b2c,borderColor: #d09b2c" }}
                    >
                      ติดตาม
                    </button>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="d-flex">
                    <img
                      src="/img/png/profile pic/Group 1060.png"
                      className="img-profile"
                    />
                  </div>
                  <div className="col">
                    <b className="font-size15">ร้านพระเครื่องนพเก้า</b>
                    <h5 className="font-size14" style={{ color: "#a9aca7" }}>
                      @Noppagao168
                    </h5>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn bg-light rounded-pill font-size15"
                      style={{ color: "#d09b2c,borderColor: #d09b2c" }}
                    >
                      ติดตาม
                    </button>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="d-flex">
                    <img
                      src="/img/png/profile pic/Group 1062.png"
                      className="img-profile"
                    />
                  </div>
                  <div className="col">
                    <a
                      className="font-size15 font-weight-bold text-dark"
                      style={{ textDecoration: "none" }}
                      href="{{ url('/follows') }}"
                    >
                      พระเครื่องเรื่องสนุก
                    </a>
                    <h5 className="font-size14" style={{ color: "#a9aca7" }}>
                      @delightfulamulets
                    </h5>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn bg-light rounded-pill font-size15"
                      style={{ color: "#d09b2c,borderColor: #d09b2c" }}
                    >
                      ติดตาม
                    </button>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <a
                    className="font-size15"
                    style={{ color: "#d09b2c" }}
                    href="#"
                  >
                    ดูเพิ่มเติม <i className="fas fa-caret-down"></i>
                  </a>
                </div>

                <hr
                  className="mt-4 rounded"
                  style={{ borderWidth: 2, backgroundColor: "#c3c1bd" }}
                />
              </div>
              <div>
                <div className="mt-3 mb-2">
                  <b className="font-size18">พระยอดนิยม</b>
                </div>

                <h5
                  className="mb-4 font-size18"
                  style={{ color: "#d09b2c" }}
                >
                  #พระบูชา
                </h5>
                <h5 className="mb-4 font-size18" style={{ color: "#d09b2c" }}>
                  #เครื่องราง
                </h5>
                <h5 className="mb-4 font-size18" style={{ color: "#d09b2c" }}>
                  #รูปหล่อ
                </h5>
                <div className="d-flex justify-content-end">
                  <a
                    className="font-size15"
                    style={{ color: "#d09b2c" }}
                    href="#"
                  >
                    ดูเพิ่มเติม <i className="fas fa-caret-down"></i>
                  </a>
                </div>
                <hr
                  className="mt-4 rounded"
                  style={{ borderWidth: 2, backgroundColor: "#c3c1bd" }}
                />
              </div>
              <Ads />
            </div>
          </div>
        </div>
        <Footer />
        <Chat />
      </>
    );
  }
}

export default Main;
