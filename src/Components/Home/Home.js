import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import IntroSection from "../IntroSection/IntroSection";

const Home = () => {
  return (
    <div>
      <div className="container">
        {/* component call  */}
        <IntroSection />
        {/* top sectices start */}
        <h1
          style={{
            textTransform: "uppercase",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          our <span>top</span> services
        </h1>
        {/* some demo course  */}
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <img
                src="https://res.cloudinary.com/programming-hero-image/image/upload/public/files/1622954504238.png"
                className="card-img-top"
                alt="..."
              />

              <div className="card-body">
                <h5 className="card-title">কমপ্লিট ওয়েব ডেভেলপমেন্ট </h5>

                <p>
                  ফটাফট কয়েকটা ভিডিও দেখে HTML, CSS শিখে ফটাফট চমৎকার দুইটা
                  ওয়েবসাইট বানিয়ে ফেলবে। এবং সেগুলার লিংক যেকারো সাথে শেয়ার করে
                  ভাব পেটাতে পারবে। বুটস্ট্রাপ নামক পপুলার ফ্রেমওয়ার্ক এর
                  খুঁটিনাটি ভাজা ভাজা করে ফেলবে। তারপর সেটা দিয়েও দুইটা ই-কমার্স
                  ওয়েবসাইট বানিয়ে ফেলবে। কি মজা ! জাভাস্ক্রিপ্টের ছয়টা মেইন
                  জিনিস, জাভাস্ক্রিপ্ট দিয়ে প্রবলেম সলভিং, ইন্টারভিউ এর
                  প্রশ্ন-উত্তর। এমনকি ES6 দিয়ে তোমার নলেজকে যোগোপযোগী করে তুলবে
                  জাভাস্ক্রিপ্ট দিয়ে ব্যাংকের deposit, withdraw এর লাইভ
                  ক্যালকুলেশন থাকছে।
                </p>
                <h4>
                  <span>price : 5500</span>
                </h4>
                <button className="btn btn-primary">more info</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://bohubrihi.com/wp-content/uploads/2021/06/Back-End-Web-Development-with-JavaScript-1536x864.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  ব্যাক এন্ড ওয়েব ডেভেলপমেন্ট শিখুন জাভাস্ক্রিপ্ট ব্যবহার করে
                </h5>

                <p>
                  {" "}
                  একটি ওয়েবসাইট বা অ্যাপ্লিকেশনে আপনি ইউজার হিসাবে যে
                  ইন্টারঅ্যাকশন করেন, তা একটি সিস্টেমের মাধ্যমে কাজ করে। এ
                  সিস্টেমের বিভিন্ন এলিমেন্টকে একসাথে বলা হয় ব্যাক এন্ড। শুধু
                  জাভাস্ক্রিপ্ট দিয়ে ব্যাক এন্ড ওয়েব ডেভেলপমেন্টের উপর আকর্ষণীয়
                  ক্যারিয়ার গড়তে পারবেন আপনি। এর জন্য প্রয়োজনীয় প্রোগ্রামিং
                  স্কিলগুলো শিখুন ৪ মাসের মধ্যে, ১২টি প্র্যাকটিক্যাল প্রজেক্টের
                  মাধ্যমে।
                </p>
                <h4>
                  <span>price : 4500</span>
                </h4>
                <button className="btn btn-primary">more info</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://bohubrihi.com/wp-content/uploads/2021/06/Front-End-Web-Development-Career-Track-Bohubrihi-1536x864.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  ফ্রন্ট এন্ড ওয়েব ডেভেলপমেন্ট কোর্স করে ক্যারিয়ার গড়ুন
                </h5>
                <p>
                  একটি ওয়েবসাইট বা অ্যাপ্লিকেশনের যেসব এলিমেন্টের সাথে আপনি
                  ইউজার হিসাবে সরাসরি ইন্টারঅ্যাক্ট করতে পারেন, সেগুলোকে একসাথে
                  বলা হয় ফ্রন্ট এন্ড। শুধু ফ্রন্ট এন্ড ওয়েব ডেভেলপমেন্টের উপর
                  আকর্ষণীয় ক্যারিয়ার বানানোর জন্য প্রয়োজনীয় প্রোগ্রামিং
                  স্কিলগুলো শিখুন ৪ মাসের মধ্যে, ১৪টি প্র্যাকটিক্যাল প্রজেক্টের
                  মাধ্যমে।
                </p>
                <h4>
                  <span>price : 5000</span>
                </h4>
                <button className="btn btn-primary">more info</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://bohubrihi.com/wp-content/uploads/2021/06/back-end-web-development-with-python-bohubrihi-career-track-1536x864.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  ব্যাক এন্ড ওয়েব ডেভেলপমেন্ট কোর্স করে ক্যারিয়ার গড়ুন
                </h5>
                <p>
                  একটি ওয়েবসাইট বা অ্যাপ্লিকেশনে আপনি ইউজার হিসাবে যে
                  ইন্টারঅ্যাকশন করেন, তা একটি সিস্টেমের মাধ্যমে কাজ করে। এ
                  সিস্টেমের বিভিন্ন এলিমেন্টকে একসাথে বলা হয় ব্যাক এন্ড। শুধু
                  ব্যাক এন্ড ওয়েব ডেভেলপমেন্টের উপর আকর্ষণীয় ক্যারিয়ার গড়তে
                  প্রয়োজনীয় প্রোগ্রামিং স্কিলগুলো শিখুন ৪ মাসের মধ্যে, ৮টি
                  প্র্যাকটিক্যাল প্রজেক্টের মাধ্যমে।
                </p>
                <h4>
                  <span>price : 4500</span>
                </h4>
                <button className="btn btn-primary">more info</button>
              </div>
            </div>
          </div>
        </div>
        {/* some demo course end  */}
        <div>
          <Link to="/services" className="btn btn-success w-25 mb-5">
            show all
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
