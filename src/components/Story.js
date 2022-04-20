import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export class Story extends Component {
  render() {
    return (
      <OwlCarousel items={5} autoplay={true} style={{zIndex:0}}>
        <div className="col-story-img">
          <img src="/img/svg/add2.svg" className="story-img-profile-add" />
          <img
            src="/img/svg/grey.png"
            className="story-img2"
            style={{ borderRadius: "10px" }}
          />
          <h5 className="story-name-add">เพิ่มสตอรี่</h5>
        </div>
        <div className="col-story-img" style={{ width: "130px!important" }}>
          <img
            src="/img/png/profile pic/Group 1077.png"
            className="story-img-profile"
          />
          <img src="/img/png/story/story1.png" className="story-img2" />
          <h5 className="story-name">เฟิร์ส ศิวพงษ์</h5>
        </div>
        <div className="col-story-img">
          <img
            src="/img/png/profile pic/Group 1558.png"
            className="story-img-profile"
          />
          <img src="/img/png/story/story2.png" className="story-img2" />
          <h5 className="story-name">ฐานิดา บุญไกร</h5>
        </div>
        <div className="col-story-img">
          <img
            src="/img/png/profile pic/Group 1559.png"
            className="story-img-profile"
          />
          <img src="/img/png/story/story3.png" className="story-img2" />
          <h5 className="story-name">ปัญญา แสนปัญญา</h5>
        </div>
        <div className="col-story-img">
          <img
            src="/img/png/profile pic/Group 1560.png"
            className="story-img-profile"
          />
          <img src="/img/png/story/story4.png" className="story-img2" />
          <h5 className="story-name">ภวัติ ออโต้</h5>
        </div>
        <div className="col-story-img">
          <img
            src="/img/png/profile pic/Group 1077.png"
            className="story-img-profile"
          />
          <img src="/img/png/story/story1.png" className="story-img2" />
          <h5 className="story-name">เฟิร์ส ศิวพงษ์</h5>
        </div>
        <div className="col-story-img">
          <img
            src="/img/png/profile pic/Group 1558.png"
            className="story-img-profile"
          />
          <img src="/img/png/story/story2.png" className="story-img2" />
          <h5 className="story-name">ฐานิดา บุญไกร</h5>
        </div>
        <div className="col-story-img">
          <img
            src="/img/png/profile pic/Group 1559.png"
            className="story-img-profile"
          />
          <img src="/img/png/story/story3.png" className="story-img2" />
          <h5 className="story-name">ปัญญา แสนปัญญา</h5>
        </div>
        <div className="col-story-img">
          <img
            src="/img/png/profile pic/Group 1560.png"
            className="story-img-profile"
          />
          <img src="/img/png/story/story4.png" className="story-img2" />
          <h5 className="story-name">ภวัติ ออโต้</h5>
        </div>
      </OwlCarousel>
    );
  }
}

// const Story = () => {
//   return (
//     <>
//       <div id="demo" className="mb-3">
//         <div className="">
//           <div className="row">
//             <div className="span12">
//               <div id="owl-example" className="owl-carousel">

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

export default Story;
