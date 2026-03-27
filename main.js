// ============================================================
// ★ Google Maps API 키를 아래에 입력하세요 ★
//   Google Cloud Console > APIs & Services > Credentials
//   필요한 API: Maps JavaScript API, Places API
// ============================================================
// API 키는 index.html 의 script src 쿼리 파라미터에 입력됩니다.
// const GOOGLE_MAPS_API_KEY = "YOUR_API_KEY_HERE";  // 참고용
// ============================================================

// ===========================
// 상수: 도시 목록
// ===========================
const CITIES = {
    sapporo: {
      label: "삿포로",
      lat: 43.0621,
      lng: 141.3544,
      zoom: 13,
      radius: 3000,
    },
    kawasaki: { label: "가와사키", lat: 35.5308, lng: 139.7036, zoom: 13, radius: 3000 },
    saitama: { label: "사이타마", lat: 35.8617, lng: 139.6455, zoom: 13, radius: 3000 },
    hiroshima: { label: "히로시마", lat: 34.3853, lng: 132.4553, zoom: 13, radius: 3000 },
    sendai: { label: "센다이", lat: 38.2682, lng: 140.8694, zoom: 13, radius: 3000 },
    kitakyushu: { label: "기타큐슈", lat: 33.8830, lng: 130.8753, zoom: 13, radius: 3000 },
    chiba: { label: "지바", lat: 35.6074, lng: 140.1065, zoom: 13, radius: 3000 },
    sakai: { label: "사카이", lat: 34.5733, lng: 135.4828, zoom: 13, radius: 3000 },
    niigata: { label: "니가타", lat: 37.9162, lng: 139.0364, zoom: 13, radius: 3000 },
    hamamatsu: { label: "하마마쓰", lat: 34.7108, lng: 137.7261, zoom: 13, radius: 3000 },
    kumamoto: { label: "구마모토", lat: 32.8031, lng: 130.7079, zoom: 13, radius: 3000 },
    shizuoka: { label: "시즈오카", lat: 34.9756, lng: 138.3828, zoom: 13, radius: 3000 },
    okayama: { label: "오카야마", lat: 34.6551, lng: 133.9195, zoom: 13, radius: 3000 },
    kagoshima: { label: "가고시마", lat: 31.5966, lng: 130.5571, zoom: 13, radius: 3000 },
    funabashi: { label: "후나바시", lat: 35.6940, lng: 139.9826, zoom: 13, radius: 3000 },
    higashiosaka: { label: "히가시오사카", lat: 34.6794, lng: 135.6008, zoom: 13, radius: 3000 },
    himeji: { label: "히메지", lat: 34.8151, lng: 134.6853, zoom: 13, radius: 3000 },
    utsunomiya: { label: "우츠노미야", lat: 36.5551, lng: 139.8828, zoom: 13, radius: 3000 },
    matsuyama: { label: "마쓰야마", lat: 33.8392, lng: 132.7657, zoom: 13, radius: 3000 },
    matsudo: { label: "마쓰도", lat: 35.7798, lng: 139.9016, zoom: 13, radius: 3000 },
    nagasaki: { label: "나가사키", lat: 32.7503, lng: 129.8777, zoom: 13, radius: 3000 },
    nagano: { label: "나가노", lat: 36.6513, lng: 138.1810, zoom: 13, radius: 3000 },
    gifu: { label: "기후", lat: 35.4233, lng: 136.7607, zoom: 13, radius: 3000 },
    hirakata: { label: "히라카타", lat: 34.8131, lng: 135.6491, zoom: 13, radius: 3000 },
    yokosuka: { label: "요코스카", lat: 35.2810, lng: 139.6721, zoom: 13, radius: 3000 },
    kurashiki: { label: "구라시키", lat: 34.5850, lng: 133.7717, zoom: 13, radius: 3000 },
    ichikawa: { label: "이치카와", lat: 35.7219, lng: 139.9311, zoom: 13, radius: 3000 },
    amagasaki: { label: "아마가사키", lat: 34.7324, lng: 135.4197, zoom: 13, radius: 3000 },
    nara: { label: "나라", lat: 34.6851, lng: 135.8048, zoom: 13, radius: 3000 },
    toyama: { label: "도야마", lat: 36.6953, lng: 137.2113, zoom: 13, radius: 3000 },
    wakayama: { label: "와카야마", lat: 34.2260, lng: 135.1675, zoom: 13, radius: 3000 },
    hakodate: { label: "하코다테", lat: 41.7687, lng: 140.7288, zoom: 13, radius: 3000 },
    aomori: { label: "아오모리", lat: 40.8222, lng: 140.7474, zoom: 13, radius: 3000 },
    morioka: { label: "모리오카", lat: 39.7036, lng: 141.1527, zoom: 13, radius: 3000 },
    yamagata: { label: "야마가타", lat: 38.2554, lng: 140.3396, zoom: 13, radius: 3000 },
    fukushima: { label: "후쿠시마", lat: 37.7608, lng: 140.4747, zoom: 13, radius: 3000 },
    mito: { label: "미토", lat: 36.3659, lng: 140.4712, zoom: 13, radius: 3000 },
    kofu: { label: "고후", lat: 35.6621, lng: 138.5684, zoom: 13, radius: 3000 },
    nagaoka: { label: "나가오카", lat: 37.4464, lng: 138.8512, zoom: 13, radius: 3000 },
    matsumoto: { label: "마쓰모토", lat: 36.2381, lng: 137.9720, zoom: 13, radius: 3000 },
    numazu: { label: "누마즈", lat: 35.0956, lng: 138.8635, zoom: 13, radius: 3000 },
    fuji: { label: "후지", lat: 35.1614, lng: 138.6763, zoom: 13, radius: 3000 },
    tsu: { label: "쓰", lat: 34.7186, lng: 136.5056, zoom: 13, radius: 3000 },
    hikone: { label: "히코네", lat: 35.2744, lng: 136.2596, zoom: 13, radius: 3000 },
    ise: { label: "이세", lat: 34.4901, lng: 136.7082, zoom: 13, radius: 3000 },
    matsue: { label: "마쓰에", lat: 35.4681, lng: 133.0484, zoom: 13, radius: 3000 },
    tottori: { label: "돗토리", lat: 35.5011, lng: 134.2351, zoom: 13, radius: 3000 },
    tokushima: { label: "도쿠시마", lat: 34.0703, lng: 134.5548, zoom: 13, radius: 3000 },
    saga: { label: "사가", lat: 33.2494, lng: 130.2988, zoom: 13, radius: 3000 },
    sasebo: { label: "사세보", lat: 33.1799, lng: 129.7151, zoom: 13, radius: 3000 },
    beppu: { label: "벳푸", lat: 33.2795, lng: 131.4970, zoom: 13, radius: 3000 },
  tokyo: {
    label: "도쿄",
    lat: 35.6895,
    lng: 139.6917,
    zoom: 13,
    radius: 3000,
  },
  osaka: {
    label: "오사카",
    lat: 34.6937,
    lng: 135.5023,
    zoom: 13,
    radius: 3000,
  },
  kyoto: {
    label: "교토",
    lat: 35.0116,
    lng: 135.7681,
    zoom: 13,
    radius: 3000,
  },
  fukuoka: {
    label: "후쿠오카",
    lat: 33.5904,
    lng: 130.4017,
    zoom: 13,
    radius: 3000,
  },
};

