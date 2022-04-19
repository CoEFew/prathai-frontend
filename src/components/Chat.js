import React from "react";

const Chat = () => {
  function showChatbot() {
    var chatbot = document.getElementById("chatbot");
    chatbot.className = chatbot.className.replace(" close", "");
    console.log("You clicked submit.");
  }

  function closeChatbot() {
    var chatbot = document.getElementById("chatbot");
    chatbot.className += " close";
    console.log("You clicked close.");
  }
  return (
    <>
      <div id="chatbot" className="chatbot-panel close">
        <div className="chatbot-inner">
          <div
            className="chatbot-header"
            style={{ backgroundColor: "#ffffff" }}
          >
            <div className="row">
              <div className="col" style={{ margin: "20px 0 0 20" }}>
                คุยกับแอดมิน
              </div>
              <div className="col">
                <span onClick={closeChatbot} style={{ float: "right" }}>
                  <button
                    type="button"
                    className="close"
                    style={{ fontSize: "3rem" }}
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </span>
              </div>
            </div>
            <hr />
          </div>
          <div className="chatbot-content p-5">
            <h5 className="text-center font-weight-bold font-size15">
              แจ้งปัญหากับเราที่นี้
            </h5>
            <h5 className="text-center font-size15">
              Prathai ยินดีให้บริการ <br />
              เราจะตอบกลับท่านภายใน 1 ชั่วโมง
            </h5>
            <div className="row">
              <div className="col-10">
                <input type="text" className="form-control mt-5 rounded-pill" />
              </div>
              <div className="col-2">
                <img
                  src="/img/svg/send.svg"
                  className=""
                  style={{ marginTop: 45, width: 40 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="chatbot-button"
        style={{ backgroundColor: "#d09b2c" }}
        onClick={showChatbot}
      >
        <img src="/img/svg/Q&A-icon.png" />
      </div>
    </>
  );
};

export default Chat;
