"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  // State for interactive product detail toggles
  const [activeTab, setActiveTab] = useState("sua-bap");

  // State for active FAQ answers
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  return (
    <>
      {/* SECTION 1: HEADER & NAVIGATION */}
      <header className="site-header">
        <div className="container">
          <div className="logo">
            <div className="logo-icon">H</div>
            <span>HOÀNG GIA</span>
          </div>
          <nav>
            <ul className="nav-links">
              <li><a href="#ve-chung-toi">Về chúng tôi</a></li>
              <li><a href="#san-pham">Sản phẩm</a></li>
              <li><a href="#quy-trinh">Quy trình</a></li>
              <li><a href="#dinh-duong">Dinh dưỡng</a></li>
              <li><a href="#danh-gia">Đánh giá</a></li>
              <li><a href="#lien-he">Liên hệ</a></li>
            </ul>
          </nav>
          <a href="tel:0963839406" className="btn btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.85rem" }}>
            Gọi Ngay: 0963839406
          </a>
        </div>
      </header>

      <main style={{ minHeight: "100vh" }}>

        {/* SECTION 2: HERO SECTION (Layout Family A: Split Editorial Showcase) */}
        <section className="hero-section">
          <div className="container">
            <div className="layout-split">
              <div className="split-text">
                <span className="badge">100% Nguyên Chất</span>
                <h1 className="hero-title">
                  HOÀNG GIA: Sữa Bắp Tươi<br />
                  & Nước Sâm Thảo Mộc Đậm Đà
                </h1>
                <p className="hero-subtitle">
                  Thức uống tự nhiên 100% nguyên chất, giúp thanh lọc cơ thể và bảo vệ sức khỏe trọn vẹn mỗi ngày.
                </p>
                <div className="hero-ctas">
                  <a href="tel:0963839406" className="btn btn-primary">
                    Gọi đặt hàng ngay
                  </a>
                  <a href="#san-pham" className="btn btn-secondary">
                    Khám phá menu
                  </a>
                </div>
              </div>
              <div className="split-visual">
                <div className="organic-blob-bg"></div>
                <div className="hero-visual-container">
                  <div className="split-visual-wrapper">
                    <Image
                      src="/corn_milk.png"
                      alt="Sữa bắp thiên nhiên Hoàng Gia"
                      width={500}
                      height={500}
                      style={{ objectFit: "cover", width: "100%", height: "100%" }}
                      priority
                    />
                  </div>
                  <div className="hero-visual-badge">
                    Nấu Thủ Công<br />
                    Mỗi Ngày
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: BRAND STORY & PHILOSOPHY (Layout Family A: Asymmetric Split Layout) */}
        <section id="ve-chung-toi" className="section" style={{ backgroundColor: "#ffffff" }}>
          <div className="container">
            <div className="layout-split reverse">
              <div className="split-text">
                <span className="section-subtitle">Câu chuyện của chúng tôi</span>
                <h2 style={{ fontSize: "2.2rem", marginBottom: "1.5rem" }}>
                  Gìn Giữ Hương Vị Truyền Thống Việt Nam
                </h2>
                <p style={{ marginBottom: "1.25rem", color: "#6e645e" }}>
                  Tại HOÀNG GIA, chúng tôi tin rằng sức khỏe đến từ những điều nguyên bản nhất. Mỗi chai sữa bắp tươi ngon hay nước sâm thảo mộc mát lành đều được nấu thủ công trọn vẹn từ nguồn nguyên liệu chọn lọc của nông sản Việt.
                </p>
                <p style={{ marginBottom: "1.75rem", color: "#6e645e" }}>
                  Không hương liệu tổng hợp, không phẩm màu và không chất bảo quản công nghiệp. Đó là cam kết bất di bất dịch của chúng tôi để mang lại giá trị dinh dưỡng cao nhất cho gia đình và giới văn phòng bận rộn.
                </p>
                <div style={{ display: "flex", gap: "2rem" }}>
                  <div>
                    <h4 style={{ fontSize: "2rem", color: "#1e3f20", fontFamily: "var(--font-serif)" }}>100%</h4>
                    <p style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px" }}>Tự Nhiên</p>
                  </div>
                  <div style={{ borderLeft: "1px solid #c5a880", paddingLeft: "2rem" }}>
                    <h4 style={{ fontSize: "2rem", color: "#1e3f20", fontFamily: "var(--font-serif)" }}>0%</h4>
                    <p style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px" }}>Hóa Chất</p>
                  </div>
                </div>
              </div>
              <div className="split-visual">
                <div className="split-visual-wrapper" style={{ maxHeight: "380px" }}>
                  <Image
                    src="/herbal_tea.png"
                    alt="Nước sâm thảo mộc cổ truyền"
                    width={480}
                    height={380}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: CORE VALUE CARDS (Layout Family B: Clean Structured Grid - 4 Columns) */}
        <section className="section" style={{ backgroundColor: "#f7f5f0" }}>
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Cam kết từ HOÀNG GIA</span>
              <h2>Bảo Vệ Sức Khỏe Bằng Sự Tử Tế</h2>
              <p>Chúng tôi tập trung vào chất lượng trong từng khâu chế biến để mang lại những giọt uống tinh khiết nhất.</p>
            </div>
            <div className="layout-grid grid-4">
              <div className="premium-card">
                <div className="premium-card-icon">🌽</div>
                <h3>Bắp Ngọt Tươi Mới</h3>
                <p style={{ fontSize: "0.9rem" }}>
                  Tuyển chọn những trái bắp ngọt ngậm sữa từ cánh đồng miền Tây lúc sáng sớm để giữ độ ngọt thanh tự nhiên.
                </p>
              </div>
              <div className="premium-card">
                <div className="premium-card-icon">🌿</div>
                <h3>Thảo Mộc Cổ Truyền</h3>
                <p style={{ fontSize: "0.9rem" }}>
                  Nước sâm đun chậm từ 9 vị thảo mộc nam như râu ngô, mía lau, artichoke giúp thanh nhiệt giải độc tuyệt vời.
                </p>
              </div>
              <div className="premium-card">
                <div className="premium-card-icon">🏺</div>
                <h3>Nấu Thủ Công</h3>
                <p style={{ fontSize: "0.9rem" }}>
                  Chế biến theo mẻ nhỏ hàng ngày, canh lửa kỹ lưỡng theo công thức gia truyền để giữ độ sánh và hương thơm đậm đà.
                </p>
              </div>
              <div className="premium-card">
                <div className="premium-card-icon">🍶</div>
                <h3>Chai Thủy Tinh Sạch</h3>
                <p style={{ fontSize: "0.9rem" }}>
                  Đóng gói hoàn toàn bằng chai thủy tinh cao cấp được khử trùng, thân thiện với môi trường và an toàn cho người dùng.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: FLAGSHIP PRODUCTS & DYNAMIC DETAILS (Layout Family C: Asymmetric Alternate Blocks) */}
        <section id="san-pham" className="section" style={{ backgroundColor: "#ffffff" }}>
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Thực đơn thanh mát</span>
              <h2>Hương Vị Mộc Mạc Mà Đậm Đà</h2>
              <p>Hai dòng sản phẩm tinh hoa đáp ứng nhu cầu bổ sung dinh dưỡng và giải nhiệt thanh lọc cơ thể.</p>
            </div>

            {/* Interactive Toggle tabs */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "3rem", gap: "1rem" }}>
              <button
                className={`btn ${activeTab === "sua-bap" ? "btn-primary" : "btn-secondary"}`}
                onClick={() => setActiveTab("sua-bap")}
              >
                Sữa Bắp Thiên Nhiên
              </button>
              <button
                className={`btn ${activeTab === "nuoc-sam" ? "btn-primary" : "btn-secondary"}`}
                onClick={() => setActiveTab("nuoc-sam")}
              >
                Nước Sâm Thảo Mộc
              </button>
            </div>

            <div className="layout-alt-blocks">
              {activeTab === "sua-bap" ? (
                <div className="alt-block">
                  <div className="alt-content">
                    <span className="subtitle">Sản phẩm bán chạy nhất</span>
                    <h3>Sữa Bắp Thiên Nhiên Hoàng Gia</h3>
                    <p style={{ color: "#6e645e", marginBottom: "1.25rem" }}>
                      Được làm từ những hạt bắp ngọt organic xay nhuyễn, hòa quyện cùng sữa tươi sạch tạo nên hương vị béo ngậy, thơm lừng và ngọt dịu. Một chai sữa bắp buổi sáng cung cấp năng lượng tràn trề cho ngày làm việc năng động.
                    </p>
                    <ul className="alt-benefits-list">
                      <li>Giàu Vitamin A giúp sáng mắt và bảo vệ thị lực cho dân văn phòng.</li>
                      <li>Chất xơ tự nhiên hỗ trợ hệ tiêu hóa hoạt động trơn tru.</li>
                      <li>Cung cấp năng lượng tự nhiên lành mạnh, không gây tăng cân.</li>
                      <li>Đựng trong chai thủy tinh giữ lạnh sâu, uống cực ngon.</li>
                    </ul>
                    <div style={{ marginTop: "2rem", display: "flex", alignItems: "center", gap: "1.5rem" }}>
                      <span style={{ fontSize: "1.8rem", fontWeight: "800", color: "#1e3f20" }}>15.000đ / Chai</span>
                      <a href="tel:0963839406" className="btn btn-primary">Đặt mua ngay</a>
                    </div>
                  </div>
                  <div className="alt-visual">
                    <div className="alt-visual-inner">
                      <Image
                        src="/corn_milk.png"
                        alt="Sữa Bắp Thiên Nhiên Hoàng Gia"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="alt-block">
                  <div className="alt-content">
                    <span className="subtitle">Thanh lọc cơ thể</span>
                    <h3>Nước Sâm Thảo Mộc Truyền Thống</h3>
                    <p style={{ color: "#6e645e", marginBottom: "1.25rem" }}>
                      Được ninh chậm từ râu ngô chín ngọt, mía lau thanh mát, rễ tranh, lá thuốc dòi và hoa cúc khô cùng đường phèn thanh khiết. Mang lại một cảm giác sảng khoái mát lành ngay lập tức, thanh lọc gan và giải nhiệt cơ thể cực kỳ hiệu quả.
                    </p>
                    <ul className="alt-benefits-list">
                      <li>Giải nhiệt, mát gan, giảm nóng trong người cực kỳ nhanh chóng.</li>
                      <li>100% thảo mộc tự nhiên khô sạch, không pha chế phẩm màu.</li>
                      <li>Độ ngọt cực nhẹ từ mía lau và đường phèn nguyên chất.</li>
                      <li>Phù hợp cho cả gia đình uống giải nhiệt mùa hè oi bức.</li>
                    </ul>
                    <div style={{ marginTop: "2rem", display: "flex", alignItems: "center", gap: "1.5rem" }}>
                      <span style={{ fontSize: "1.8rem", fontWeight: "800", color: "#1e3f20" }}>10.000đ / Chai</span>
                      <a href="tel:0963839406" className="btn btn-primary">Đặt mua ngay</a>
                    </div>
                  </div>
                  <div className="alt-visual">
                    <div className="alt-visual-inner">
                      <Image
                        src="/herbal_tea.png"
                        alt="Nước Sâm Thảo Mộc Hoàng Gia"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* SECTION 6: TRADITIONAL CRAFTING PROCESS (Layout Family D: Horizontal Process Map) */}
        <section id="quy-trinh" className="section" style={{ backgroundColor: "#f7f5f0" }}>
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Quy trình thủ công</span>
              <h2>Chế Biến Chuẩn Sạch 4 Bước</h2>
              <p>Mỗi chai nước HOÀNG GIA gửi đến bạn đều phải trải qua quy trình chế biến khép kín vô trùng nghiêm ngặt.</p>
            </div>
            <div className="layout-steps">
              <div className="step-item">
                <div className="step-number">1</div>
                <h4>Tuyển Chọn</h4>
                <p>Nông sản tươi sạch được thu hoạch từ sáng sớm, kiểm tra kỹ lưỡng đầu vào.</p>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <h4>Nấu Đun Chậm</h4>
                <p>Xay vắt nguyên chất và đun nấu trong mồi đồng nhiệt độ chuẩn để giữ trọn vitamin.</p>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <h4>Rót Nóng Vô Trùng</h4>
                <p>Khử trùng chai thủy tinh và rót nóng trực tiếp giúp bảo quản tự nhiên lâu hơn.</p>
              </div>
              <div className="step-item">
                <div className="step-number">4</div>
                <h4>Giao Tươi Mới</h4>
                <p>Giữ lạnh ở tủ mát chuyên dụng và giao nhanh đến tay khách hàng trong ngày.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: HEALTH BENEFITS & COMPARISON (Layout Family E: Transparent Comparison Table) */}
        <section id="dinh-duong" className="section" style={{ backgroundColor: "#ffffff" }}>
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Dành cho người thông thái</span>
              <h2>Sự Khác Biệt Từ Sự Nguyên Bản</h2>
              <p>Hãy xem sự so sánh chi tiết để hiểu lý do tại sao dòng sản phẩm của chúng tôi luôn vượt trội về mặt bảo vệ sức khỏe.</p>
            </div>
            <div className="comparison-table-wrapper">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Tiêu chí so sánh</th>
                    <th className="highlight-col">Thức uống HOÀNG GIA</th>
                    <th>Nước giải khát công nghiệp</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Nguyên liệu đầu vào</strong></td>
                    <td className="highlight-col">100% bắp tươi organic và thảo mộc tự nhiên.</td>
                    <td>Hương liệu nhân tạo, phẩm màu hóa học.</td>
                  </tr>
                  <tr>
                    <td><strong>Chất bảo quản</strong></td>
                    <td className="highlight-col">Hoàn toàn không có, thời hạn dùng ngắn.</td>
                    <td>Chứa Sodium Benzoate để lưu trữ hàng năm.</td>
                  </tr>
                  <tr>
                    <td><strong>Chất tạo ngọt</strong></td>
                    <td className="highlight-col">Chỉ dùng đường phèn tự nhiên và mía lau ngọt thanh.</td>
                    <td>Sử dụng đường hóa học cường độ cao hoặc siro ngô đường.</td>
                  </tr>
                  <tr>
                    <td><strong>Vật liệu đóng chai</strong></td>
                    <td className="highlight-col">Chai thủy tinh cao cấp khử trùng tái sử dụng.</td>
                    <td>Chai nhựa dùng một lần độc hại cho cơ thể và môi trường.</td>
                  </tr>
                  <tr>
                    <td><strong>Giá trị cho sức khỏe</strong></td>
                    <td className="highlight-col">Thanh nhiệt, mát gan, bổ sung vitamin thiết thực.</td>
                    <td>Lượng calo rỗng, dễ gây tích tụ mỡ và tăng cân.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 8: PROMOTIONAL COMBO OFFER (Layout Family G: Large Single Highlight Card) */}
        <section className="section" style={{ backgroundColor: "#ffffff", paddingTop: "0" }}>
          <div className="container">
            <div className="promo-card-wrapper">
              <div className="promo-card-grid">
                <div>
                  <span className="promo-badge">Ưu đãi văn phòng & Gia đình</span>
                  <h3 className="promo-title">Combo Sức Khỏe Tuần Mới</h3>
                  <p className="promo-description">
                    Đặt hàng combo 10 chai sữa bắp tươi và nước sâm thảo mộc bất kỳ để được miễn phí giao hàng khu vực Đồng Tháp. Phù hợp cho cả gia đình giải nhiệt hoặc nhóm văn phòng uống xế chiều.
                  </p>
                  <div className="promo-price">
                    100.000đ <span>150.000đ</span>
                  </div>
                  <a href="tel:0963839406" className="btn btn-accent">
                    Đặt Combo Ngay
                  </a>
                </div>
                <div className="promo-visuals">
                  <div className="promo-drink-thumbnail">
                    <Image
                      src="/corn_milk.png"
                      alt="Thumbnail sữa bắp"
                      width={120}
                      height={120}
                      style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className="promo-drink-thumbnail" style={{ transform: "translateY(15px)" }}>
                    <Image
                      src="/herbal_tea.png"
                      alt="Thumbnail nước sâm"
                      width={120}
                      height={120}
                      style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: CUSTOMER REVIEWS (Layout Family B: Clean Structured Grid - 3 Columns) */}
        <section id="danh-gia" className="section" style={{ backgroundColor: "#f7f5f0" }}>
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Khách hàng nói gì</span>
              <h2>Hàng Ngàn Gia Đình Đã Tin Dùng</h2>
              <p>Sự hài lòng của khách hàng từ học sinh, nhân viên văn phòng cho đến các bà nội trợ là động lực to lớn của chúng tôi.</p>
            </div>
            <div className="layout-grid grid-3">
              <div className="premium-card" style={{ padding: "2rem" }}>
                <div style={{ color: "#e8a935", marginBottom: "1rem", fontSize: "1.2rem" }}>★★★★★</div>
                <p style={{ fontStyle: "italic", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
                  &quot;Cả gia đình tôi đều thích uống sữa bắp Hoàng Gia vào mỗi buổi sáng. Sữa bắp ngọt vừa phải, thơm béo vị bắp tươi chứ không phải mùi hương liệu hóa học. Chai thủy tinh rửa sạch tái sử dụng rất tốt.&quot;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#c5a880", display: "flex", alignItems: "center", justifyCenter: "center", color: "#ffffff", fontWeight: "bold", fontSize: "0.9rem" }}>
                    MA
                  </div>
                  <div>
                    <h5 style={{ fontSize: "0.95rem" }}>Chị Mai Anh</h5>
                    <p style={{ fontSize: "0.75rem" }}>Nội trợ - Quận 3</p>
                  </div>
                </div>
              </div>

              <div className="premium-card" style={{ padding: "2rem" }}>
                <div style={{ color: "#e8a935", marginBottom: "1rem", fontSize: "1.2rem" }}>★★★★★</div>
                <p style={{ fontStyle: "italic", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
                  &quot;Làm việc văn phòng ngồi máy lạnh suốt ngày da dẻ khô ráp, lại hay bị nóng trong người. Chiều nào tôi cũng gọi một chai nước sâm thảo mộc lạnh từ Hoàng Gia. Uống vào mát lạnh sảng khoái và thanh nhiệt ngay.&quot;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#1e3f20", display: "flex", alignItems: "center", justifyCenter: "center", color: "#ffffff", fontWeight: "bold", fontSize: "0.9rem" }}>
                    MT
                  </div>
                  <div>
                    <h5 style={{ fontSize: "0.95rem" }}>Anh Minh Triết</h5>
                    <p style={{ fontSize: "0.75rem" }}>Kỹ sư phần mềm - Quận 1</p>
                  </div>
                </div>
              </div>

              <div className="premium-card" style={{ padding: "2rem" }}>
                <div style={{ color: "#e8a935", marginBottom: "1rem", fontSize: "1.2rem" }}>★★★★★</div>
                <p style={{ fontStyle: "italic", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
                  &quot;Tôi theo lối sống xanh nên rất kén chọn thức uống đóng chai nhựa. Tìm được nước sâm và sữa bắp đựng chai thủy tinh của Hoàng Gia như bắt được vàng. Thương hiệu còn có chính sách thu hồi chai cũ rất văn minh.&quot;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#3d2e24", display: "flex", alignItems: "center", justifyCenter: "center", color: "#ffffff", fontWeight: "bold", fontSize: "0.9rem" }}>
                    TV
                  </div>
                  <div>
                    <h5 style={{ fontSize: "0.95rem" }}>Bạn Thanh Vy</h5>
                    <p style={{ fontSize: "0.75rem" }}>Sinh viên - Thủ Đức</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 10: FAQ INTERACTIVE ACCORDION (Layout Family B: Clean Structured Grid - 1 Column) */}
        <section className="section" style={{ backgroundColor: "#ffffff" }}>
          <div className="container" style={{ maxWidth: "800px" }}>
            <div className="section-header">
              <span className="section-subtitle">Hỏi đáp khách hàng</span>
              <h2>Những Thắc Mắc Thường Gặp</h2>
              <p>Giải đáp nhanh các câu hỏi về sản phẩm sữa bắp và nước sâm thảo mộc.</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                {
                  q: "Sản phẩm có thể bảo quản được trong bao lâu?",
                  a: "Vì sản phẩm HOÀNG GIA cam kết 100% không chứa chất bảo quản hóa học, sữa bắp tươi nên dùng tốt nhất trong vòng 2 ngày khi giữ lạnh mát. Nước sâm thảo mộc có thể giữ được từ 3 đến 5 ngày trong tủ lạnh mát tủ."
                },
                {
                  q: "HOÀNG GIA có chính sách đổi trả chai thủy tinh không?",
                  a: "Có, chúng tôi cực kỳ khuyến khích lối sống xanh. Với mỗi 10 vỏ chai thủy tinh HOÀNG GIA gửi trả lại trong lần đặt hàng tiếp theo, bạn sẽ được tặng ngay 1 chai sữa bắp hoặc nước sâm thảo mộc miễn phí."
                },
                {
                  q: "Thức uống có quá ngọt cho người ăn kiêng không?",
                  a: "Các sản phẩm của chúng tôi được điều chế với công thức ít ngọt. Nước sâm nấu ngọt thanh nhẹ từ mía lau râu ngô tự nhiên, rất phù hợp cho người ăn kiêng hoặc người muốn hạn chế đường tinh luyện."
                }
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    border: "1px solid rgba(30, 63, 32, 0.1)",
                    borderRadius: "8px",
                    overflow: "hidden",
                    transition: "all 0.3s ease"
                  }}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    style={{
                      width: "100%",
                      padding: "1.25rem 1.5rem",
                      backgroundColor: activeFaq === index ? "rgba(30, 63, 32, 0.03)" : "#ffffff",
                      border: "none",
                      outline: "none",
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontFamily: "var(--font-sans)",
                      fontWeight: "600",
                      fontSize: "1rem",
                      color: "var(--color-primary-dark)"
                    }}
                  >
                    <span>{item.q}</span>
                    <span style={{ fontSize: "1.2rem", color: "var(--color-accent)" }}>
                      {activeFaq === index ? "-" : "+"}
                    </span>
                  </button>
                  {activeFaq === index && (
                    <div
                      style={{
                        padding: "1.25rem 1.5rem",
                        backgroundColor: "#ffffff",
                        borderTop: "1px solid rgba(30, 63, 32, 0.05)",
                        fontSize: "0.9rem",
                        color: "var(--color-text-muted)"
                      }}
                    >
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 11: CONTACT & DIRECT ORDER ACTION (Layout Family H: Contact Grid & Action Panel) */}
        <section id="lien-he" className="section section-dark">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-info">
                <span className="section-subtitle" style={{ color: "var(--color-accent)" }}>Liên hệ đặt hàng</span>
                <h3 style={{ fontSize: "2.2rem" }}>Thanh Mát Tức Thì, Giao Ngay Tận Cửa</h3>
                <p style={{ marginBottom: "2rem" }}>
                  Hãy liên hệ với HOÀNG GIA để mang nguồn dinh dưỡng thanh lành tự nhiên về cho gia đình và đồng nghiệp văn phòng của bạn ngay hôm nay.
                </p>
                <ul className="footer-contact-list">
                  <li>
                    <span className="footer-contact-icon">📍</span>
                    <div>
                      <strong>Cửa hàng chính:</strong>
                      <p style={{ fontSize: "0.9rem" }}>13 Phan Văn Út, Sa Đéc, Đồng Tháp</p>
                    </div>
                  </li>
                  <li>
                    <span className="footer-contact-icon">📞</span>
                    <div>
                      <strong>Điện thoại đặt hàng:</strong>
                      <p style={{ fontSize: "0.9rem" }}>0963839406 (Zalo đặt mẻ nóng mỗi ngày)</p>
                    </div>
                  </li>
                  <li>
                    <span className="footer-contact-icon">⏰</span>
                    <div>
                      <strong>Thời gian mở cửa:</strong>
                      <p style={{ fontSize: "0.9rem" }}>07:00 sáng đến 20:00 tối hàng ngày</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="footer-action-panel">
                <h4>Đặt Hàng Nhanh Siêu Tốc</h4>
                <p style={{ fontSize: "0.85rem", color: "rgba(247,245,240,0.6)" }}>
                  Lựa chọn kênh đặt hàng phù hợp nhất để nhận thức uống tươi ngon mát lạnh sớm nhất:
                </p>

                {/* DIRECT PHONE CALL ACTION BUTTON */}
                <a
                  href="tel:0963839406"
                  className="btn btn-accent"
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    padding: "1rem 2rem",
                    fontSize: "1.05rem",
                    fontWeight: "800"
                  }}
                  id="direct-phone-call-btn"
                >
                  📞 Gọi Ngay Cho Chúng Tôi (0963839406)
                </a>

                {/* STRUCTURED FACEBOOK CONTACT BUTTON */}
                <a
                  href="https://www.facebook.com/tuan.tran.209467"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    padding: "1rem 2rem",
                    color: "#ffffff",
                    borderColor: "#ffffff",
                    fontSize: "1rem"
                  }}
                  id="facebook-contact-btn"
                >
                  💬 Nhắn Tin Qua Facebook Profile
                </a>

                <p style={{ fontSize: "0.75rem", textAlign: "center", color: "rgba(247,245,240,0.5)" }}>
                  * Miễn phí giao hàng nội thành cho các hóa đơn từ 5 chai trở lên.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="copyright-bar">
        <div className="container">
          <p style={{ color: "rgba(247, 245, 240, 0.4)", fontSize: "0.8rem" }}>
            Bản quyền © 2026 HOÀNG GIA Drinks. Tất cả các quyền được bảo lưu. Nguyên chất 100% vì sức khỏe cộng đồng.
          </p>
        </div>
      </footer>

      {/* PROMINENT FLOATING PHONE BUTTON */}
      <a
        href="tel:0963839406"
        className="floating-order-trigger"
        aria-label="Gọi điện đặt sữa bắp"
        id="floating-call-btn"
      >
        <span style={{ fontSize: "1.2rem" }}>📞</span>
        <span>Gọi Ngay: 0963839406</span>
      </a>
    </>
  );
}
