const burgerBtn = document.querySelector('.burger')
const burgerFooterBarBtn = document.querySelector('.footer-bar__sidebar-btn')
const sidebar = document.querySelector('.sidebar')
const closeBtn = document.querySelector('.sidebar .btn-close')
const body = document.getElementById('body')

function setBodyStyles(position, width, overflowY) {
    body.style.position = position
    body.style.width = width
    body.style.overflowY = overflowY
}

burgerBtn.addEventListener('click', function () {

    if (!sidebar.classList.contains('sidebar_active')) {
        sidebar.classList.add('sidebar_active')
        setBodyStyles('fixed', '100%', 'scroll')
        checkSidebarClass()
    }

})

burgerFooterBarBtn.addEventListener('click', function() {

    if (!sidebar.classList.contains('sidebar_active')) {
        sidebar.classList.add('sidebar_active')
        setBodyStyles('fixed', '100%', 'scroll')
    } else {
        sidebar.classList.remove('sidebar_active')
        setBodyStyles('', '', '')
    }

});

closeBtn.addEventListener('click', function () {

    if (sidebar.classList.contains('sidebar_active')) {
        sidebar.classList.remove('sidebar_active')
        setBodyStyles('', '', '')
    }

})

function checkSidebarClass() {

    if (sidebar.classList.contains('sidebar_active')) {
        document.addEventListener('click', removeSidebarClass)
    } else {
        document.removeEventListener('click', removeSidebarClass)
    }

}

function removeSidebarClass(event) {

    if (!sidebar.contains(event.target) && !burgerBtn.contains(event.target)) {
        sidebar.classList.remove('sidebar_active')
        setBodyStyles('', '', '')
        checkSidebarClass()
    }

}

export { setBodyStyles }