import React from "react";

import "./Header.css";
const Header = () => {
  return (
    <div>
      <div>
        <div className="d-flex justify-content-between align-items-center header-container">
          <div>
            <div className="header-left-container container">
              <h1>
                welcome to <span>Edu Tech </span>. for your better learning
              </h1>
              <p>
                আমাদের Edu Tech সম্পূর্ণ বাংলাদেশের একটি শুনামধন্য প্রতিষ্ঠান ।
                আমাদের এই প্রতিষ্ঠানে বাংলাদেশের ২ টি আইটি সেন্টার এর সমন্বয়ে
                গঠিত । আমরা বাংলাদেশর জন্য কিছু করতে চাই এটাই আমাদের লক্ষ
              </p>
              <button className="btn  btn-outline-secondary">
                Explore More
              </button>
            </div>
          </div>
          <div>
            <img
              className="image"
              src="https://themepure.net/template/educal/img/hero/hero-2/hero.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