// ===========================
// 상수: 카테고리 → 일본어 키워드 매핑
// ===========================
const CATEGORY_KEYWORDS = {
  ramen:     "ラーメン",
  sushi:     "寿司",
  tonkatsu:  "とんかつ 牛かつ",
  izakaya:   "居酒屋",
  cafe:      "カフェ",
  yakitori:  "焼き鳥",
  tempura:   "天ぷら",
  yakiniku:  "焼肉",
  hotel:     "ホテル",
  guesthouse:"ゲストハウス",
  ryokan:    "旅館",
  shrine:    "神社",
  temple:    "寺",
  park:      "公園",
  shopping:  "ショッピング",
};

// ===========================
// 상태
// ===========================
let map = null;
let placesService = null;
let infoWindow = null;
let markers = [];
let currentResults = [];
let selectedCity = "";
let selectedCategory = "";
let selectedRating = "all";
let lastSearchCenter = null;  // 마지막 검색 중심좌표
let mapMoved = false;         // 지도가 검색 후 이동했는지 여부
let lastMapLang = 'ja';

// ===========================
// Google Maps 초기화 콜백
// (index.html 의 &callback=initMap 으로 호출됨)
// ===========================
function initMap() {
  // 지도 언어 감지
  const langSel = document.getElementById('map-lang-select');
  lastMapLang = langSel && langSel.value ? langSel.value : 'ja';

  // 기존 지도/마커/상태 초기화
  clearMarkers();
  clearResultList();
  currentResults = [];
  lastSearchCenter = null;
  mapMoved = false;

  // 기본 표시 위치: 일본 중앙 부근
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 35.6895, lng: 139.6917 },
    zoom: 6,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: true,
  });

  placesService = new google.maps.places.PlacesService(map);
  infoWindow = new google.maps.InfoWindow();

  // 지도 이동/줄어보기 시 재검색 버튼 표시
  map.addListener("idle", () => {
    if (!lastSearchCenter || !selectedCategory) return;
    const center = map.getCenter();
    const moved = google.maps.geometry
      ? google.maps.geometry.spherical.computeDistanceBetween(center, lastSearchCenter) > 200
      : haversineDistance(center, lastSearchCenter) > 200;
    const zoomChanged = map.getZoom() !== (lastSearchCenter._zoom || map.getZoom());
    if (moved || zoomChanged) {
      mapMoved = true;
      showResearchBtn(true);
    }
  });

  // 지도 언어 변경 시 안내
  if (window._mapLangChanged) {
    showEmptyState('지도 언어가 변경되었습니다.<br>도시와 카테고리를 다시 선택해 검색해 주세요.');
    window._mapLangChanged = false;
  }

  bindEvents();
}
// 지도 언어 변경 감지 (index.html에서 window._mapLangChanged = true로 설정)
if (typeof window !== 'undefined') {
  window._mapLangChanged = false;
  const langSel = document.getElementById('map-lang-select');
  if (langSel) {
    langSel.addEventListener('change', function() {
      window._mapLangChanged = true;
    });
  }
}

