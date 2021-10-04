import React from "react";
import Intro from "../../images/intro.svg";
import "./IntroSection.css";
const IntroSection = () => {
  return (
    <div>
      <div className="d-flex intro-section-container">
        {/* intro section image  */}
        <div>
          <img src={Intro} alt="" />
        </div>
        <div>
          {/* some summary of our courses  */}
          <p>
            আমাদের এই কোর্স গুলো মুলত প্রি রেকর্ড অবস্থায় থাকে । তুমি জদি আমাদের
            প্রতিষ্ঠান থেকে কোর্স Enroll করে থাক । তাহলে December এর ১ তারিখ
            পর্যন্ত অপেক্ষা কর । আমাদের প্রতিটা batch December এর ১ তারিখ থেকে
            শুরু হয়ে থাকে । তাই ১ তারিখের আগেই তুমি তোমার পছন্দের কোণ একটি কোর্স
            Enroll করে ফেল ।
          </p>
          {/* what we are give to the student  */}
          <div>
            <div>
              <p className="fas course-support fa-check-circle">
                প্রতি কোর্সে ৬০০+ ভিডিও{" "}
              </p>
            </div>
            <div>
              <p className="fas course-support fa-check-circle">
                ১৮ টি assignment
              </p>
            </div>
            <div>
              <p className="fas course-support fa-check-circle">
                ৫০ জন instructor দ্বারা মূল্যয়ন{" "}
              </p>
            </div>
            <div>
              <p className="fas course-support fa-check-circle">
                কোর্স শেষে cetrificate
              </p>
            </div>
            <div>
              <p className="fas course-support fa-check-circle">
                প্রয়োজনে Zoom এ লাইভ ক্লাস{" "}
              </p>
            </div>
            <div>
              <p className="fas course-support fa-check-circle">
                প্রতিদিন সাপোর্ট সেশান{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
