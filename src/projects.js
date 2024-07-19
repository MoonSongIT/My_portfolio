'use strict';
// DOM 요소 선택
const categories = document.querySelector('.categories');
const projectsContainer = document.querySelector('.projects');
const projects = document.querySelectorAll('.project');
// 카테고리 버튼 클릭 이벤트 처리
categories.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter;
    if (!filter) return;

    // 선택된 카테고리에 하이라이트 적용
    const active = categories.querySelector('.category--selected');
    active.classList.remove('category--selected');
    e.target.classList.add('category--selected');

    // 프로젝트 필터링
    projectsContainer.classList.add('anim-out');
    filterProjects(filter);
    setTimeout(
        ()=>{
        projectsContainer.classList.remove('anim-out');
        } ,
        250
    );
   
});

// 프로젝트 필터링 함수
function filterProjects(category) {
    projects.forEach(project => {
        if (category === 'all' || category === project.dataset.type) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}
