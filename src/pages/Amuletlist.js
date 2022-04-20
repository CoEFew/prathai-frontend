import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Story from "../components/Story";
import Ads from "../components/Ads";
import Footer from "../components/Footer";
import Chat from "../components/Chat";
import { NavLink } from "react-router-dom";
import $ from "jquery";

class Amuletlist extends Component {
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
                  <div
                    className="col-1"
                    style={{ backgroundColor: "#d09b2c", marginLeft: -60 }}
                  ></div>

                  <a
                    className="col font-size21 "
                    style={{ color: "#d09b2c", textDecoration: "none" }}
                  >
                    <img
                      src="/img/svg/amulet-list2.svg"
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
              <div className="bg-light card-new">
                <div>
                  <div>
                    <h5
                      className="font-weight-bold text-center"
                      style={{ fontSize: 24, padding: "30px 0 10px 0" }}
                    >
                      รายการพระเครื่อง
                    </h5>
                  </div>
                  <div className="mobile-xs-ver mobile-ver">
                    <div className="row text-center p-4 ">
                      <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <button
                          className="btn rounded-pill text-light w-100 mb-2"
                          style={{ backgroundColor: "#d09a2d" }}
                        >
                          พระบูชา
                        </button>
                      </div>
                      <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <button className="btn rounded-pill text-secondary border bg-light w-100 mb-2">
                          พระกรุ
                        </button>
                      </div>
                      <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <button className="btn rounded-pill text-secondary border bg-light w-100 mb-2">
                          เครื่องราง
                        </button>
                      </div>
                      <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <button className="btn rounded-pill text-secondary border bg-light w-100 mb-2">
                          พระรูปหล่อ
                        </button>
                      </div>
                      <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <button className="btn rounded-pill text-secondary border bg-light w-100 mb-2">
                          พระปิดตา
                        </button>
                      </div>
                      <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <button className="btn rounded-pill text-secondary border bg-light w-100 mb-2">
                          เหรียญหล่อ
                        </button>
                      </div>
                      <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <button className="btn rounded-pill text-secondary border bg-light w-100 mb-2">
                          พระกริ่ง พระชัย
                        </button>
                      </div>
                      <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <button className="btn rounded-pill text-secondary border bg-light w-100 mb-2">
                          พระอื่นๆ
                        </button>
                      </div>
                    </div>
                  </div>

