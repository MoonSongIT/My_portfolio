// 모든 섹션과 메뉴 아이템을 선택합니다.
const sections = document.querySelectorAll('.section');
const menuItems = document.querySelectorAll('.header__menu__item');

// 현재 활성화된 메뉴 아이템을 추적합니다.
let currentActiveMenuItem = menuItems[0];

// Intersection Observer 옵션
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // 섹션의 50%가 보일 때 콜백 실행
};

// Intersection Observer 콜백 함수
const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 현재 교차 중인 섹션의 id를 가져옵니다.
      const currentSectionId = entry.target.id;
      
      // 이전 활성 메뉴 아이템에서 'active' 클래스를 제거합니다.
      currentActiveMenuItem.classList.remove('active');
      
      // 현재 섹션에 해당하는 메뉴 아이템을 찾아 'active' 클래스를 추가합니다.
      currentActiveMenuItem = document.querySelector(`.header__menu__item[href="#${currentSectionId}"]`);
      currentActiveMenuItem.classList.add('active');
    }
  });
};

// Intersection Observer 인스턴스를 생성합니다.
const observer = new IntersectionObserver(observerCallback, observerOptions);

// 모든 섹션에 대해 observer를 등록합니다.
sections.forEach(section => {
  observer.observe(section);
});

// 페이지 로드 시 초기 활성 메뉴 아이템 설정
function setInitialActiveMenuItem() {
  const scrollPosition = window.pageYOffset;
  let activeSection = sections[0];

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollPosition >= sectionTop - 100) {
      activeSection = section;
    }
  });

  const activeSectionId = activeSection.id;
  currentActiveMenuItem = document.querySelector(`.header__menu__item[href="#${activeSectionId}"]`);
  currentActiveMenuItem.classList.add('active');
}

// 페이지 로드 시 초기 활성 메뉴 아이템 설정 함수 호출
window.addEventListener('load', setInitialActiveMenuItem);