// ===========================
// 이벤트 바인딩
// ===========================
function bindEvents() {
  const citySelect = document.getElementById("city-select");
  const categorySelect = document.getElementById("category-select");
  const searchBtn = document.getElementById("search-btn");
  const ratingBtns = document.querySelectorAll(".rating-btn");

  const handleCitySelection = (e) => {
    selectedCity = e.target.value;
    updateSearchBtn();

    if (!selectedCity) return;

    const city = CITIES[selectedCity];
    if (!city || !map) return;

    map.panTo({ lat: city.lat, lng: city.lng });
    map.setZoom(city.zoom);
    showResearchBtn(false);
    clearMarkers();
    clearResultList();
  };

  citySelect.addEventListener("change", handleCitySelection);
  citySelect.addEventListener("input", handleCitySelection);

  categorySelect.addEventListener("change", (e) => {
    selectedCategory = e.target.value;
    updateSearchBtn();
  });

  ratingBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      ratingBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedRating = btn.dataset.rating;

      // 이미 결과가 있으면 재필터링
      if (currentResults.length > 0) {
        renderFilteredResults(currentResults);
      }
    });
  });

  searchBtn.addEventListener("click", () => {
    if (selectedCity && selectedCategory) {
      searchPlaces();
    }
  });

  // 현재 지도에서 재검색 버튼
  document.getElementById("research-btn").addEventListener("click", () => {
    if (selectedCategory) {
      searchPlacesByCenter(map.getCenter(), getRadiusFromZoom(map.getZoom()));
    }
  });
}

