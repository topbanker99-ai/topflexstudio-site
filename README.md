# 탑플렉스스튜디오 (TopFlex Studio) 웹사이트

수원 광교 광교중앙역 인근의 방송 전문 스튜디오 **탑플렉스스튜디오**의 공식 웹사이트입니다.
강의촬영 · 스튜디오 대관 · 라이브커머스를 소개하는 정적(Static) 멀티페이지 사이트입니다.

🔗 데모(배포 후): `https://<your-username>.github.io/<repo-name>/`

---

## 📁 사이트 구조

```
.
├── index.html              # 홈
├── introduce.html          # 스튜디오소개
├── studio-board.html       # 전자칠판 스튜디오
├── studio-chromakey.html   # 크로마키 스튜디오
├── studio-horizon.html     # 호리존 스튜디오
├── studio-live.html        # 라이브커머스
├── ai-video.html           # AI 영상제작
├── pricing.html            # 비용 안내
├── contact.html            # 스튜디오 문의
└── assets/
    ├── styles.css          # 공통 스타일(디자인)
    └── script.js           # 공통 스크립트(메뉴·스크롤·문의폼)
```

모든 페이지가 `assets/styles.css`와 `assets/script.js`를 공유합니다.
**디자인을 바꾸려면 `assets/styles.css` 한 곳만 수정하면 전체 페이지에 반영됩니다.**

---

## 🖥️ 로컬에서 보기

폴더를 통째로 받은 뒤 `index.html`을 브라우저로 열면 됩니다.
(외부 파일 방식이라 폴더 구조를 유지한 채로 열어야 디자인이 적용됩니다.)

간단히 로컬 서버로 띄우려면:

```bash
# Python이 설치되어 있다면
python3 -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

---

## 🚀 GitHub Pages 배포 방법

1. 이 저장소를 GitHub에 올립니다.
2. 저장소 → **Settings** → **Pages** 로 이동합니다.
3. **Source** 를 `Deploy from a branch` 로 설정하고, 브랜치는 `main`, 폴더는 `/ (root)` 선택 후 **Save**.
4. 잠시 뒤 `https://<your-username>.github.io/<repo-name>/` 주소로 사이트가 공개됩니다.

> 자체 도메인(topflexstudio.com)을 연결하려면 Settings → Pages → Custom domain 에 도메인을 입력하고, 도메인 DNS에 GitHub Pages용 레코드를 추가하면 됩니다.

---

## 🎨 자주 수정하는 항목 가이드

| 수정 내용 | 위치 |
|---|---|
| 포인트 색상(오렌지) | `assets/styles.css` 상단 `--orange` 변수 |
| 연락처·주소·사업자정보 | 각 HTML 하단 `<footer>` 영역 / `contact.html` |
| 유튜브 영상 | 각 HTML 의 `<iframe src="https://www.youtube.com/embed/영상ID">` |
| 카카오톡 오픈채팅 링크 | 전체 HTML 의 `https://open.kakao.com/o/...` |
| 스튜디오 카드 사진 | `index.html` 등의 `background-image` URL |
| 비용/요금 | `pricing.html` |

---

## 📝 개선 예정 (TODO)

- [ ] **비용 안내**: 현재는 예시 단가 + "문의" 구조 → 실제 요금으로 교체
- [ ] **스튜디오별 사진**: 카드/갤러리 이미지를 각 스튜디오 실제 사진으로 교체
- [ ] **전용 영상 연동**: 전자칠판·호리존·AI 페이지에 각 스튜디오 전용 유튜브 영상 ID 연결
- [ ] **포트폴리오/장비소개/편집안내** 페이지 추가 검토
- [ ] SEO: 페이지별 OG 이미지·메타 보강
- [ ] 문의폼: 메일 연동(mailto) → 폼 백엔드(예: Formspree) 연동 검토

---

## ℹ️ 사업자 정보

- 상호: 주식회사 탑플렉스 / 대표: 현형진
- 주소: 경기도 수원시 영통구 법조로 25 SK뷰레이크 오피스 A동 1716호·3516호
- 전화: 010-2045-8209 / 이메일: topflex00@naver.com
- 유튜브: https://www.youtube.com/channel/UCxJ5r7ACqm0tjd18kC4_7fA
- 카카오톡 오픈채팅: https://open.kakao.com/o/sRELD1pd

---

© 2026 TopFlex Studio. All rights reserved.
