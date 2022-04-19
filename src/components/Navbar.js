import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faVideo } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useHistory } from "react-router-dom";




const Navbar = () => {

  let user = JSON.parse(localStorage.getItem("user-info"));
  const history = useHistory();
  function logOut() {
    localStorage.clear();
    history.push("/login");
  }
  return (
    <div>
      
      <div
        className="navbar-head py-3 ipad-ver mobile-ver mobile-xs-ver"
        style={{ position: "fixed", backgroundColor: "rgba(0, 0, 0, 0.3)" }}
      >
        <div className="row ">
          <div className="col-8 ipad-ver mobile-ver mobile-xs-ver">
            <a
              className="navbar-brand nav-text text-light koho font-weight-light"
              style={{ fontSize: "24px" }}
              href="#"
            >
              <img
                src="/img/logo/logo.png"
                style={{ width: "30px", marginTop: "-10px" }}
              />
              Meta Prathai
            </a>
          </div>
          <div className="col nav-textend ipad-ver mobile-ver mobile-xs-ver">
            <button
              type="button"
              className="btn rounded-pill text-light"
              style={{ backgroundColor: "#d09b2c", width: "150px" }}
              data-toggle="modal"
              data-target="#login"
            >
              เข้าสู่ระบบ
            </button>
            <button
              type="button"
              className="btn rounded-pill text-light"
              style={{ backgroundColor: "#7f8685", width: "150px" }}
              data-toggle="modal"
              data-target="#register"
            >
              สมัครสมาชิก
            </button>

            <a
              className="nav-link dropdown-toggle btn rounded-pill"
              style={{
                color: "#d09b2c",
                width: "80px",
                backgroundColor: "#f0ebe1",
              }}
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              TH
            </a>
            <div
              className="dropdown-menu"
              style={{ minWidth: "5rem" }}
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item" href="#">
                TH
              </a>
              <a className="dropdown-item" href="#">
                EN
              </a>
              <a className="dropdown-item" href="#">
                CN
              </a>
            </div>
              
            {localStorage.getItem("user-info") ? (
        <button className="btn " title={user && user.name} onClick={logOut}>
          Logout
        </button>
      ) : null}

          </div>
        </div>
      </div>

      {/* Mobile */}
      <div
        className="navbar-head py-2 dacktop-xl-ver dacktop-lg-ver dacktop-md-ver"
        style={{ position: "fixed", backgroundColor: "rgba(0, 0, 0, 0.3)" }}
      >
        <nav className="navbar navbar-light light-blue lighten-4">
          <a className="navbar-brand text-light koho " href="#">
            <img src="/img/logo/logo.png" style={{ width: "30px" }} />
            Meta Prathai
          </a>

          <div>
            <button
              className="navbar-toggler toggler-example text-light"
              data-toggle="collapse"
              data-target="#navbarSupportedContent3"
              aria-controls="navbarSupportedContent3"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>

            <button
              className="navbar-toggler toggler-example text-light"
              data-toggle="collapse"
              data-target="#navbarSupportedContent2"
              aria-controls="navbarSupportedContent2"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon icon={faVideo} />
            </button>

            <button
              className="navbar-toggler toggler-example"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent1"
              aria-controls="navbarSupportedContent1"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="text-light">
                <FontAwesomeIcon icon={faBars} />
              </span>
            </button>
          </div>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent3"
          >
            <ul className="navbar-nav mr-auto">
              <div
                className="p-3"
                style={{
                  backgroundColor: "#f0ebe1",
                  borderRadius: "10px",
                  zIndex: "20",
                }}
              >
                <div className="p-3 " style={{ borderRadius: "10px" }}>
                  <li className="nav-item">
                    <div>
                      <b className="font-size18">ตามหาพระ</b>
                      <form className="mt-3">
                        <div className="form-row">
                          <div className="col-12 mb-2">
                            <select
                              className="custom-select my-1 mr-sm-2 rounded-pill"
                              id="inlineFormCustomSelectPref"
                              defaultValue="default"
                            >
                              <option selected value="default">
                                เลือกจากพระเภทพระ
                              </option>
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
                              defaultValue="default"
                            >
                              <option selected value="default">
                                ราคา
                              </option>
                              <option value="1">100-999</option>
                              <option value="2">1000-1499</option>
                              <option value="3">1500-5000</option>
                            </select>
                          </div>
                          <div className="col-6 mb-2">
                            <select
                              className="custom-select my-1 mr-sm-2 rounded-pill"
                              id="inlineFormCustomSelectPref"
                              defaultValue="default"
                            >
                              <option selected value="default">
                                จังหวัด
                              </option>
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
                        style={{
                          borderWidth: "2px",
                          backgroundColor: "#c3c1bd",
                        }}
                      />
                    </div>
                  </li>
                </div>
              </div>
            </ul>
          </div>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent2"
          >
            <ul className="navbar-nav mr-auto">
              <div
                className="p-3"
                style={{
                  backgroundColor: "#f0ebe1",
                  borderRadius: "10px",
                  zIndex: "20",
                }}
              >
                <div className="p-3 mb-3" style={{ borderRadius: "10px" }}>
                  <li className="nav-item active mb-2">
                    <b className="font-size18">วิดีโอถ่ายทอดสด</b>
                    <div className="d-flex justify-content-center mt-3">
                      <a
                        type="button"
                        data-toggle="modal"
                        data-target="#liveModal"
                      >
                        <i
                          className="far fa-play-circle text-light"
                          style={{
                            margin: "45px 0 0 120px",
                            position: "absolute",
                            fontSize: "50px",
                            opacity: "0.5",
                          }}
                        ></i>
                      </a>
                      <i
                        className="far fa-play-circle text-light"
                        style={{
                          marginTop: "45px",
                          position: "absolute",
                          fontSize: "50px",
                          opacity: "0.5",
                        }}
                      ></i>
                      <img
                        className="w-100"
                        src="/img/png/profile pic/Group 1054.png"
                      />
                      <a
                        className="badge bg-danger text-light rounded-pill"
                        style={{
                          position: "absolute",
                          margin: "10px 0 0 -200px",
                        }}
                      >
                        Live <i className="fas fa-caret-down"></i>
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className="card p-3 mt-3"
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "10px",
                        color: "#7f8685",
                      }}
                    >
                      <h5 className="font-size15">ตารางเวลาถ่ายทอดสดวิดีโอ</h5>
                      <hr />
                      <div className="row">
                        <h5 className="d-flex pr-3 font-size15">MON</h5>
                        <h5
                          className="col badge rounded-pill font-weight-light"
                          style={{ backgroundColor: "#f0ebe1" }}
                        >
                          10.00-11.00
                        </h5>
                        <h5
                          className="col badge rounded-pill font-weight-light"
                          style={{ backgroundColor: "#f0ebe1" }}
                        >
                          19.00-20.00
                        </h5>
                      </div>
                      <div className="row">
                        <h5 className="d-flex pr-3 font-size15">TUE</h5>
                        <h5 className="col"></h5>
                        <h5
                          className="col badge rounded-pill font-weight-light"
                          style={{ backgroundColor: "#f0ebe1" }}
                        >
                          19.00-20.00
                        </h5>
                      </div>
                      <div className="row">
                        <h5 className="d-flex pr-3 font-size15">WED</h5>
                        <h5
                          className="col badge rounded-pill font-weight-light"
                          style={{ backgroundColor: "#f0ebe1" }}
                        >
                          10.00-11.00
                        </h5>
                        <h5
                          className="col badge rounded-pill font-weight-light"
                          style={{ backgroundColor: "#f0ebe1" }}
                        >
                          19.00-20.00
                        </h5>
                      </div>
                      <div className="row">
                        <h5 className="d-flex pr-3 font-size15">THU</h5>
                        <h5 className="col"></h5>
                        <h5
                          className="col badge rounded-pill font-weight-light"
                          style={{ backgroundColor: "#f0ebe1" }}
                        >
                          19.00-20.00
                        </h5>
                      </div>
                      <div className="row">
                        <h5 className="d-flex pr-3 font-size15">FRI</h5>
                        <h5 className="col"></h5>
                        <h5
                          className="col badge rounded-pill font-weight-light"
                          style={{ backgroundColor: "#f0ebe1" }}
                        >
                          19.00-20.00
                        </h5>
                      </div>
                      <div className="row">
                        <h5 className="d-flex pr-3 font-size15">SAT</h5>
                        <h5
                          className="col badge rounded-pill font-weight-light"
                          style={{ backgroundColor: "#f0ebe1" }}
                        >
                          10.00-11.00
                        </h5>
                        <h5 className="col"></h5>
                      </div>
                      <div className="row">
                        <h5 className="d-flex pr-3 font-size15">SUN</h5>
                        <h5 className="col"></h5>
                        <h5
                          className="col badge rounded-pill font-weight-light"
                          style={{ backgroundColor: "#f0ebe1" }}
                        >
                          19.00-20.00
                        </h5>
                      </div>
                    </div>
                  </li>
                </div>
              </div>
            </ul>
          </div>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent1"
          >
            <ul className="navbar-nav mr-auto">
              <div
                className="p-3"
                style={{
                  backgroundColor: "#f0ebe1",
                  borderRadius: "10px",
                  zIndex: "20",
                }}
              >
                <div
                  className=""
                  style={{
                    backgroundColor: "#f0ebe1",
                    borderRadius: "10px",
                    padding: "1rem 1rem 0 1rem",
                  }}
                >
                  <li className="nav-item active mb-2">
                    <a
                      type="button"
                      className="rounded  font-size21"
                      style={{ width: "150px", color: "#7f8685" }}
                      data-toggle="modal"
                      data-target="#login"
                    >
                      เข้าสู่ระบบ
                    </a>
                    <span className="sr-only">(current)</span>
                  </li>
                  <li className="nav-item">
                    <a
                      type="button"
                      className="rounded font-size21"
                      style={{ width: "150px", color: "#7f8685" }}
                      data-toggle="modal"
                      data-target="#register"
                    >
                      สมัครสมาชิก
                    </a>
                  </li>
                  <hr />
                </div>

                <div
                  className="p-3"
                  style={{ backgroundColor: "#f0ebe1", borderRadius: "10px" }}
                >
                  <li className="nav-item">
                    <a
                      className="nav-link font-size21"
                      style={{ color: "#d09b2c", textDecoration: "none" }}
                      href="{{ url('/') }}"
                    >
                      <img
                        src="/img/svg/home2.svg"
                        className=""
                        style={{ width: "24px" }}
                      />
                      &nbsp;&nbsp; หน้าหลัก
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link font-size21"
                      style={{ color: "#7f8685", textDecoration: "none" }}
                      href="{{ url('/amuletlist') }}"
                    >
                      <img
                        src="/img/svg/amulet-list.svg"
                        className=""
                        style={{ width: "24px" }}
                      />
                      &nbsp;&nbsp; รายการพระเครื่อง
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link font-size21"
                      style={{ color: "#7f8685", textDecoration: "none" }}
                      href="{{ url('/certificate') }}"
                    >
                      <img
                        src="/img/svg/certificate.svg"
                        className=""
                        style={{ width: "24px" }}
                      />
                      &nbsp;&nbsp; ตรวจสอบใบรับรอง
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link font-size21"
                      style={{ color: "#7f8685", textDecoration: "none" }}
                      href="{{ url('/new') }}"
                    >
                      <img
                        src="/img/svg/news.svg"
                        className=""
                        style={{ width: "24px" }}
                      />
                      &nbsp;&nbsp; ข่าวสาร
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link font-size21"
                      style={{ color: "#7f8685", textDecoration: "none" }}
                      href="{{ url('/contact') }}"
                    >
                      <img
                        src="/img/svg/contact.svg"
                        className=""
                        style={{ width: "24px" }}
                      />
                      &nbsp;&nbsp; ติดต่อเรา
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link font-size21"
                      style={{ color: "#7f8685", textDecoration: "none" }}
                      href="{{ url('/s') }}"
                    >
                      <img
                        src="/img/svg/policy.svg"
                        className=""
                        style={{ width: "24px" }}
                      />
                      &nbsp;&nbsp; นโยบายและเงื่อนไข
                    </a>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </nav>
      </div>

      {/* Login */}
      <div
        className="modal fade"
        id="login"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content" style={{ borderRadius: "10px" }}>
            <div className="modal-header border-bottom-0">
              <button
                type="button"
                className="close"
                style={{ fontSize: "3rem", padding: "0 1rem 0 1rem" }}
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body" style={{ padding: "0 1rem 1rem 1rem" }}>
              <h5 className="text-center font-weight-bold mb-4">เข้าสู่ระบบ</h5>
              <h5 className="font-size15">เบอร์โทรศัพท์</h5>
              <input
                type="number"
                className="form-control mb-3"
                style={{ borderRadius: "15px" }}
                placeholder="เบอร์โทรศัพท์"
              />
              <h5 className="font-size15">รหัสผ่าน</h5>
              <input
                type="text"
                className="form-control mb-3"
                style={{ borderRadius: "15px" }}
                placeholder="รหัสผ่าน"
              />
              <h5
                className="d-flex justify-content-end font-size15"
                style={{ color: "#d09b2c" }}
              >
                ลืมรหัสผ่าน
              </h5>
              <a
                className="btn text-center w-100 text-light mt-1"
                style={{ backgroundColor: "#d09b2c", borderRadius: "15px" }}
                href="{{ url('/login') }}"
              >
                เข้าสู่ระบบ
              </a>
              <div className="row mt-2">
                <div className="col">
                  <hr />
                </div>
                <div className="col-2 text-center">หรือ</div>
                <div className="col">
                  <hr />
                </div>
              </div>
              <button
                className="btn text-center w-100 text-light mt-2"
                style={{ backgroundColor: "#1877f2", borderRadius: "15px" }}
              >
                เข้าสู่ระบบด้วย Facebook <i className="fab fa-facebook-f"></i>
              </button>
              <button
                className="btn text-center w-100 text-light mt-3"
                style={{ backgroundColor: "#dc4e41", borderRadius: "15px" }}
              >
                เข้าสู่ระบบด้วย Google <i className="fab fa-google-plus-g"></i>
              </button>
              <button
                className="btn text-center w-100 text-light mt-3"
                style={{ backgroundColor: "#000000", borderRadius: "15px" }}
              >
                เข้าสู่ระบบด้วย Apple ID <i className="fab fa-apple"></i>
              </button>
              <button
                className="btn text-center w-100 text-light mt-3 mb-2"
                style={{ backgroundColor: "#7f8685", borderRadius: "15px" }}
              >
                ลงทะเบียน
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Register */}
      <div
        className="modal fade"
        id="register"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content" style={{ borderRadius: "10px" }}>
            <div className="modal-header border-bottom-0">
              <button
                type="button"
                className="close"
                style={{ fontSize: "3rem", padding: "0 1rem 0 1rem" }}
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body" style={{ padding: "0 1rem 1rem 1rem" }}>
              <h5 className="text-center font-weight-bold mb-4">สมัครสมาชิก</h5>
              <h5 className="font-size15">ชื่อ - นามสกุล</h5>
              <input
                type="text"
                className="form-control mb-3"
                style={{ borderRadius: "15px" }}
                placeholder="ชื่อ - นามสกุล"
              />
              <h5 className="font-size15">
                เบอร์โทรศัพท์ (เพื่อใช้ในการเข้าสู่ระบบ)
              </h5>
              <input
                type="number"
                className="form-control mb-3"
                style={{ borderRadius: "15px" }}
                placeholder="เบอร์โทรศัพท์"
              />
              <h5 className="font-size15">
                รหัสผ่าน (เพื่อใช้ในการเข้าสู่ระบบ)
              </h5>
              <input
                type="text"
                className="form-control mb-3"
                style={{ borderRadius: "15px" }}
                placeholder="รหัสผ่าน"
              />
              <h5 className="font-size15">ยืนยันรหัสผ่าน</h5>
              <input
                type="text"
                className="form-control mb-3"
                style={{ borderRadius: "15px" }}
                placeholder="ยืนยันรหัสผ่าน"
              />
              <button
                className="btn text-center w-100 text-light mt-3 mb-2"
                style={{ backgroundColor: "#d09b2c", borderRadius: "15px" }}
              >
                สมัครสมาชิก
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
