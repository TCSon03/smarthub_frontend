import React, { useEffect, useState } from "react";

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
    <>
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
        <header className="flex justify-between items-center">
          <h2 className="">SMARTHUB.COM</h2>
          <div>
            <form action="">
              <input type="text" placeholder="Hôm nay bạn muốn tìm kiếm gì?" />
              <button>
                <i className="ri-search-2-line"></i>
                <p>Tìm kiếm</p>
              </button>
            </form>
          </div>
          <div>
            <div>
              <i className="ri-user-3-line"></i>
              <p>Tài khoản</p>
            </div>
            <div>
              <i className="ri-shopping-cart-2-line"></i>
              <p>Giỏ hàng</p>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default HeaderClient;