// ===========================
// 검색 버튼 활성화 제어
// ===========================
function updateSearchBtn() {
  const btn = document.getElementById("search-btn");
  btn.disabled = !(selectedCity && selectedCategory);
}

// ===========================
// Places API 호출 (일본어 + 한국어 병렬 검색)
// ===========================
function searchPlaces() {
  const city = CITIES[selectedCity];
  if (!city) return;
  searchPlacesByCenter(
    new google.maps.LatLng(city.lat, city.lng),
    city.radius
  );
}

function searchPlacesByCenter(center, radius) {
  const keyword = CATEGORY_KEYWORDS[selectedCategory];
  if (!keyword) return;

  showLoading(true);
  showResearchBtn(false);
  clearMarkers();
  clearResultList();
  currentResults = [];

  // 검색 중심 기록
  lastSearchCenter = center;
  lastSearchCenter._zoom = map.getZoom();
  mapMoved = false;

  const baseReq = {
    query: keyword,
    location: center,
    radius: radius,
  };

  let jaResults = null;
  const koMap = {};
  const enMap = {};
  let pendingCount = 3;

  function tryFinalize() {
    pendingCount--;
    if (pendingCount > 0) return;

    showLoading(false);

    if (jaResults === false) {
      showEmptyState("검색 중 오류가 발생했습니다.\nAPI 키를 확인해 주세요.");
      return;
    }
    if (!jaResults || jaResults.length === 0) {
      showEmptyState("검색 결과가 없습니다.");
      return;
    }

    const merged = jaResults.map((p) => ({
      ...p,
      koName: (koMap[p.place_id] && koMap[p.place_id].name !== p.name)
        ? koMap[p.place_id].name
        : "",
      koAddress: koMap[p.place_id] ? koMap[p.place_id].address : "",
      enName: enMap[p.place_id] ? enMap[p.place_id].name : "",
      enAddress: enMap[p.place_id] ? enMap[p.place_id].address : "",
    }));

    currentResults = merged;
    renderFilteredResults(merged);
  }

  placesService.textSearch({ ...baseReq, language: "ja" }, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      jaResults = results;
    } else if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
      jaResults = [];
    } else {
      jaResults = false;
    }
    tryFinalize();
  });

  placesService.textSearch({ ...baseReq, language: "ko" }, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      results.forEach((p) => {
        koMap[p.place_id] = {
          name: p.name,
          address: p.formatted_address || p.vicinity || "",
        };
      });
    }
    tryFinalize();
  });

  placesService.textSearch({ ...baseReq, language: "en" }, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      results.forEach((p) => {
        enMap[p.place_id] = {
          name: p.name || "",
          address: p.formatted_address || p.vicinity || "",
        };
      });
    }
    tryFinalize();
  });
}

// ===========================
// 평점 필터 적용 후 렌더링
// ===========================
function renderFilteredResults(results) {
  let filtered = results;

  if (selectedRating === "3") {
    filtered = results.filter((p) => p.rating >= 3);
  } else if (selectedRating === "3-4") {
    filtered = results.filter((p) => p.rating >= 3 && p.rating < 4);
  } else if (selectedRating === "4-5") {
    filtered = results.filter((p) => p.rating >= 4);
  }

  clearMarkers();
  renderMarkers(filtered);
  renderResultList(filtered);
}

// ===========================
// 마커 생성
// ===========================
function renderMarkers(places) {
  places.forEach((place, index) => {
    const position = place.geometry && place.geometry.location;
    if (!position) return;

    const marker = new google.maps.Marker({
      position,
      map,
      title: place.name,
      label: {
        text: String(index + 1),
        color: "#fff",
        fontSize: "11px",
        fontWeight: "bold",
      },
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 14,
        fillColor: "#e63946",
        fillOpacity: 1,
        strokeColor: "#fff",
        strokeWeight: 2,
      },
    });

    marker.addListener("click", () => {
      openInfoWindow(marker, place, index);
      highlightListItem(index);
    });

    markers.push(marker);
  });
}

