import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/certificates');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, c => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

function createCertificateSvg({
  type = 'BẰNG KHEN',
  headerTop = 'CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM',
  headerMotto = 'Độc lập - Tự do - Hạnh phúc',
  issuer = 'BỘ GIÁO DỤC VÀ ĐÀO TẠO',
  issuerSub = 'BỘ TRƯỞNG BỘ GIÁO DỤC VÀ ĐÀO TẠO',
  conferText = 'TẶNG THƯỞNG CHO',
  recipientName = 'TRẦN BẢO KHIÊM',
  recipientSchool = 'Học sinh Trường PT Thực hành Sư phạm, TP. Long Xuyên, Tỉnh An Giang',
  achievement = 'Đã có thành tích xuất sắc đạt GIẢI NHẤT BẢNG D1',
  contest = 'Hội thi Tin học trẻ toàn quốc lần thứ XXXI - năm 2025',
  decision = 'Quyết định số: 2727/QĐ-BGDĐT ngày 01 tháng 10 năm 2025',
  date = 'Hà Nội, ngày 01 tháng 10 năm 2025',
  signerTitle = 'BỘ TRƯỞNG',
  signerName = 'Nguyễn Kim Sơn',
  codeBadge = 'Bảng D1 - 2025 - Cấp Quốc gia',
  goldBorder = true,
  themeColor = '#b45309'
}) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="100%" height="100%" style="background:#fffaf0; font-family:'Times New Roman', Times, serif;">
  <defs>
    <linearGradient id="parchment" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fffdf5" />
      <stop offset="50%" stop-color="#fff9ea" />
      <stop offset="100%" stop-color="#fff2d6" />
    </linearGradient>

    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#eab308" />
      <stop offset="25%" stop-color="#ca8a04" />
      <stop offset="50%" stop-color="#fef08a" />
      <stop offset="75%" stop-color="#b45309" />
      <stop offset="100%" stop-color="#854d0e" />
    </linearGradient>

    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity="0.15" />
    </filter>
  </defs>

  <!-- Background Canvas -->
  <rect width="1000" height="700" fill="url(#parchment)" />

  <!-- Outer Decorative Border -->
  <rect x="25" y="25" width="950" height="650" fill="none" stroke="${goldBorder ? 'url(#goldGrad)' : '#b45309'}" stroke-width="8" rx="10" />
  <rect x="38" y="38" width="924" height="624" fill="none" stroke="#d97706" stroke-width="2" stroke-dasharray="8,4" />
  <rect x="44" y="44" width="912" height="612" fill="none" stroke="#b45309" stroke-width="1.5" />

  <!-- Corner Ornaments -->
  <g fill="${goldBorder ? '#ca8a04' : '#b45309'}">
    <path d="M48,48 L90,48 L90,52 L52,52 L52,90 L48,90 Z" />
    <circle cx="56" cy="56" r="4" />
    <path d="M952,48 L910,48 L910,52 L948,52 L948,90 L952,90 Z" />
    <circle cx="944" cy="56" r="4" />
    <path d="M48,652 L90,652 L90,648 L52,648 L52,610 L48,610 Z" />
    <circle cx="56" cy="644" r="4" />
    <path d="M952,652 L910,652 L910,648 L948,648 L948,610 L952,610 Z" />
    <circle cx="944" cy="644" r="4" />
  </g>

  <!-- Vietnam National Emblem Star Badge -->
  <g transform="translate(500, 75)" text-anchor="middle">
    <circle cx="0" cy="18" r="22" fill="#dc2626" stroke="#fbbf24" stroke-width="3" />
    <polygon points="0,4 5,16 18,16 8,24 12,36 0,28 -12,36 -8,24 -18,16 -5,16" fill="#fde047" />
  </g>

  <!-- State Header -->
  <text x="500" y="125" text-anchor="middle" font-size="16" font-weight="bold" letter-spacing="2" fill="#1e293b">
    ${escapeXml(headerTop)}
  </text>
  <text x="500" y="146" text-anchor="middle" font-size="14" font-weight="600" font-style="italic" fill="#334155">
    ${escapeXml(headerMotto)}
  </text>
  <line x1="420" y1="154" x2="580" y2="154" stroke="#d97706" stroke-width="1.5" />

  <!-- Code Badge Stamp (Top Right) -->
  <g transform="translate(800, 68)">
    <rect x="-8" y="-12" width="140" height="26" rx="6" fill="#0f172a" />
    <text x="62" y="5" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="10.5" font-weight="bold" fill="#fde047">
      ${escapeXml(codeBadge.length > 22 ? codeBadge.substring(0, 21) + '...' : codeBadge)}
    </text>
  </g>

  <!-- Issuer -->
  <text x="500" y="195" text-anchor="middle" font-size="20" font-weight="bold" letter-spacing="1.5" fill="#0f172a">
    ${escapeXml(issuer)}
  </text>
  ${issuerSub ? `
  <text x="500" y="218" text-anchor="middle" font-size="15" font-weight="bold" letter-spacing="1" fill="#475569">
    ${escapeXml(issuerSub)}
  </text>` : ''}

  <!-- Certificate Main Title -->
  <text x="500" y="275" text-anchor="middle" font-size="38" font-weight="900" font-family="'Times New Roman', Georgia, serif" letter-spacing="4" fill="${themeColor}" filter="url(#shadow)">
    ${escapeXml(type)}
  </text>

  <!-- Conferred text -->
  <text x="500" y="315" text-anchor="middle" font-size="16" font-style="italic" font-weight="bold" fill="#64748b">
    ${escapeXml(conferText)}
  </text>

  <!-- Recipient Name -->
  <text x="500" y="365" text-anchor="middle" font-size="34" font-weight="bold" letter-spacing="3" fill="#0f172a">
    ${escapeXml(recipientName)}
  </text>

  <!-- Recipient School / Organization -->
  <text x="500" y="395" text-anchor="middle" font-size="15" font-style="italic" fill="#334155">
    ${escapeXml(recipientSchool)}
  </text>

  <line x1="300" y1="415" x2="700" y2="415" stroke="#cbd5e1" stroke-width="1" />

  <!-- Achievement Title -->
  <text x="500" y="445" text-anchor="middle" font-size="20" font-weight="bold" fill="#b45309">
    ${escapeXml(achievement)}
  </text>

  <!-- Contest Title -->
  <text x="500" y="475" text-anchor="middle" font-size="17" font-weight="600" fill="#1e293b">
    ${escapeXml(contest)}
  </text>

  <!-- Decision Number -->
  ${decision ? `
  <text x="500" y="505" text-anchor="middle" font-size="13" font-style="italic" fill="#64748b">
    (${escapeXml(decision)})
  </text>` : ''}

  <!-- Footer Left: Record info -->
  <g transform="translate(140, 560)">
    <text x="0" y="0" font-size="12" fill="#64748b" font-style="italic">Vào sổ khen thưởng số: 01</text>
    <text x="0" y="20" font-size="12" fill="#64748b" font-style="italic">${escapeXml(decision.split(' ngày')[0] || '')}</text>
  </g>

  <!-- Footer Right: Signature & Red Stamp -->
  <g transform="translate(730, 540)" text-anchor="middle">
    <text x="0" y="0" font-size="13" font-style="italic" fill="#334155">${escapeXml(date)}</text>
    <text x="0" y="24" font-size="14" font-weight="bold" letter-spacing="1" fill="#0f172a">${escapeXml(signerTitle)}</text>

    <!-- Red Circular Seal -->
    <g transform="translate(0, 65) rotate(-10)">
      <circle cx="0" cy="0" r="46" fill="none" stroke="#dc2626" stroke-width="3" stroke-dasharray="3,1" opacity="0.88" />
      <circle cx="0" cy="0" r="42" fill="none" stroke="#dc2626" stroke-width="1.5" opacity="0.88" />
      <circle cx="0" cy="0" r="28" fill="none" stroke="#dc2626" stroke-width="1" opacity="0.88" />
      <polygon points="0,-10 3,-3 10,-3 4,2 6,9 0,5 -6,9 -4,2 -10,-3 -3,-3" fill="#dc2626" opacity="0.88" />
      <text y="-32" font-size="7" font-weight="bold" fill="#dc2626" opacity="0.9" letter-spacing="0.5">VIỆT NAM</text>
      <text y="38" font-size="6.5" font-weight="bold" fill="#dc2626" opacity="0.9" letter-spacing="0.5">${escapeXml(issuer.length > 25 ? issuer.substring(0, 24) : issuer)}</text>
    </g>

    <!-- Signatures -->
    <path d="M-40,75 Q-15,45 10,65 T45,55" fill="none" stroke="#1d4ed8" stroke-width="2.5" stroke-linecap="round" opacity="0.8" />
    <path d="M-20,60 Q5,35 30,70" fill="none" stroke="#1d4ed8" stroke-width="1.8" opacity="0.75" />

    <text x="0" y="115" font-size="15" font-weight="bold" fill="#0f172a">${escapeXml(signerName)}</text>
  </g>
