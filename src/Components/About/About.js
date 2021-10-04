import React from "react";
import "./About.css";
import AboutImg from "../../images/about.svg";
const About = () => {
  return (
    <div>
      <section>
        <div className="about-container">
          <h1 className="">আমাদের সম্পর্কে </h1>
          <h2>কিছু কথা</h2>
          <h4>
            WELCOME TO <span> EDU TECH .</span>
          </h4>
        </div>
      </section>
      <section className="mt-5 about-section-container">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h1>আমরা যে লক্ষে এগিয়ে জাচ্ছি </h1>
            <p>
              আমাদের Edu Tech সম্পূর্ণ বাংলাদেশের একটি শুনামধন্য প্রতিষ্ঠান ।
              আমাদের এই প্রতিষ্ঠানে বাংলাদেশের ২ টি আইটি সেন্টার এর সমন্বয়ে গঠিত
              । আমরা বাংলাদেশর জন্য কিছু করতে চাই এটাই আমাদের লক্ষ
            </p>
            <h4>আমরা এই বাংলার জন্য কিছু করতে চাই</h4>
            <span>
              আমাদের স্লোগান{" "}
              <sup>
                <i class="fas fa-check-circle"></i>
              </sup>{" "}
            </span>
          </div>
          <div>
            <img src={AboutImg} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
