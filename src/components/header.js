import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'
import './header.css'

const Header = (props) => {
  return (
    <header
      data-role="Header"
      className={`header-header ${props.rootClassName} `}
    >
      <Link to="/" className="header-navlink">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="header-image"
        />
      </Link>
      <div className="header-container">
        <div data-thq="thq-dropdown" className="header-thq-dropdown list-item">
          <div
            data-thq="thq-dropdown-toggle"
            className="header-dropdown-toggle"
          >
            <span className="header-text">{props.text2}</span>
            <div
              data-thq="thq-dropdown-arrow"
              className="header-dropdown-arrow"
            >
              <svg viewBox="0 0 1024 1024" className="header-icon">
                <path d="M426 726v-428l214 214z" className=""></path>
              </svg>
            </div>
          </div>
          <ul data-thq="thq-dropdown-list" className="header-dropdown-list">
            <li data-thq="thq-dropdown" className="header-dropdown list-item">
              <Link to="/men-shirts" className="">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-dropdown-toggle01"
                >
                  <span className="header-text01">
                    <span className="">Shirts</span>
                    <br className=""></br>
                  </span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="header-dropdown01 list-item"
            ></li>
            <li data-thq="thq-dropdown" className="header-dropdown02 list-item">
              <Link to="/men-pants" className="">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-dropdown-toggle02"
                >
                  <span className="header-text04">{props.text10}</span>
                </div>
              </Link>
            </li>
            <li data-thq="thq-dropdown" className="header-dropdown03 list-item">
              <Link to="/men-shorts" className="">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-dropdown-toggle03"
                >
                  <span className="header-text05">{props.text11}</span>
                </div>
              </Link>
            </li>
            <li data-thq="thq-dropdown" className="header-dropdown04 list-item">
              <Link to="/men-jackets" className="">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-dropdown-toggle04"
                >
                  <span className="header-text06">{props.text12}</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div data-thq="thq-dropdown" className="header-thq-dropdown1 list-item">
        <div
          data-thq="thq-dropdown-toggle"
          className="header-dropdown-toggle06"
        >
          <span className="header-text07">
            <span className="">Women</span>
            <br className=""></br>
          </span>
          <div data-thq="thq-dropdown-arrow" className="header-dropdown-arrow1">
            <svg viewBox="0 0 1024 1024" className="header-icon02">
              <path d="M426 726v-428l214 214z" className=""></path>
            </svg>
          </div>
        </div>
        <ul data-thq="thq-dropdown-list" className="header-dropdown-list1">
          <li data-thq="thq-dropdown" className="header-dropdown06 list-item">
            <Link to="/women-shirts" className="">
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle07"
              >
                <span className="header-text10">{props.text3}</span>
              </div>
            </Link>
          </li>
          <li data-thq="thq-dropdown" className="header-dropdown07 list-item">
            <Link to="/women-pants" className="">
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle08"
              >
                <span className="header-text11">{props.text4}</span>
              </div>
            </Link>
          </li>
          <li data-thq="thq-dropdown" className="header-dropdown08 list-item">
            <Link to="/women-shorts" className="">
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle09"
              >
                <span className="header-text12">{props.text5}</span>
              </div>
            </Link>
          </li>
          <li data-thq="thq-dropdown" className="header-dropdown09 list-item">
            <Link to="/women-jackets" className="">
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle10"
              >
                <span className="header-text13">{props.text6}</span>
              </div>
            </Link>
          </li>
          <li
            data-thq="thq-dropdown"
            className="header-dropdown10 list-item"
          ></li>
          <li
            data-thq="thq-dropdown"
            className="header-dropdown11 list-item"
          ></li>
        </ul>
      </div>
      <div data-thq="thq-dropdown" className="header-thq-dropdown2 list-item">
        <div
          data-thq="thq-dropdown-toggle"
          className="header-dropdown-toggle11"
        >
          <span className="header-text14">
            <span className="">Kids</span>
            <br className=""></br>
          </span>
          <div data-thq="thq-dropdown-arrow" className="header-dropdown-arrow2">
            <svg viewBox="0 0 1024 1024" className="header-icon04">
              <path d="M426 726v-428l214 214z" className=""></path>
            </svg>
          </div>
        </div>
        <ul data-thq="thq-dropdown-list" className="header-dropdown-list2">
          <li
            data-thq="thq-dropdown"
            className="header-dropdown12 list-item"
          ></li>
          <li data-thq="thq-dropdown" className="header-dropdown13 list-item">
            <Link to="/kids-shirts" className="">
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle12"
              >
                <span className="header-text17">
                  <span className="">Shirts</span>
                  <br className=""></br>
                </span>
              </div>
            </Link>
          </li>
          <li
            data-thq="thq-dropdown"
            className="header-dropdown14 list-item"
          ></li>
          <li data-thq="thq-dropdown" className="header-dropdown15 list-item">
            <Link to="/kids-shorts" className="">
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle13"
              >
                <span className="header-text20">{props.text7}</span>
              </div>
            </Link>
          </li>
          <li data-thq="thq-dropdown" className="header-dropdown16 list-item">
            <Link to="/kids-pants" className="">
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle14"
              >
                <span className="header-text21">
                  <span className="">Pants </span>
                  <br className=""></br>
                </span>
              </div>
            </Link>
            <Link to="/kids-jackets" className="">
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle15"
              >
                <span className="header-text24">
                  <span className="">Jackets/Hoodies</span>
                  <br className=""></br>
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div data-thq="thq-dropdown" className="header-thq-dropdown3 list-item">
        <div
          data-thq="thq-dropdown-toggle"
          className="header-dropdown-toggle16"
        >
          <span className="header-text27">{props.text1}</span>
          <div data-thq="thq-dropdown-arrow" className="header-dropdown-arrow3">
            <svg viewBox="0 0 1024 1024" className="header-icon06">
              <path d="M426 726v-428l214 214z" className=""></path>
            </svg>
          </div>
        </div>
        <ul data-thq="thq-dropdown-list" className="header-dropdown-list3">
          <li data-thq="thq-dropdown" className="header-dropdown17 list-item">
            <Link to="/hats" className="">
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle17"
              >
                <span className="header-text28">{props.text8}</span>
              </div>
            </Link>
          </li>
          <li data-thq="thq-dropdown" className="header-dropdown18 list-item">
            <Link to="/watches" className="">
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle18"
              >
                <span className="header-text29">{props.text9}</span>
              </div>
            </Link>
          </li>
          <li data-thq="thq-dropdown" className="header-dropdown19 list-item">
            <Link to="/necklaces" className="">
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle19"
              >
                <span className="header-test">{props.Test}</span>
              </div>
            </Link>
          </li>
          <li data-thq="thq-dropdown" className="header-dropdown20 list-item">
            <Link to="/backpacks" className="">
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle20"
              >
                <span className="header-test1">{props.Test1}</span>
              </div>
            </Link>
          </li>
          <li
            data-thq="thq-dropdown"
            className="header-dropdown21 list-item"
          ></li>
        </ul>
      </div>
      <Link to="/sales" className="header-navlink17">
        {props.text}
      </Link>
      <input
        type="text"
        placeholder={props.textinput_placeholder}
        className="header-textinput input"
      />
      <Link to="/login-page" className="header-login button">
        {props.Login}
      </Link>
      <Link to="/register" className="header-register button">
        {props.Register}
      </Link>
      <Link to="/cart-page" className="header-navlink18">
        <svg viewBox="0 0 1024 1024" className="header-icon08">
          <path
            d="M726 768q34 0 59 26t25 60-25 59-59 25-60-25-26-59 26-60 60-26zM42 86h140l40 84h632q18 0 30 13t12 31q0 2-6 20l-152 276q-24 44-74 44h-318l-38 70-2 6q0 10 10 10h494v86h-512q-34 0-59-26t-25-60q0-20 10-40l58-106-154-324h-86v-84zM298 768q34 0 60 26t26 60-26 59-60 25-59-25-25-59 25-60 59-26z"
            className=""
          ></path>
        </svg>
      </Link>
      <div data-role="BurgerMenu" className="header-burger-menu">
        <svg viewBox="0 0 1024 1024" className="header-icon10">
          <path
            d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            className=""
          ></path>
        </svg>
      </div>
      <div data-role="MobileMenu" className="header-mobile-menu">
        <div className="header-nav">
          <div className="header-container1">
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="header-image1"
            />
            <div data-role="CloseMobileMenu" className="header-menu-close">
              <svg viewBox="0 0 1024 1024" className="header-icon12">
                <path
                  d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  className=""
                ></path>
              </svg>
            </div>
          </div>
          <NavigationLinks
            rootClassName="rootClassName11"
            className=""
          ></NavigationLinks>
        </div>
        <div className="">
          <svg viewBox="0 0 950.8571428571428 1024" className="header-icon14">
            <path
              d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 877.7142857142857 1024" className="header-icon16">
            <path
              d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 602.2582857142856 1024" className="header-icon18">
            <path
              d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
    </header>
  )
}