                  <div
                    id="demo"
                    className="mb-3 ipad-ver dacktop-md-ver dacktop-lg-ver dacktop-xl-ver"
                  >
                    <div className="">
                      <div className="row">
                        <div className="span12">
                          <div id="owl-example" className="owl-carousel">
                            <div className="col-12 p-1">
                              <button
                                className="btn rounded-pill text-light w-100 mb-2"
                                style={{ backgroundColor: "#d09a2d" }}
                              >
                                พระบูชา
                              </button>
                            </div>
                            <div className="col-12 p-1">
                              <button className="btn rounded-pill text-secondary border bg-light w-100 mb-2">
                                พระกรุ
                              </button>
                            </div>
                            <div className="col-12 p-1">
                              <button className="btn rounded-pill text-secondary border bg-light w-100 mb-2">
                                เครื่องราง
                              </button>
                            </div>
                            <div className="col-12 p-1">
                              <button className="btn rounded-pill text-secondary border bg-light w-100 mb-2">
                                พระรูปหล่อ
                              </button>
                            </div>
                            <div className="col-12 p-1">
                              <button className="btn rounded-pill text-secondary border bg-light w-100 mb-2">
                                พระปิดตา
                              </button>
                            </div>
                            <div className="col-12 p-1">
                              <button className="btn rounded-pill text-secondary border bg-light w-100 mb-2">
                                เหรียญหล่อ
                              </button>
                            </div>
                            <div className="col-12 p-1">
                              <button className="btn rounded-pill text-secondary border bg-light w-100 mb-2">
                                พระกริ่ง พระชัย
                              </button>
                            </div>
                            <div className="col-12 p-1">
                              <button className="btn rounded-pill text-secondary border bg-light w-100 mb-2">
                                พระอื่นๆ
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-light card-new">
                <div className="row p-4">
                  <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 mb-2">
                    <img
                      src="/img/หน้า รายการพระเครื่อง/รูปภาพ/png/Group 773.png"
                      className="w-100"
                    />
                  </div>
                  <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                    <div className="row">
                      <div className="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 pl-0">
                        <img
                          src="/img/หน้า รายการพระเครื่อง/รูปภาพ/png/Group 775.png"
                          className="img-profile"
                        />
                      </div>
                      <div className="col-8 col-sm-10 col-md-10 col-lg-10 col-xl-10 pl-0">
                        <h5 style={{ fontSize: 15 }}>บอย ท่าพระจัทน์ FC</h5>
                        <h5
                          className="text-secondary"
                          style={{ fontSize: 15, marginTop: -8 }}
                        >
                          @boythaphrachan
                        </h5>
                        <h5
                          className="text-secondary"
                          style={{ fontSize: 13, marginTop: -8 }}
                        >
                          10 ตุลาคม 2021
                        </h5>
                      </div>
                    </div>
                    <div className="py-3">
                      <h5 style={{ fontSize: 15 }}>
                        <a
                          className="badge text-light"
                          style={{ backgroundColor: "#d09a2d" }}
                        >
                          พระบูชา
                        </a>
                        <a>
                          ภปร. 2058 หน้าตัก 9 นิ้ว (บล๊อกดินไทย
                          เสริมยุคแรกเท่านั้น) ศิลปะแห่งยุคใน
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row p-4">
                  <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 mb-2">
                    <img
                      src="/img/หน้า รายการพระเครื่อง/รูปภาพ/png/Group 777.png"
                      className="w-100"
                    />
                  </div>
                  <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                    <div className="row">
                      <div className="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 pl-0">
                        <img
                          src="/img/หน้า รายการพระเครื่อง/รูปภาพ/png/Group 779.png"
                          className="img-profile"
                        />
                      </div>
                      <div className="col-8 col-sm-10 col-md-10 col-lg-10 col-xl-10 pl-0">
                        <h5 style={{ fontSize: 15 }}>ร้านพระเครื่องนพเก้า</h5>
                        <h5
                          className="text-secondary"
                          style={{ fontSize: 15, marginTop: -8 }}
                        >
                          @Noppagao68
                        </h5>
                        <h5
                          className="text-secondary"
                          style={{ fontSize: 13, marginTop: -8 }}
                        >
                          5 กุมภาพันธ์ 2021
                        </h5>
                      </div>
                    </div>
                    <div className="py-3">
                      <h5 style={{ fontSize: 15 }}>
                        <a
                          className="badge text-light"
                          style={{ backgroundColor: "#d09a2d" }}
                        >
                          พระบูชา
                        </a>
                        <a>หลวงพ่อพัฒน์ รุ่น ฉลอง 100 ปี ขนาด 5 นิ้ว</a>
                      </h5>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row p-4">
                  <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 mb-2">
                    <img
                      src="/img/หน้า รายการพระเครื่อง/รูปภาพ/png/Group 787.png"
                      className="w-100"
                    />
                  </div>
                  <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                    <div className="row">
                      <div className="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 pl-0">
                        <img
                          src="/img/หน้า รายการพระเครื่อง/รูปภาพ/png/Group 797.png"
                          className="img-profile"
                        />
                      </div>
                      <div className="col-8 col-sm-10 col-md-10 col-lg-10 col-xl-10 pl-0">
                        <h5 style={{ fontSize: 15 }}>พระเครื่องเรื่องสนุก</h5>
                        <h5
                          className="text-secondary"
                          style={{ fontSize: 15, marginTop: -8 }}
                        >
                          @delightfulamulets
                        </h5>
                        <h5
                          className="text-secondary"
                          style={{ fontSize: 13, marginTop: -8 }}
                        >
                          24 ธันวาคม 2020
                        </h5>
                      </div>
                    </div>
                    <div className="py-3">
                      <h5 style={{ fontSize: 15 }}>
                        <a
                          className="badge text-light"
                          style={{ backgroundColor: "#d09a2d" }}
                        >
                          พระพุทธรูปบูชา
                        </a>
                        <a>
                          ยุครัชกาลปางสมาธิ เนื้อแดงธรรมชาติ เกศบัวตูมนิยม
                          พระหนาหล่อศิลป์สวย บัวเด้ง ดินไทยเดิมๆ มาตรฐานครับ
                          ขนาดหน้าตัก 5 นิ้วหย่อน
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row p-4">
                  <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 mb-2">
                    <img
                      src="/img/หน้า รายการพระเครื่อง/รูปภาพ/png/Group 789.png"
                      className="w-100"
                    />
                  </div>
                  <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                    <div className="row">
                      <div className="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 pl-0">
                        <img
                          src="/img/หน้า รายการพระเครื่อง/รูปภาพ/png/Group 791.png"
                          className="img-profile"
                        />
                      </div>
                      <div className="col-8 col-sm-10 col-md-10 col-lg-10 col-xl-10 pl-0">
                        <h5 style={{ fontSize: 15 }}>พระเครื่องเมืองกรุง</h5>
                        <h5
                          className="text-secondary"
                          style={{ fontSize: 15, marginTop: -8 }}
                        >
                          @ByTaeHello
                        </h5>
                        <h5
                          className="text-secondary"
                          style={{ fontSize: 13, marginTop: -8 }}
                        >
                          18 กันยายน 2020
                        </h5>
                      </div>
                    </div>
                    <div className="py-3">
                      <h5 style={{ fontSize: 15 }}>
                        <a
                          className="badge text-light"
                          style={{ backgroundColor: "#d09a2d" }}
                        >
                          พระพุทธรูปบูชา
                        </a>
                        <a>
                          ภปร วัดบวรนิเวศวิหาร ปี 2508 บล็อกหนังไก่ หน้าตัก 5
                          นิ้ว (ที่สุดของพระบูชา ภปร. วัดบวร)
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row p-4">
                  <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 mb-2">
                    <img
                      src="/img/หน้า รายการพระเครื่อง/รูปภาพ/png/Group 793.png"
                      className="w-100"
                    />
                  </div>
                  <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                    <div className="row">
                      <div className="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 pl-0">
                        <img
                          src="/img/หน้า รายการพระเครื่อง/รูปภาพ/png/Group 795.png"
                          className="img-profile"
                        />
                      </div>
                      <div className="col-8 col-sm-10 col-md-10 col-lg-10 col-xl-10 pl-0">
                        <h5 style={{ fontSize: 15 }}>พระลาน</h5>
                        <h5
                          className="text-secondary"
                          style={{ fontSize: 15, marginTop: -8 }}
                        >
                          @Phralanofficial
                        </h5>
                        <h5
                          className="text-secondary"
                          style={{ fontSize: 13, marginTop: -8 }}
                        >
                          1 กุมภาพันธ์ 2019
                        </h5>
                      </div>
                    </div>
                    <div className="row py-3">
                      <h5 style={{ fontSize: 15 }}>
                        <a
                          className="badge text-light"
                          style={{ backgroundColor: "#d09a2d" }}
                        >
                          พระบูชา
                        </a>
                        <a>
                          รุ่นแรกหน้าตัก 5 นิ้ว หลวงพ่อแก้ว วัดโคกโดน จ.พัทลุง
                        </a>
                      </h5>
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

export default Amuletlist;
