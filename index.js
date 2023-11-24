document.addEventListener('DOMContentLoaded', function () {
    console.log('JavaScript 파일이 로딩되었습니다.');
});

function searchRestaurant() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    var sections = document.querySelectorAll('section');

    sections.forEach(function (section) {
        var restaurantType = section.className.toLowerCase();
        if (restaurantType.includes(searchInput)) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}