import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const HeaderClient = () => {
  const slides = [
    [
      {
        text: "Sản phẩm chính hãng",
        icon: <i className="ri-shield-check-line"></i>,
        bg: "bg-green-100",
        textColor: "text-emerald-700",
      },
      {
        text: "CAM KẾT LỖ ĐỔI LIỀN (*)",
        icon: <i className="ri-repeat-2-line"></i>,
        bg: "bg-green-100",
        textColor: "text-emerald-700",
      },
      {
        text: "Sản phẩm chính hãng",
        icon: <i className="ri-phone-line"></i>,
        bg: "bg-green-100",
        textColor: "text-emerald-700",
      },
      {
        text: "Sản phẩm chính hãng",
        icon: <i className="ri-box-3-line"></i>,
        bg: "bg-green-100",
        textColor: "text-emerald-700",
      },
    ],
    [
      {
        text: "Thu cũ giá cao toàn sản phẩm",
        icon: <i className="ri-repeat-2-line"></i>,
        bg: "bg-red-100",
        textColor: "text-red-700",
      },
    ],
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };
  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div className="bg-[#F4F4F4]">
      <div
        className={`${currentSlide[0].bg} transition-colors duration-500 ease-in-out`}
      >
        <div className="container mx-auto flex items-center justify-between py-2">
          <button onClick={goPrev} className="font-bold text-xl text-green-800">
            <i className="ri-arrow-left-s-line"></i>
          </button>
          <div className="flex gap-10 transition-all duration-500 ease-in-out">
            {currentSlide.map((item, index) => (
              <div key={index} className="flex gap-2">
                <span className={`${item.textColor} font-medium`}>
                  {item.icon}
                </span>
                <span className={`${item.textColor} font-medium`}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
          <button onClick={goNext} className="font-bold text-xl text-green-800">
            <i className="ri-arrow-right-s-line"></i>
          </button>
        </div>
      </div>

      {/* Header */}
      <div className="container mx-auto">
        <header className="flex justify-between items-center py-5">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="w-10 h-10" />
            <h2 className="text-2xl font-semibold text-green-950">
              SMARTHUB<span className="text-green-600">.COM</span>
            </h2>
          </div>
          <div className="bg-white rounded-2xl">
            <form action="" className="flex px-4 py-4 rounded-2xl">
              <input
                type="text"
                placeholder="Hôm nay bạn muốn tìm kiếm gì?"
                className="w-96 outline-none"
              />
              <button className="flex border-l-[1px] border-[#ccc] pl-4 gap-2 text-green-600 items-center group">
                <i className="ri-search-2-line text-xl font-medium group-hover:text-green-800 transition-colors duration-100 ease-in-out"></i>
                <p className="font-medium group-hover:text-green-800 transition-colors duration-100 ease-in-out">
                  Tìm kiếm
                </p>
              </button>
            </form>
          </div>
          <div className="flex items-center gap-4">
            <div
              className="relative"
              onMouseEnter={() => setShowAccountDropdown(true)}
              onMouseLeave={() => setShowAccountDropdown(false)}
            >
              <div className="flex items-center gap-1 group cursor-pointer">
                <i className="ri-user-3-line text-base text-green-600 group-hover:text-green-800 transition-colors duration-100 ease-in-out"></i>
                <p className="text-xs font-medium text-green-600 group-hover:text-green-800 transition-colors duration-100 ease-in-out">
                  Tài khoản
                </p>
              </div>

              {/* Box Đăng ký/Đăng nhập */}
              {/* === PHẦN ĐÃ CHỈNH SỬA === */}
              <div
                className={`absolute top-full right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-10
                           transition-all duration-300 ease-out
                           ${
                             showAccountDropdown
                               ? "opacity-100 translate-y-0 visible"
                               : "opacity-0 translate-y-2 invisible"
                           }`}
              >
                <Link
                  to="/register"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-green-600 transition-colors duration-200"
                >
                  Đăng ký
                </Link>
                <Link
                  to="/login"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-green-600 transition-colors duration-200"
                >
                  Đăng nhập
                </Link>
              </div>
              {/* === KẾT THÚC PHẦN CHỈNH SỬA === */}
            </div>
            <div className="flex items-center gap-1 group">
              <i className="ri-shopping-bag-4-line text-2xl text-[#777] group-hover:text-green-800 transition-colors duration-100 ease-in-out"></i>
              <span className="bg-red-500 rounded-full py-1 px-2 text-white text-xs">
                0
              </span>
            </div>
          </div>
        </header>
      </div>
      <hr />
      <div className="container mx-auto py-3">
        <nav>
          <ul className="flex gap-8">
            <li>
              <Link
                to={`/`}
                className="text-base font-medium hover:text-green-600 transition-colors ease-in-out duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={`/`}
                className="flex items-center gap-1 text-base font-medium group"
              >
                <p className="group-hover:text-green-600 transition-colors ease-in-out duration-300">
                  Products
                </p>
                <i className="ri-arrow-down-s-line group-hover:text-green-600 transition-colors ease-in-out duration-300"></i>
              </Link>
            </li>
            <li>
              <Link
                to={`/`}
                className="text-base font-medium hover:text-green-600 transition-colors ease-in-out duration-300"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                to={`/`}
                className="text-base font-medium hover:text-green-600 transition-colors ease-in-out duration-300"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to={`/`}
                className="text-base font-medium hover:text-green-600 transition-colors ease-in-out duration-300"
              >
                Orders
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderClient;
