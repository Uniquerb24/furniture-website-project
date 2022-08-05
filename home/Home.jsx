import React from "react";
import "../global/home.scss";
import { BsDashCircleDotted } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="home">
        <div id="img"> </div>
        <div id="moon">
          <p>chair </p>
          <p>on the moon</p>
          <span>we select the furiture that will make even the moon cozy</span>

          <br />
          <br />
          <button>explore our collection </button>
        </div>
      </div>
      {/* //section 2 */}
      <div id="section2">
        <div className="section">
          <div className="sale">
            <span>now on sales</span>
          </div>
          <div className="view">
            <p>view all product</p>
            <span>
              <BsDashCircleDotted />
            </span>
          </div>
        </div>
        <div className="section3">
          <div className="card">
            <div id="img1"></div>
            <div className="tag">
              <p className="p1">steve leung </p>
              <p className="p2">lilia</p>
              <p className="p3">$2,950.00</p>
              <div className="p4">
                <p className="p5">$1,950.00</p>
                <span className="p6">
                  <FaRegHeart />
                </span>
              </div>
            </div>
          </div>

          <div className="card2">
            <div id="img2"></div>
            <div className="tag2">
              <p className="p12">nadadora</p>
              <p className="p22">tortuga</p>
              <p className="p32">$3,1500.00</p>
              <div className="p42">
                <p className="p52">$2,120.00</p>
                <span className="p62">
                  <FaRegHeart />
                </span>
              </div>
            </div>
          </div>

          <div className="card3">
            <div id="img3"></div>
            <div className="tag3">
              <p className="p13">fary & balance </p>
              <p className="p23">emily</p>
              <p className="p33">$2,750.00</p>
              <div className="p43">
                <p className="p53">$2,300.00</p>
                <span className="p63">
                  <FaRegHeart />
                </span>
              </div>
            </div>
          </div>

          <div className="card4">
            <div id="img4"></div>
            <div className="tag4">
              <p className="p14">christophe leconte </p>
              <p className="p24">wind</p>
              <p className="p34">$4,530.00</p>
              <div className="p44">
                <p className="p54">$3,950.00</p>
                <span className="p64">
                  <FaRegHeart />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="less">
            <FaLessThan />
          </span>
          <span className="greater">
            <FaGreaterThan />
          </span>
        </div>
      </div>
      {/* section3 */}
      <div className="section4">
        <div className="img5"></div>
        <div className="box">
          <p className="sect3p1">home comes first</p>
          <br />
          <p className="sect3p2">
            we believe in creating and finding things that travel \n with you
            and are meant to be enjoyed for a lifetime - from home to home,from
            generation to generation.
          </p>
          <p className="sect3p3">
            we carefully select the best furiture from quality materials and an
            unwavering commitmentment to details ,taking care of the control of
            your home.
          </p>

          <div className="read">
            <p>read about us</p>
            <span>
              <BsDashCircleDotted />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