// ===========================
// InfoWindow 열기
// ===========================
function openInfoWindow(marker, place, index) {
  const rating = place.rating
    ? `⭐ ${place.rating.toFixed(1)}${place.user_ratings_total ? ` (${place.user_ratings_total}개)` : ""}`
    : "평점 없음";

  const address = place.formatted_address || place.vicinity || "주소 정보 없음";
  const mapsUrl = getGoogleMapsPlaceUrl(place);
  const koNameHtml = place.koName
    ? `<div class="info-window-name-ko">${escapeHtml(place.koName)}</div>`
    : "";
  const koAddressHtml = place.koAddress
    ? `<div class="info-window-address-ko">${escapeHtml(place.koAddress)}</div>`
    : "";

  // Visit Japan Web용 정보 패널 (숙소 카테고리만)
  let vjwPanel = "";
  const isStayCategory = ["hotel", "guesthouse", "ryokan"].includes(selectedCategory);
  if (isStayCategory) {
    const vjw = buildVisitJapanData(place);
    vjwPanel = `
      <div class="vjw-panel" style="margin-top:10px;padding:10px 8px;background:#f8f9fa;border-radius:8px;border:1px solid #dee2e6;">
        <div style="font-weight:700;font-size:13px;margin-bottom:4px;">Visit Japan Web용 복사 텍스트</div>
        <textarea class="vjw-copy-text" style="width:100%;font-size:12px;line-height:1.5;padding:6px;resize:none;" rows="6" readonly>${vjw.fullText}</textarea>
        <button onclick="copyToClipboard(this.previousElementSibling.value)" style="margin-top:6px;padding:4px 12px;font-size:12px;border-radius:6px;border:1px solid #e63946;background:#fff;color:#e63946;cursor:pointer;">복사</button>
        <div style="margin-top:8px;font-size:11px;color:#888;">Visit Japan Web에 붙여넣기 하세요.</div>
      </div>
    `;
  }

  const saveGuideHtml = buildGoogleMapsSaveGuideHtml(mapsUrl, true);

  const content = `
    <div class="info-window">
      <div class="info-window-name">${escapeHtml(place.name)}</div>
      ${koNameHtml}
      <div class="info-window-rating">${rating}</div>
      <div class="info-window-address">${escapeHtml(address)}</div>
      ${koAddressHtml}
      <a class="info-window-link info-window-open-btn" href="${mapsUrl}" target="_blank" rel="noopener noreferrer">
        Google Maps에서 열기
      </a>
      ${vjwPanel}
      ${saveGuideHtml}
    </div>
  `;

  infoWindow.setContent(content);
  infoWindow.open(map, marker);
}

