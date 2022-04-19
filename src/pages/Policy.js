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
                  <div
                    className="col-1"
                    style={{ backgroundColor: "#d09b2c", marginLeft: -60 }}
                  ></div>
                  <a
                    className="col font-size21 "
                    style={{ color: "#d09b2c", textDecoration: "none" }}
                    href="{{ url('/policys') }}"
                  >
                    <img
                      src="/img/svg/policy2.svg"
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
                        <h5 className="font-weight-bold " style={{fontSize:24, padding: "30 0 0 0"}}>นโยบายเงื่อนไข</h5>
                    </div>
                    <div className="container p-5" style={{padding: "1rem 3rem 3rem 3rem !important"}}>
                        <h5 className="font-weight-bold" style={{fontSize:15}}>เราเก็บข้อมูลอะไรบ้าง?</h5>
                        <h5 className="mb-4" style={{fontSize:15}}>เราจะมีการเก็บข้อมูลผู้ใช้ เมื่อลงทะเบียนกับ Prathai<br/>
                            เราจะขอให้คุณกรอก ชื่อ, อีเมล, อายุ, เพศ หรือดึงข้อมูลเหล่านี้จากการลงทะเบียนผ่าน Facebook เพื่อเก็บไว้ในระบบ<br/>
                            เราอาจจะเก็บรายชื่อนิยายที่คุนอ่าน โดยจะไม่มีผู้ใช้และนักเขียนคนอื่นสามารถเข้าถึงข้อมูลนี้ได้ <br/>
                            อย่างไรก็ตามคุณสามารถเข้าใช้เว็บไซต์ขั้นพื้นฐานโดยไม่ต้องลงทะเบียนและไม่เปิดเผยตัวตนได้เช่นกัน</h5>

                        <h5 className="font-weight-bold" style={{fontSize:15}}>เรานำข้อมูลของคุณไปใช้อะไรบ้าง?</h5>
                        <h5 className="mb-4" style={{fontSize:15}}>ทุกข้อมูลที่เราเก็บไว้ เราจะนำไปใช้เพื่อจุดประสงค์ดังนี้<br/>
                            - ใช้ส่งข้อมูล ข่าวสาร รวมถึงการแจ้งเตือนไปถึงคุณผ่านอีเมล โดยคุณสามารถปิดการรับข้อมูลข่าวสารเหล่านี้ได้ทุกเมนู Setting<br/>
                            - ปรับปรุงประสบการณ์ผู้ใช้ เช่น แนะนำนิยายให้เหมาะสมกับกลุ่มนักอ่านที่มีความสนใจใกล้เคียงกัน<br/>
                            -เก็บสถิติพฤติกรรมการอ่านในแต่ละกลุ่มเพศและอายุ เพื่อส่งให้นักเขียนปรับปรุงให้เข้าใจกลุ่มเป้าหมายของตัวเอง</h5>

                        <h5 className="font-weight-bold" style={{fontSize:15}}>การเก็บ cookies</h5>
                        <h5 className="mb-4" style={{fontSize:15}}>เราจะเก็บ cookies เพื่อจดจำการเข้าใช้ของผู้ใช้ เพื่อพัฒนาประปรับปรุงประสบการณ์การใช้งานโดยเราอาจมีการใช้บริการของบริษัทหรือบุคคลที่สาม ซึ่งเราจะไม่มีการาใช้ของมูลส่วนนี้เพื่อประโยชน์อื่นๆ นอกจากพัฒนาบริการของเราเอง</h5>

                        <h5 className="font-weight-bold" style={{fontSize:15}}>เราปกปิดข้อมูลผู้ใช้</h5>
                        <h5 className="mb-4" style={{fontSize:15}}>เราจะไม่ขาย, แลกดปลี่ยน หรือเผยแพร่ข้อมูลของคุณ ยกเว้นแต่บริษัทหรือบุคคลที่สามที่ร่วมงานได้ให้คำสัญญาว่าจะไม่เปิดเผยข้อมูลส่วนตัวผู้ใช้ได้ในกรณีเกิดการร้องเรียนทางกฎหมายหรือเหตุกาณ์ขัดแย้งที่ผิดกับนโยบายและกฎระเบียบที่แจ้งไว้</h5>

                        <h5 className="font-weight-bold" style={{fontSize:15}}>เงื่อนไขการให้บริการ</h5>
                        <h5 className="mb-4" style={{fontSize:15}}>กรุณาอ่านเงื่อนไขการให้บริการของเราในหน้า "ข้อตกลงในการใช้งาน" ประกอบไปด้วย</h5>

                        <h5 className="font-weight-bold" style={{fontSize:15}}>ความยินยอมของคุณ</h5>
                        <h5 className="mb-4" style={{fontSize:15}}>เมื่อคุณเข้าใช้ Prathai ทั้งเว็บไซต์และแอปพลิเคชัน ถือว่าคุณยอมรับนโยบายความเป็นส่วนตัวนี้</h5>

                        <h5 className="font-weight-bold" style={{fontSize:15}}>การเปลี่ยนแปลงนโยบายความเป็นส่วนตัว</h5>
                        <h5 className="mb-4" style={{fontSize:15}}>หากเรามีการอัพเดทนโยบายความเป็นส่วนตัว ทีมงานจะแจ้งผู้ใช้ทุกคนผ่านอีเมลที่ลงทะเบียนไว้ นโยบายความเป็นส่วนตัวนี้ปรับปรุงล่าสุดในวันที่ 1 ธันวาคม 2564 หากมีข้อสงสัยใดๆ สามารถติดต่อทีมงานได้ทาง <a class="text-primary">suppprt๑prathai.com</a> </h5>
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
