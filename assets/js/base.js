document.addEventListener('DOMContentLoaded', () => {
    var searchInput = document.querySelector('.search_input');
    var searchPoppup = document.querySelector('.search_poppup');

    searchInput.addEventListener('focus', () => {
        searchPoppup.style.display = 'block';
    });
    searchInput.addEventListener('blur', () => {
        searchPoppup.style.display = 'none';
    });
}, false);