// ===========================
// 결과 리스트 렌더링
// ===========================
function renderResultList(places) {
  const list = document.getElementById("result-list");
  const countEl = document.getElementById("result-count");

  countEl.textContent = `${places.length}개`;

  if (places.length === 0) {
    showEmptyState("현재 평점 조건에 맞는 결과가 없습니다.");
    return;
  }

  // 리뷰수 내림차순 정렬
  const sorted = [...places].sort((a, b) => (b.user_ratings_total || 0) - (a.user_ratings_total || 0));

  const isStayCategory = ["hotel", "guesthouse", "ryokan"].includes(selectedCategory);

  list.innerHTML = sorted
    .map((place, index) => {
      const rating = place.rating
        ? `⭐ ${place.rating.toFixed(1)}${place.user_ratings_total ? ` <span class="result-item-reviews">(${place.user_ratings_total.toLocaleString()} 리뷰)</span>` : ""}`
        : "평점 없음";
      const address = place.formatted_address || place.vicinity || "";
      const mapsUrl = getGoogleMapsPlaceUrl(place);

      const koNameHtml = place.koName
        ? `<span class="result-item-name-ko">${escapeHtml(place.koName)}</span>`
        : "";
      const koAddressHtml = place.koAddress
        ? `<div class="result-item-address-ko">${escapeHtml(place.koAddress)}</div>`
        : "";

      const vjw = buildVisitJapanData(place);
      const vjwHtml = isStayCategory
        ? `<div class="vjw-inline">
            <div class="vjw-inline-title">Visit Japan Web 숙소 정보</div>
            <textarea class="vjw-inline-text" rows="4" readonly>${vjw.shortText}</textarea>
            <button class="vjw-inline-btn" data-copy-text="${escapeHtml(vjw.fullText)}">복사</button>
          </div>`
        : "";
      const saveGuideHtml = buildGoogleMapsSaveGuideHtml(mapsUrl, false);

      return `
        <div class="result-item" data-index="${places.indexOf(place)}" role="button" tabindex="0">
          <div class="result-item-header">
            <span class="result-item-index">${index + 1}</span>
            <div class="result-item-names">
              <span class="result-item-name">${escapeHtml(place.name)}</span>
              ${koNameHtml}
            </div>
            <span class="result-item-rating">${rating}</span>
          </div>
          ${address ? `<div class="result-item-address">${escapeHtml(address)}</div>` : ""}
          ${koAddressHtml}
          ${vjwHtml}
          ${saveGuideHtml}
        </div>
      `;
    })
    .join("");

  // 리스트 클릭 이벤트
  list.querySelectorAll(".result-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target.classList.contains("vjw-inline-btn")) {
        const text = decodeHtml(e.target.getAttribute("data-copy-text") || "");
        copyToClipboard(text);
        return;
      }
      // 링크 클릭은 지도 이동 방지
      if (e.target.tagName === "A") return;

      const idx = parseInt(item.dataset.index, 10);
      if (markers[idx]) {
        map.setCenter(markers[idx].getPosition());
        map.setZoom(16);
        openInfoWindow(markers[idx], places[idx], idx);
        highlightListItem(idx);
      }
    });

    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter") item.click();
    });
  });
}

// ===========================
// 리스트 아이템 하이라이트
// ===========================
function highlightListItem(index) {
  document.querySelectorAll(".result-item").forEach((el, i) => {
    el.classList.toggle("active", i === index);
  });

  const activeItem = document.querySelector(`.result-item[data-index="${index}"]`);
  if (activeItem) {
    activeItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

// ===========================
// 빈 상태 메시지
// ===========================
function showEmptyState(message) {
  const list = document.getElementById("result-list");
  const countEl = document.getElementById("result-count");
  countEl.textContent = "";
  list.innerHTML = `
    <div class="empty-state">
      <span class="empty-icon">🔍</span>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    </div>
  `;
}

// ===========================
// 마커 초기화
// ===========================
function clearMarkers() {
  markers.forEach((m) => m.setMap(null));
  markers = [];
  if (infoWindow) infoWindow.close();
}

// ===========================
// 결과 리스트 초기화
// ===========================
function clearResultList() {
  document.getElementById("result-count").textContent = "";
  document.getElementById("result-list").innerHTML = `
    <div class="empty-state">
      <span class="empty-icon">🔍</span>
      <p>도시와 카테고리를 선택한 후<br/>검색 버튼을 눌러주세요.</p>
    </div>
  `;
}

// ===========================
// 로딩 오버레이
// ===========================
function showLoading(visible) {
  const overlay = document.getElementById("loading-overlay");
  overlay.classList.toggle("hidden", !visible);
}

// ===========================
// XSS 방지용 HTML 이스케이프
// ===========================
function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function decodeHtml(str) {
  const txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
}

function copyToClipboard(text) {
  if (!text) return;
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text);
    return;
  }
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  document.execCommand("copy");
  ta.remove();
}

