import "@Assets/less/layoutMenuHeader.less";
import { auth } from "@Observer/ObFirebase";
import { signOut } from "firebase/auth";
import { useState } from "react";

export default function MenuHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpenProfile, setMenuOpenProfile] = useState(false);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => console.log("sign out success"))
      .catch((e) => console.error("Unknow error"));
  };
  return (
    <>
      <div class="top-navigation">
        <div class="container">
          <ul>
            <li>
              <a href="/mobileswitch?mobile=true">Bản mobile</a>
            </li>
            <li>
              <a href="/gioi-thieu-cong-ty">Giới thiệu</a>
            </li>
            <li>
              <a href="/san-pham-da-xem">Sản phẩm đã xem</a>
            </li>
            <li>
              <a href="/trung-tam-bao-hanh">Trung tâm bảo hành</a>
            </li>
            <li>
              <a href="/he-thong-cua-hang">Hệ thống 126 siêu thị</a>
            </li>
            <li>
              <a href="https://tuyendung.hoanghamobile.com/">Tuyển dụng</a>
            </li>
            <li>
              <a href="/order/check">Tra cứu đơn hàng</a>
            </li>
            <li>
              <a id="login-modal" href="/Account/Login?ReturnUrl=/">
                Đăng nhập
              </a>
            </li>
          </ul>
        </div>
      </div>

      <nav className="list scroll-to-fixed-fixed">
        <div className="container">
          <ul className="root">
            <li id="dien-thoai-di-dong" className="mg">
              <a href="#" target="self">
                <i class="icon fa-solid fa-mobile-screen-button"></i>
                <span>ĐIỆN THOẠI</span>
              </a>
              <div className="sub-container">
                <div className="sub">
                  {/* Menu giá 1 */}
                  <div className="menu g1">
                    <h4>
                      <a href="#">Hãng sản xuất</a>
                    </h4>
                    <ul className="display-column format_3">
                      <li>
                        <a href="#">Apple</a>
                      </li>
                      <li>
                        <a href="#">SamSung</a>
                      </li>
                      <li>
                        <a href="#">Xiaomi</a>
                      </li>
                      <li>
                        <a href="#">OPPO</a>
                      </li>
                      <li>
                        <a href="#">Nokia</a>
                      </li>
                      <li>
                        <a href="#">realme</a>
                      </li>
                      <li>
                        <a href="#">Vivo</a>
                      </li>
                      <li>
                        <a href="#">Nubia</a>
                      </li>
                      <li>
                        <a href="#">Energizer</a>
                      </li>
                      <li>
                        <a href="#">XOR</a>
                      </li>
                      <li>
                        <a href="#">Masstel</a>
                      </li>
                      <li>
                        <a href="#">TCL</a>
                      </li>
                      <li>
                        <a href="#">Philips</a>
                      </li>
                      <li>
                        <a href="#">Itel</a>
                      </li>
                      <li>
                        <a href="#">BPhone</a>
                      </li>
                      <li>
                        <a href="#">TECNO</a>
                      </li>
                    </ul>
                    <h4>
                      <a href="#">Điện thoại cao cấp</a>
                    </h4>
                    <ul className="display-row format_1"></ul>
                  </div>

                  {/* Menu giá 2 */}
                  <div className="menu g2">
                    <h4>
                      <a href="#">Mức giá</a>
                    </h4>
                    <ul className="display-row format_2">
                      <li>
                        <a href="#">Trên 100 triệu</a>
                      </li>
                      <li>
                        <a href="#">Dưới 1 triệu</a>
                      </li>
                      <li>
                        <a href="#">Từ 2 đến 3 triệu</a>
                      </li>
                      <li>
                        <a href="#">Từ 3 đến 4 triệu</a>
                      </li>
                      <li>
                        <a href="#">Từ 6 đến 8 triệu</a>
                      </li>
                      <li>
                        <a href="#">Từ 15 đến 20 triệu</a>
                      </li>
                      <li>
                        <a href="#">Từ 20 đến 100 triệu</a>
                      </li>
                    </ul>
                  </div>

                  {/* Menu Gía 3 */}
                  <div className="menu g3">
                    <h4>
                      <a href="Quan tâm nhất"></a>
                    </h4>
                    <ul className="display-row format_2">
                      <li>
                        <a href="#">Hôm nay</a>
                      </li>
                      <li>
                        <a href="#">Tuần này</a>
                      </li>
                      <li>
                        <a href="#">Tháng này</a>
                      </li>
                      <li>
                        <a href="#">Năm nay</a>
                      </li>
                    </ul>
                  </div>
                  <div className="menu ads">
                    <a
                      href="https://hoanghamobile.com/dien-thoai-di-dong/samsung/galaxy-z-fold-z-flip-2022"
                      target="_blank"
                    >
                      <img src="../public/web-banner.jpg" alt="Cuồng nhiệt như ở khán đài" />
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li id="dong-ho">
              <a href="#" target="self">
                <i class="icon fa-regular fa-clock"></i>
                <span>ĐỒNG HỒ</span>
              </a>
            </li>
            <li id="lap-top">
              <a href="#" target="self">
                <i class="icon fa-solid fa-laptop"></i>
                <span>LAPTOP</span>
              </a>
            </li>
            <li id="apple">
              <a href="#" target="self">
                <i class="icon fa-solid fa-tablet-screen-button"></i>
                <span>APPLE</span>
              </a>
            </li>
            <li id="man-hinh">
              <a href="#" target="self">
                <i icon class="fa-solid fa-tv"></i>
                <span>MÀN HÌNH</span>
              </a>
            </li>
            <li id="smart-tv">
              <a href="#" target="self">
                <i icon class="fa-solid fa-tv"></i>
                <span>SMART TV</span>
              </a>
            </li>
            <li id="tablet">
              <a href="#" target="self">
                <i icon class="fa-solid fa-tablet"></i>
                <span>TABLET</span>
              </a>
            </li>
            <li id="am-thanh">
              <a href="#" target="self">
                <i class="icon fa-solid fa-headphones"></i>
                <span>ÂM THANH</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
