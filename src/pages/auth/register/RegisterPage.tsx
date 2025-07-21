import React from "react";
import logo from "../../../assets/images/logo.png";
import logo_auth from "../../../assets/images/logo_auth.png";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div>
      <div className="flex h-screen">
        <div className="flex-1 bg-green-200">
          <div className="min-h-screen bg-gradient-to-br from-green-100 to-yellow-100 flex items-center justify-center p-4">
            <div className="w-full max-w-4xl rounded-lg overflow-hidden">
              <div className="flex items-center justify-center py-6 gap-2 mb-6">
                <img
                  src={logo}
                  alt="Hoang Ha Mobile Logo"
                  className="h-8 md:h-10"
                />
                <h2 className="font-semibold text-3xl text-green-800">
                  S M A R T <span className="text-green-600">H U B</span>
                </h2>
              </div>
              <div className="flex items-center justify-center -mt-4 mb-8">
                <span className="bg-gradient-to-r from-gray-200 to-white text-gray-700 font-bold px-4 py-2 rounded-full text-sm uppercase">
                  Nhập hội
                </span>
                <h1 className="text-green-600 text-3xl md:text-4xl font-extrabold ml-4">
                  Smart Hub Member
                </h1>
              </div>
              <div className="bg-teal-700 mx-auto px-6 py-8 rounded-lg text-white max-w-3xl mb-12">
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-fill text-green-300 mt-1" />
                    <span>
                      Đặc quyền hạng EDU lên đến{" "}
                      <span className="font-bold">5% giá trị sản phẩm</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-fill text-green-300 mt-1" />
                    <span>
                      Hạng thành viên càng cao chiết khấu sản phẩm càng nhiều
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-fill text-green-300 mt-1" />
                    <span>Tích điểm thành viên siêu dễ – mua sắm thả ga</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-fill text-green-300 mt-1" />
                    <span>
                      Thay Pin điện thoại ưu đãi đến{" "}
                      <span className="font-bold">20%</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-fill text-green-300 mt-1" />
                    <span>
                      Miễn phí giao hàng toàn quốc cho đơn hàng từ{" "}
                      <span className="font-bold">300.000đ</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-fill text-green-300 mt-1" />
                    <span>
                      Và vô vàn các ưu đãi thành viên hấp dẫn khác đang chờ bạn
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center mb-8">
                <button
                  className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg
               hover:bg-orange-600 transition-colors duration-300 ease-in-out"
                >
                  XEM CHI TIẾT ƯU ĐÃI
                </button>
              </div>
              <div className="relative w-full h-64 mt-4 mb-4">
                <img
                  src={logo_auth}
                  alt="Mascot"
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-48 z-10"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="px-60">
            <h3 className="font-bold text-lg mb-8">
              Chào mừng bạn tới SmartHub
            </h3>
            <p className="text-sm font-semibold mb-5">
              Bạn đã từng mua sắm tại SmartHub? Đăng nhập mua hàng ngay
            </p>
            <form action="" className="mb-2">
              <div className="mb-4">
                <label htmlFor="" className="text-sm font-semibold block mb-2">
                  Nhập tên của bạn
                </label>
                <input
                  type="text"
                  className="w-full border rounded-md px-4 py-2 outline-none"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="" className="text-sm font-semibold block mb-2">
                  Nhập email của bạn
                </label>
                <input
                  type="text"
                  className="w-full border rounded-md px-4 py-2 outline-none"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="" className="text-sm font-semibold block mb-2">
                  Nhập mật khẩu của bạn
                </label>
                <input
                  type="password"
                  className="w-full border rounded-md px-4 py-2 outline-none"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="" className="text-sm font-semibold block mb-2">
                  Xác nhận mật khẩu
                </label>
                <input
                  type="text"
                  className="w-full border rounded-md px-4 py-2 outline-none"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-green-700 rounded-md py-3 text-white font-mideum hover:bg-green-900 hover:text-green-100 transition-color duration-300 ease-in-out"
                >
                  Tiếp tục
                </button>
              </div>
            </form>
            <Link
              to={`/login`}
              className="font-semibold text-green-600 hover:text-green-700 ease-in-out duration-300 cursor-pointer"
            >
              Đăng nhập tài khoản
            </Link>
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-300" />
              <span className="flex-shrink px-4 text-gray-500 font-medium">
                Hoặc đăng nhập bằng
              </span>
              <div className="flex-grow border-t border-gray-300" />
            </div>
            <div className="space-y-4 mb-4">
              <button
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-lg font-semibold
           bg-blue-600 text-white shadow-md
           hover:bg-blue-700 transition-colors duration-200"
              >
                <img
                  src="https://haiauint.vn/wp-content/uploads/2024/02/zalo-icon.png"
                  alt="Zalo"
                  className="h-6 w-6"
                />{" "}
                <span>Đăng nhập với Zalo</span>
              </button>
              <button
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-lg font-semibold
           bg-white text-gray-700 border border-gray-300 shadow-md
           hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                  alt="Google"
                  className="h-6 w-6"
                />{" "}
                <span>Đăng nhập với Google</span>
              </button>
              <button
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-lg font-semibold
           bg-blue-700 text-white shadow-md
           hover:bg-blue-800 transition-colors duration-200"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                  alt="Facebook"
                  className="h-6 w-6"
                />{" "}
                <span>Đăng nhập với Facebook</span>
              </button>
            </div>

            <p className="text-sm">
              Bằng việc tiếp tục, bạn đã đọc và đồng ý với{" "}
              <span className="text-green-500 underline">
                Chính sách bảo mật thông tin cá nhân
              </span>{" "}
              của SmartHub
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
