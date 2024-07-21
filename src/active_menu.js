//1. 모든 섹션 요소들과 메뉴 아이템을 가지고 온다
//2. IntersectionObserver를 이용해서 모든 섹션을 관찰한다
//3. 보여지는 섹션에 해당 메뉴 아이템을 활성화 한다
// 보여지는 섹션이란 : 한개 이상의 섹션이 동시 보여진다면 가장 첫번쨰 섹션을 , 
// 예외적으로 멘 마지막 섹션이 보여지면 멘 마지막 섹션을 보여지는 섹션으로 선택 한다.

// 모든 섹션과 메뉴 아이템을 선택합니다.
const sections = document.querySelectorAll('.section');
const menuItems = document.querySelectorAll('.header__menu__item');
const sectionArray = Array.from(sections);

const visibleSections = sectionArray.map(()=> false);
let activeNavItem = menuItems[0];

const options = {
    rootMargin: '-20% 0px 0px 0px',
    threshold :[0,0.98],
};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach(section => observer.observe(section));
function observerCallback(entries) {
    let selectLastOne = false;
    entries.forEach(entry => {
        // indexOf를 사용하여 현재 entry.target의 index를 찾음
        const index = sectionArray.indexOf(entry.target);
        visibleSections[index] = entry.isIntersecting;
        // console.log(`Section ID: ${entry.target.id}, Index: ${index}`)
        selectLastOne =
            index === sectionArray.length -1 &&
            entry.isIntersecting &&
            entry.intersectionRatio  >= 0.96;
        });
        // console.log('selectLastOne =' + selectLastOne)
        const navIndex = selectLastOne ? sectionArray.length -1 : findFirstIntersecting(visibleSections);
        // console.log(sectionArray[navIndex]);
        activeNavItem.classList.remove('active');
        activeNavItem = menuItems[navIndex];
        activeNavItem.classList.add('active')

}
function findFirstIntersecting(visibleSections) {
    const index = visibleSections.indexOf(true);
    return index >= 0 ? index : 0;
}