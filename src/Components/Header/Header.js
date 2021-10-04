import React from "react";
import { useHistory } from "react-router";

import "./Header.css";

const Header = () => {
  const history = useHistory();
  const handleMove = () => {
    history.push("/about");
  };
  return (
    <div>
      <div>
        <div className="d-flex justify-content-between align-items-center header-container">
          <div>
            <div className="header-left-container container">
              {/* welcome section  */}
              <h1>
                welcome to <span>Edu Tech </span>. for your better learning
              </h1>
              {/* some details of this web site  */}
              <p>
                আমাদের Edu Tech সম্পূর্ণ বাংলাদেশের একটি শুনামধন্য প্রতিষ্ঠান ।
                আমাদের এই প্রতিষ্ঠানে বাংলাদেশের ২ টি আইটি সেন্টার এর সমন্বয়ে
                গঠিত । আমরা বাংলাদেশর জন্য কিছু করতে চাই এটাই আমাদের লক্ষ
              </p>
              {/* more button  */}
              <button
                onClick={handleMove}
                className="btn button btn-outline-secondary fas fa-info-circle"
              >
                Explore More
              </button>
            </div>
          </div>
          <div>
            {/* header image  */}
            <img
              className="image img-fluid"
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