function getGoogleMapsPlaceUrl(place) {
  if (place.place_id) {
    return `https://www.google.com/maps/place/?q=place_id:${encodeURIComponent(place.place_id)}`;
  }
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name || "")}`;
}

function buildGoogleMapsSaveGuideHtml(mapsUrl, compact) {
  const compactClass = compact ? " save-guide-compact" : "";
  return `
    <div class="save-guide${compactClass}">
      <a class="save-guide-open" href="${mapsUrl}" target="_blank" rel="noopener noreferrer">Google Maps에서 열기</a>
      <div class="save-guide-section">
        <div class="save-guide-title">Google 지도에 저장</div>
        <p class="save-guide-text">열린 화면에서 저장 버튼을 눌러 즐겨찾기나 가고 싶은 곳 목록에 추가하세요.</p>
      </div>
      <div class="save-guide-section">
        <div class="save-guide-title">나의 지도(My Maps)에 넣기</div>
        <p class="save-guide-text">PC에서는 나의 장소 → 지도에서 원하는 My Maps를 연 뒤 이 장소를 직접 추가해 주세요.</p>
      </div>
    </div>
  `;
}

function buildVisitJapanData(place) {
  // 숙소 주소는 Visit Japan Web 복붙을 위해 영어 주소를 우선 사용
  const rawAddress = (place.enAddress || place.formatted_address || place.vicinity || "").replace(/,/g, " ").trim();
  const postalMatch = rawAddress.match(/(\d{3})[- ]?(\d{4})/);
  const postal = postalMatch ? `${postalMatch[1]}${postalMatch[2]}` : "";

  const upperAddress = rawAddress.toUpperCase();
  const compactAddress = upperAddress
    .replace(/JAPAN/g, "")
    .replace(/\s+/g, " ")
    .trim();

  // 간단 규칙: 앞 2토큰을 PREFECTURE/CITY로 분리하고 나머지를 ADDRESS로 사용
  const tokens = compactAddress.split(" ").filter(Boolean);
  const prefecture = tokens[0] || "";
  const city = tokens[1] || "";
  const address = tokens.slice(2).join(" ");

  let phone = (place.formatted_phone_number || place.international_phone_number || "").replace(/\D/g, "");
  if (phone.startsWith("81")) phone = `00${phone}`;

  const hotelName = (place.enName || place.name || "").toUpperCase();

  const fullText = [
    `HOTEL NAME: ${hotelName}`,
    `POSTAL CODE: ${postal}`,
    `PREFECTURE: ${prefecture}`,
    `CITY: ${city}`,
    `ADDRESS: ${address}`,
    `PHONE: ${phone}`,
  ].join("\n");

  const shortText = [
    `${postal} ${prefecture} ${city} ${address}`.trim(),
    `${hotelName}`,
    `TEL: ${phone}`,
  ].join("\n");

  return { fullText, shortText };
}

// ===========================
// 재검색 버튼 표시/숨기기
// ===========================
function showResearchBtn(visible) {
  const btn = document.getElementById("research-btn");
  btn.classList.toggle("hidden", !visible);
}

// ===========================
// 줌 레벨 → 검색 반경 변환 (단위: 미터)
// ===========================
function getRadiusFromZoom(zoom) {
  // 줌이 작을수록 넓은 반경
  if (zoom >= 16) return 500;
  if (zoom >= 15) return 1000;
  if (zoom >= 14) return 1500;
  if (zoom >= 13) return 2500;
  if (zoom >= 12) return 4000;
  if (zoom >= 11) return 7000;
  return 10000;
}

// ===========================
// Haversine 거리 계산 (geometry 라이브러리 미사용 시 폴백)
// ===========================
function haversineDistance(p1, p2) {
  const R = 6371000;
  const lat1 = (p1.lat() * Math.PI) / 180;
  const lat2 = (p2.lat() * Math.PI) / 180;
  const dLat = ((p2.lat() - p1.lat()) * Math.PI) / 180;
  const dLng = ((p2.lng() - p1.lng()) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