</svg>`;
}

const allCertificates = [
  // 11 real certificates mapped from bang_khen_thuc_te.md
  {
    fileName: '1792206532699_831253993017824801_831253993017824801_f96e243c121c38b9fc584e8acc9ebef4.jpg',
    canonicalName: 'cert-bgd-2025.svg',
    options: {
      type: 'BẰNG KHEN',
      issuer: 'BỘ GIÁO DỤC VÀ ĐÀO TẠO',
      issuerSub: 'BỘ TRƯỞNG BỘ GIÁO DỤC VÀ ĐÀO TẠO',
      conferText: 'TẶNG THƯỞNG CHO',
      recipientName: 'TRẦN BẢO KHIÊM',
      recipientSchool: 'Học sinh Trường PT Thực hành Sư phạm, TP. Long Xuyên, Tỉnh An Giang',
      achievement: 'Đã có thành tích xuất sắc đạt GIẢI NHẤT BẢNG D1',
      contest: 'Hội thi Tin học trẻ toàn quốc lần thứ XXXI - năm 2025',
      decision: 'Quyết định số: 2727/QĐ-BGDĐT ngày 01/10/2025',
      date: 'Hà Nội, ngày 01 tháng 10 năm 2025',
      signerTitle: 'BỘ TRƯỞNG',
      signerName: 'Nguyễn Kim Sơn',
      codeBadge: 'Bảng D1 - 2025 - Cấp Quốc gia',
      themeColor: '#b45309'
    }
  },
  {
    fileName: '1792206532694_831253993017824801_831253993017824801_1fa9b23bf3dbe6bf2745e91ff95590fd.jpg',
    canonicalName: 'cert-dhqg-2025.svg',
    options: {
      type: 'BẰNG KHEN',
      issuer: 'ĐẠI HỌC QUỐC GIA THÀNH PHỐ HỒ CHÍ MINH',
      issuerSub: 'GIÁM ĐỐC ĐẠI HỌC QUỐC GIA THÀNH PHỐ HỒ CHÍ MINH',
      conferText: 'TẶNG THƯỞNG CHO',
      recipientName: 'TRẦN BẢO KHIÊM',
      recipientSchool: 'Trường PT Thực hành Sư phạm, TP. Long Xuyên, Tỉnh An Giang',
      achievement: 'Đạt Giải Nhất Bảng D1 Hội thi Tin học trẻ toàn quốc 2025',
      contest: 'Hội thi Tin học trẻ toàn quốc lần thứ 31 năm 2025',
      decision: 'Quyết định số: 2058/QĐ-ĐHQG ngày 21/10/2025 (Số sổ vàng: 1)',
      date: 'TP. Hồ Chí Minh, ngày 21 tháng 10 năm 2025',
      signerTitle: 'KT. GIÁM ĐỐC - PHÓ GIÁM ĐỐC',
      signerName: 'Nguyễn Thị Thanh Mai',
      codeBadge: 'Bảng D1 - 2025 - Cấp Quốc gia',
      themeColor: '#b45309'
    }
  },
  {
    fileName: '1792206532700_831253993017824801_831253993017824801_8866c2cfbcf71c7c8b1595edf4bf282d.jpg',
    canonicalName: 'cert-tuoitresangtao-2025.svg',
    options: {
      type: 'HUY HIỆU TUỔI TRẺ SÁNG TẠO',
      issuer: 'BAN CHẤP HÀNH TRUNG ƯƠNG ĐOÀN TNCS HỒ CHÍ MINH',
      issuerSub: 'BAN THƯỜNG VỤ TRUNG ƯƠNG ĐOÀN',
      conferText: 'TRAO TẶNG CHO',
      recipientName: 'TRẦN BẢO KHIÊM',
      recipientSchool: 'Thí sinh xuất sắc Vòng Chung kết Tin học trẻ Toàn quốc 2025',
      achievement: 'Đạt Huy Hiệu Tuổi Trẻ Sáng Tạo Toàn Quốc',
      contest: 'Ban Chấp hành Trung ương Đoàn TNCS Hồ Chí Minh chứng nhận',
      decision: 'Quyết định số: 1534 QĐKT/TWĐTN-VP ngày 10/8/2025',
      date: 'Hà Nội, ngày 10 tháng 8 năm 2025',
      signerTitle: 'BÍ THƯ THỨ NHẤT',
      signerName: 'Bùi Quang Huy',
      codeBadge: 'Tuổi trẻ Sáng tạo - 2025 - Cấp Quốc gia',
      themeColor: '#dc2626'
    }
  },
  {
    fileName: '1792206532698_831253993017824801_831253993017824801_005b2c3b35e6c600d14290cdf4c25f18.jpg',
    canonicalName: 'cert-khuvuc-d1-2025.svg',
    options: {
      type: 'GIẤY CHỨNG NHẬN',
      issuer: 'TRUNG TÂM PHÁT TRIỂN KHCN VÀ TÀI NĂNG TRẺ (CYTAST)',
      issuerSub: 'BAN TỔ CHỨC HỘI THI TIN HỌC TRẺ TOÀN QUỐC',
      conferText: 'CHỨNG NHẬN THÍ SINH',
      recipientName: 'TRẦN BẢO KHIÊM',
      recipientSchool: 'Tỉnh Đoàn An Giang - Bảng D1',
      achievement: 'ĐÃ ĐẠT GIẢI NHẤT BẢNG D1 VÒNG KHU VỰC MIỀN NAM',
      contest: 'Hội thi Tin học trẻ toàn quốc lần thứ XXXI - Năm 2025',
      decision: 'Văn bản số: 141-TB/KHCN ngày 22/7/2025',
      date: 'Ngày 22 tháng 7 năm 2025',
      signerTitle: 'PHÓ TRƯỞNG BAN THƯỜNG TRỰC BTC',
      signerName: 'Trần Hữu',
      codeBadge: 'Bảng D1 - 2025 - Cấp Khu vực',
      themeColor: '#4338ca'
    }
  },
  {
    fileName: '1792206532701_831253993017824801_831253993017824801_a3e4a7a8fa232bb0b266a2e363316d29.jpg',
    canonicalName: 'cert-tinh-d1-2025.svg',
    options: {
      type: 'GIẤY CÔNG NHẬN',
      issuer: 'BAN THƯỜNG VỤ TỈNH ĐOÀN AN GIANG',
      issuerSub: 'HỘI THI TIN HỌC TRẺ TỈNH AN GIANG',
      conferText: 'CÔNG NHẬN THÍ SINH',
      recipientName: 'TRẦN BẢO KHIÊM',
      recipientSchool: 'Trường PT Thực hành Sư phạm, TP. Long Xuyên',
      achievement: 'ĐẠT GIẢI NHẤT - BẢNG D1 (SẢN PHẨM SÁNG TẠO)',
      contest: 'Hội thi Tin học trẻ tỉnh An Giang lần thứ XXV năm 2025',
      decision: 'Quyết định số: 333-QĐ/TĐTN-TTNTH ngày 19/4/2025',
      date: 'An Giang, ngày 19 tháng 4 năm 2025',
      signerTitle: 'PHÓ BÍ THƯ TỈNH ĐOÀN',
      signerName: 'Hồ Thị Hồng Phượng',
      codeBadge: 'Bảng D1 - 2025 - Cấp Tỉnh',
      themeColor: '#0369a1'
    }
  },
  {
    fileName: '1792206532697_831253993017824801_831253993017824801_30775fa862b066859424b0c419b13c82.jpg',
    canonicalName: 'cert-tinh-a-2025.svg',
    options: {
      type: 'GIẤY CÔNG NHẬN',
      issuer: 'BAN THƯỜNG VỤ TỈNH ĐOÀN AN GIANG',
      issuerSub: 'HỘI THI TIN HỌC TRẺ TỈNH AN GIANG',
      conferText: 'CÔNG NHẬN THÍ SINH',
      recipientName: 'TRẦN BẢO KHIÊM',
      recipientSchool: 'Trường PT Thực hành Sư phạm, TP. Long Xuyên',
      achievement: 'ĐẠT GIẢI KHUYẾN KHÍCH - BẢNG A',
      contest: 'Hội thi Tin học trẻ tỉnh An Giang lần thứ XXV năm 2025',
      decision: 'Quyết định số: 333-QĐ/TĐTN-TTNTH ngày 19/4/2025',
      date: 'An Giang, ngày 19 tháng 4 năm 2025',
      signerTitle: 'PHÓ BÍ THƯ TỈNH ĐOÀN',
      signerName: 'Hồ Thị Hồng Phượng',
      codeBadge: 'Bảng A - 2025 - Cấp Tỉnh',
      themeColor: '#0369a1'
    }
  },
  {
    fileName: '1792206532696_831253993017824801_831253993017824801_d888a23367c9fe44e7c2fe20de90d609.jpg',
    canonicalName: 'cert-tinh-d1-2024.svg',
    options: {
      type: 'GIẤY CÔNG NHẬN',
      issuer: 'BAN THƯỜNG VỤ TỈNH ĐOÀN AN GIANG',
      issuerSub: 'HỘI THI TIN HỌC TRẺ TỈNH AN GIANG',
      conferText: 'CÔNG NHẬN THÍ SINH',
      recipientName: 'TRẦN BẢO KHIÊM',
      recipientSchool: 'Trường PT Thực hành Sư phạm, TP. Long Xuyên',
      achievement: 'ĐẠT GIẢI NHÌ - BẢNG D1',
      contest: 'Hội thi Tin học trẻ tỉnh An Giang lần thứ XXIV năm 2024',
      decision: 'Quyết định số: 201-QĐ/TĐTN-TTNTH ngày 23/3/2024',
      date: 'An Giang, ngày 23 tháng 3 năm 2024',
      signerTitle: 'PHÓ BÍ THƯ TỈNH ĐOÀN',
      signerName: 'Hồ Thị Hồng Phượng',
      codeBadge: 'Bảng D1 - 2024 - Cấp Tỉnh',
      themeColor: '#0369a1'
    }
  },
  {
    fileName: '1792206532702_831253993017824801_831253993017824801_37b624b1efe9177de5aea7f9ba6abdc6.jpg',
    canonicalName: 'cert-tp-d1-2025.svg',
    options: {
      type: 'GIẤY KHEN',
      issuer: 'ỦY BAN NHÂN DÂN THÀNH PHỐ LONG XUYÊN',
      issuerSub: 'PHÒNG GIÁO DỤC VÀ ĐÀO TẠO THÀNH PHỐ LONG XUYÊN',
      conferText: 'KHEN TẶNG EM',
      recipientName: 'TRẦN BẢO KHIÊM',
      recipientSchool: 'Học sinh Trường Tiểu học Châu Văn Liêm',
      achievement: 'ĐẠT GIẢI NHẤT BẢNG D1 (SẢN PHẨM SÁNG TẠO)',
      contest: 'Hội thi Tin học trẻ cấp thành phố năm học 2024 - 2025',
      decision: 'Quyết định số: 499/QĐ-PGDĐT ngày 10/4/2025',
      date: 'Long Xuyên, ngày 10 tháng 4 năm 2025',
      signerTitle: 'TRƯỞNG PHÒNG',
      signerName: 'Dương Kiếm Anh',
      codeBadge: 'Bảng D1 - 2025 - Cấp Thành phố',
      themeColor: '#047857'
    }
  },
  {
    fileName: '1792206532695_831253993017824801_831253993017824801_0e33e60199641dfa258879be3bda8753.jpg',
    canonicalName: 'cert-tp-a-2025.svg',
    options: {
      type: 'GIẤY KHEN',
      issuer: 'ỦY BAN NHÂN DÂN THÀNH PHỐ LONG XUYÊN',
      issuerSub: 'PHÒNG GIÁO DỤC VÀ ĐÀO TẠO THÀNH PHỐ LONG XUYÊN',
      conferText: 'KHEN TẶNG EM',
      recipientName: 'TRẦN BẢO KHIÊM',
      recipientSchool: 'Học sinh Trường Tiểu học Châu Văn Liêm',
      achievement: 'ĐẠT GIẢI NHÌ BẢNG A (LẬP TRÌNH CÁ NHÂN)',
      contest: 'Hội thi Tin học trẻ cấp thành phố năm học 2024 - 2025',
      decision: 'Quyết định số: 499/QĐ-PGDĐT ngày 10/4/2025',
      date: 'Long Xuyên, ngày 10 tháng 4 năm 2025',
      signerTitle: 'TRƯỞNG PHÒNG',
      signerName: 'Dương Kiếm Anh',
      codeBadge: 'Bảng A - 2025 - Cấp Thành phố',
      themeColor: '#047857'
    }
  },
  {
    fileName: '1792206532692_831253993017824801_831253993017824801_9e2c9b611ecab2e5d937f77ff33d6934.jpg',
    canonicalName: 'cert-khuvuc-a-2026.svg',
    options: {
      type: 'GIẤY CHỨNG NHẬN',
      issuer: 'TRUNG TÂM PHÁT TRIỂN KHCN VÀ TÀI NĂNG TRẺ (CYTAST)',
      issuerSub: 'BAN TỔ CHỨC HỘI THI TIN HỌC TRẺ TOÀN QUỐC LẦN THỨ XXXII',
      conferText: 'CHỨNG NHẬN THÍ SINH',
      recipientName: 'TRẦN BẢO KHIÊM',
      recipientSchool: 'Trường THCS Lý Thường Kiệt, Tỉnh An Giang',
      achievement: 'ĐẠT GIẢI NHÌ BẢNG A VÒNG KHU VỰC MIỀN NAM',
      contest: 'Hội thi Tin học trẻ toàn quốc lần thứ XXXII - Năm 2026',
      decision: 'Thông báo số: 155-TB/KHCN ngày 13/8/2026',
      date: 'Ngày 13 tháng 8 năm 2026',
      signerTitle: 'GIÁM ĐỐC TRUNG TÂM',
      signerName: 'Trịnh Minh Thái',
      codeBadge: 'Bảng A - 2026 - Cấp Khu vực',
      themeColor: '#4338ca'
    }
  },
  {
    fileName: '1792206532693_831253993017824801_831253993017824801_6c5b46ade714379f6eefc989b79ac47e.jpg',
    canonicalName: 'cert-khuvuc-d2-2026.svg',
    options: {
      type: 'GIẤY CHỨNG NHẬN',
      issuer: 'TRUNG TÂM PHÁT TRIỂN KHCN VÀ TÀI NĂNG TRẺ (CYTAST)',
      issuerSub: 'BAN TỔ CHỨC HỘI THI TIN HỌC TRẺ TOÀN QUỐC LẦN THỨ XXXII',
      conferText: 'CHỨNG NHẬN THÍ SINH',
      recipientName: 'TRẦN BẢO KHIÊM',
      recipientSchool: 'Trường THCS Lý Thường Kiệt, Tỉnh An Giang',
      achievement: 'ĐẠT GIẢI BA BẢNG D2 VÒNG KHU VỰC MIỀN NAM',
      contest: 'Hội thi Tin học trẻ toàn quốc lần thứ XXXII - Năm 2026',
      decision: 'Thông báo số: 155-TB/KHCN ngày 13/8/2026',
      date: 'Ngày 13 tháng 8 năm 2026',
      signerTitle: 'GIÁM ĐỐC TRUNG TÂM',
      signerName: 'Trịnh Minh Thái',
      codeBadge: 'Bảng D2 - 2026 - Cấp Khu vực',
      themeColor: '#4338ca'
    }
  },
  // Additional school and provincial contests
  {
    canonicalName: 'cert-d2-2026-tinh.svg',
    options: {
      type: 'GIẤY KHEN',
      issuer: 'BAN THƯỜNG VỤ TỈNH ĐOÀN AN GIANG',
      issuerSub: 'HỘI THI TIN HỌC TRẺ TỈNH AN GIANG',
      conferText: 'TUYÊN DƯƠNG VÀ KHEN TẶNG',
      recipientName: 'TRẦN BẢO KHIÊM',
      recipientSchool: 'Trường THCS Lý Thường Kiệt, TP. Long Xuyên',
      achievement: 'ĐẠT GIẢI NHẤT BẢNG D2 (SẢN PHẨM SÁNG TẠO)',
      contest: 'Hội thi Tin học trẻ tỉnh An Giang năm 2026',
      decision: 'Quyết định số: 245-QĐ/TĐTN ngày 2026',
      date: 'An Giang, năm 2026',
      signerTitle: 'BÍ THƯ TỈNH ĐOÀN',
      signerName: 'Phan Duy Bằng',
      codeBadge: 'Bảng D2 - 2026 - Cấp Tỉnh',
      themeColor: '#0369a1'
    }
  },
  {
    canonicalName: 'cert-a-2026-quocgia.svg',
    options: {
      type: 'BẰNG KHEN',
      issuer: 'BAN CHẤP HÀNH TRUNG ƯƠNG ĐOÀN TNCS HỒ CHÍ MINH',
      issuerSub: 'HỘI THI TIN HỌC TRẺ TOÀN QUỐC',
      conferText: 'TẶNG THƯỞNG CHO THÍ SINH',
      recipientName: 'TRẦN BẢO KHIÊM',
      recipientSchool: 'Tỉnh Đoàn An Giang - Bảng A',
      achievement: 'ĐẠT GIẢI KHUYẾN KHÍCH QUỐC GIA BẢNG A',
      contest: 'Hội thi Tin học trẻ toàn quốc lần thứ XXXII - Năm 2026',
      decision: 'Quyết định khen thưởng Ban Chấp hành Trung ương Đoàn năm 2026',
      date: 'Hà Nội, năm 2026',
      signerTitle: 'BÍ THƯ TRUNG ƯƠNG ĐOÀN',
      signerName: 'Ngô Văn Cương',
      codeBadge: 'Bảng A - 2026 - Cấp Quốc gia',
      themeColor: '#b45309'
    }
  },
  {
    canonicalName: 'cert-hoctap-2025-truong.svg',
    options: {
      type: 'GIẤY KHEN',
      issuer: 'BAN GIÁM HIỆU NHÀ TRƯỜNG',
      issuerSub: 'TRƯỜNG TIỂU HỌC CHÂU VĂN LIÊM',
      conferText: 'KHEN TẶNG EM',
      recipientName: 'TRẦN BẢO KHIÊM',
      recipientSchool: 'Lớp 5, Trường Tiểu học Châu Văn Liêm',
      achievement: 'HỌC SINH XUẤT SẮC TIÊU BIỂU TOÀN TRƯỜNG',
      contest: 'Năm học 2024 - 2025 - Top 10 Học sinh Tiêu biểu Toàn khối',
      decision: 'Quyết định khen thưởng cuối năm học 2024 - 2025',
      date: 'Long Xuyên, tháng 5 năm 2025',
      signerTitle: 'HIỆU TRƯỞNG',
      signerName: 'Ban Giám Hiệu',
      codeBadge: 'Học tập - 2025 - Cấp Trường',
      themeColor: '#047857'
    }
  },
  {
    canonicalName: 'cert-dodunghoctap-2025-truong.svg',
    options: {
      type: 'GIẤY KHEN',
      issuer: 'BAN GIÁM HIỆU TRƯỜNG TIỂU HỌC CHÂU VĂN LIÊM',
      issuerSub: 'CUỘC THI THIẾT KẾ ĐỒ DÙNG HỌC TẬP',
      conferText: 'KHEN TẶNG EM',
      recipientName: 'TRẦN BẢO KHIÊM',
      recipientSchool: 'Học sinh Trường Tiểu học Châu Văn Liêm, TP. Long Xuyên',
      achievement: 'ĐẠT GIẢI A (GIẢI CAO NHẤT)',
      contest: 'Cuộc thi Thiết kế đồ dùng học tập cấp Trường năm 2025',
      decision: 'Khen thưởng chuyên đề Sáng tạo thanh thiếu nhi',
      date: 'Long Xuyên, năm học 2024 - 2025',
      signerTitle: 'HIỆU TRƯỞNG',
      signerName: 'Ban Giám Hiệu',
      codeBadge: 'Sáng tạo - 2025 - Cấp Trường',
      themeColor: '#047857'
    }
  },
  {
    canonicalName: 'cert-hungbien-2025-truong.svg',
    options: {
      type: 'GIẤY KHEN',
      issuer: 'BAN GIÁM HIỆU TRƯỜNG TIỂU HỌC CHÂU VĂN LIÊM',
      issuerSub: 'CUỘC THI HÙNG BIỆN TIẾNG ANH',
      conferText: 'KHEN TẶNG EM',
      recipientName: 'TRẦN BẢO KHIÊM',
      recipientSchool: 'Học sinh Trường Tiểu học Châu Văn Liêm, TP. Long Xuyên',
      achievement: 'ĐẠT GIẢI BA HÙNG BIỆN TIẾNG ANH',
      contest: 'Cuộc thi Hùng biện tiếng Anh cấp Trường năm học 2024 - 2025',
      decision: 'Khen thưởng phong trào Ngoại ngữ học đường',
      date: 'Long Xuyên, năm học 2024 - 2025',
      signerTitle: 'HIỆU TRƯỞNG',
      signerName: 'Ban Giám Hiệu',
      codeBadge: 'Tiếng Anh - 2025 - Cấp Trường',
      themeColor: '#047857'
    }
  },
  {
    canonicalName: 'cert-st-2024-tinh.svg',
    options: {
      type: 'GIẤY KHEN',
      issuer: 'BAN TỔ CHỨC CUỘC THI SÁNG TẠO TTN-NĐ TỈNH AN GIANG',
      issuerSub: 'LIÊN HIỆP CÁC HỘI KHOA HỌC & KỸ THUẬT TỈNH AN GIANG',
      conferText: 'TẶNG THƯỞNG CHO',
      recipientName: 'TRẦN BẢO KHIÊM',
      recipientSchool: 'Tác giả Phần mềm Vui học Tiếng Việt lớp 1',
      achievement: 'ĐẠT GIẢI KHUYẾN KHÍCH CẤP TỈNH',
      contest: 'Cuộc thi Sáng tạo Thanh thiếu niên, Nhi đồng Tỉnh An Giang lần thứ XIII năm 2024',
      decision: 'Quyết định khen thưởng Ban Tổ chức Cuộc thi lần thứ XIII',
      date: 'An Giang, năm 2024',
      signerTitle: 'TRƯỞNG BAN TỔ CHỨC',
      signerName: 'Ban Tổ Chức',
      codeBadge: 'Sáng tạo - 2024 - Cấp Tỉnh',
      themeColor: '#0369a1'
    }
  },
  {
    canonicalName: 'cert-robot-2026-truong.svg',
    options: {
      type: 'GIẤY KHEN',
      issuer: 'BAN GIÁM HIỆU TRƯỜNG PT THỰC HÀNH SƯ PHẠM',
      issuerSub: 'CUỘC THI SÁNG TẠO KHOA HỌC KỸ THUẬT',
      conferText: 'KHEN TẶNG EM',
      recipientName: 'TRẦN BẢO KHIÊM',
      recipientSchool: 'Học sinh Trường PT Thực hành Sư phạm',
      achievement: 'ĐẠT GIẢI C — SẢN PHẨM ROBOT GIAO TIẾP TIẾNG ANH',
      contest: 'Cuộc thi Thiết kế đồ dùng học tập cấp Trường năm 2026',
      decision: 'Khen thưởng phong trào Sáng tạo trẻ',
      date: 'An Giang, năm 2026',
      signerTitle: 'HIỆU TRƯỞNG',
      signerName: 'Ban Giám Hiệu',
      codeBadge: 'Sáng tạo - 2026 - Cấp Trường',
      themeColor: '#047857'
    }
  }
];

allCertificates.forEach(item => {
  const svg = createCertificateSvg(item.options);
  const canonicalPath = path.join(outDir, item.canonicalName);
  fs.writeFileSync(canonicalPath, svg, 'utf-8');

  // Also write into public/ root
  fs.writeFileSync(path.resolve('public', item.canonicalName), svg, 'utf-8');

  // If has fileName alias (from upload)
  if (item.fileName) {
    fs.writeFileSync(path.resolve('public', item.fileName), svg, 'utf-8');
    fs.writeFileSync(path.join(outDir, item.fileName), svg, 'utf-8');
  }

  console.log(`Generated: ${item.canonicalName}`);
});

console.log('Complete set of all certificates generated successfully!');
