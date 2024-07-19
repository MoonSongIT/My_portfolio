// 모든 섹션과 메뉴 아이템을 선택합니다.
const sections = document.querySelectorAll('.section');
const menuItems = document.querySelectorAll('.header__menu__item');

// 스크롤 이벤트 리스너를 추가합니다.
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    menuItems.forEach((item) => {
        item.classList.remove('active');
        if (item.getAttribute('href').substring(1) === current) {
            item.classList.add('active');
        }
    });
});

// 페이지 로드 시 초기 활성 메뉴 아이템 설정
function setInitialActiveMenuItem() {
    const scrollPosition = window.pageYOffset;
    let activeSection = sections[0].getAttribute('id');

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollPosition >= sectionTop - 100) {
            activeSection = section.getAttribute('id');
        }
    });

    menuItems.forEach((item) => {
        item.classList.remove('active');
        if (item.getAttribute('href').substring(1) === activeSection) {
            item.classList.add('active');
        }
    });
}

// 페이지 로드 시 초기 활성 메뉴 아이템 설정 함수 호출
window.addEventListener('load', setInitialActiveMenuItem);