Header.defaultProps = {
  image_src: 'https://drive.google.com/uc?id=1oolMybuysM9rPeayiKkqVsv6D7J4xcZ2',
  rootClassName: '',
  Login: 'Login',
  image_alt1: 'image',
  text11: 'Shorts',
  text9: 'Watches',
  text6: 'Jackets/Hoodies',
  image_alt: 'logo',
  textinput_placeholder: 'Search',
  text2: 'Men',
  text10: 'Pants',
  text12: 'Hoodies/Jackets',
  text5: 'Shorts',
  text3: 'Shirts',
  text8: 'Hats',
  Test1: 'Backpacks',
  text4: 'Pants',
  text7: 'Shorts',
  Test: 'Necklaces',
  text: 'On Sale',
  Register: 'Register',
  text1: 'Accessories',
}

Header.propTypes = {
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  Login: PropTypes.string,
  image_alt1: PropTypes.string,
  text11: PropTypes.string,
  text9: PropTypes.string,
  text6: PropTypes.string,
  image_alt: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text2: PropTypes.string,
  text10: PropTypes.string,
  text12: PropTypes.string,
  text5: PropTypes.string,
  text3: PropTypes.string,
  text8: PropTypes.string,
  Test1: PropTypes.string,
  image_src1: PropTypes.string,
  text4: PropTypes.string,
  text7: PropTypes.string,
  Test: PropTypes.string,
  text: PropTypes.string,
  Register: PropTypes.string,
  text1: PropTypes.string,
}

export default Header
