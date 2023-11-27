function convertCsvToHtml(csv) {
    const rows = csv.trim().split('\n');
    return rows.map(row => {
        const [_, __, 가게명, 종류, 평점, 리뷰, 주소, 지번, 운영시간, 링크, 전화번호] = row.replaceAll('"', "").split(',');
        const ratingStars = 평점 ? `${평점.trim()} ${convertRatingToStars(parseFloat(평점.trim()))}` : '';

        return `
<div class="restaurant-container">
    ${링크 ? `<img src="${링크.trim()}" alt="Food Image" class="food-image">` : ''}
    <div class="restaurant-info">
        <h2>${가게명.trim()}</h2>
        <p>${종류.trim()}</p>
        <div class="rating-and-reviews">
            <span class="rating">${ratingStars}</span>
            ${리뷰 ? `<a href="${리뷰.trim()}" target="_blank">리뷰 보기</a>` : ''}
        </div>
        ${주소 ? `<p class="address">${주소.trim()}</p>` : ''}
        ${지번 ? `<p class="old-address">(지번) ${지번.trim()}</p>` : ''}
        <div class="operation-and-contact">
            ${운영시간 ? `<span class="hours">영업시간: ${운영시간.trim()}</span>` : ''}
        </div>
        ${전화번호 ? `<span class="phone-number">${전화번호.trim()}</span>` : ''}
    </div>
</div>
        `.trim();
    }).join('\n');
}

function convertRatingToStars(rating) {
    const fullStars = Math.round(rating);
    return '★'.repeat(fullStars) + '☆'.repeat(5 - fullStars);
}

const csvString = `
"https://map.kakao.com/","카카오맵","공덕관","중국요리","2.5","https://place.map.kakao.com/16765207#review","서울 노원구 동일로192길 38 1,2층","(지번) 공릉1동 393-15","매일 11:00 ~ 21:00","https://place.map.kakao.com/16765207?openhour=1","02-974-9090",
"https://map.kakao.com/","카카오맵","중국집","중국요리","3.6","https://place.map.kakao.com/1482296127#review","서울 노원구 공릉로51길 7 2층","(지번) 공릉동 440-11","매일 10:30 ~ 21:00","https://place.map.kakao.com/1482296127?openhour=1","02-979-5353",
"https://map.kakao.com/","카카오맵","가원양꼬치","양꼬치","4.9","https://place.map.kakao.com/366183593#review","서울 노원구 동일로192길 46","(지번) 공릉동 392-2","월요일","https://place.map.kakao.com/366183593?openhour=1","070-4133-0539",
"https://map.kakao.com/","카카오맵","뽕신 공릉동점","중국요리","4.3","https://place.map.kakao.com/17247659#review","서울 노원구 동일로 1078","(지번) 공릉동 386-5","매일 11:00 ~ 21:00","https://place.map.kakao.com/17247659?openhour=1","",
"https://map.kakao.com/","카카오맵","라화방마라탕","중식","3.2","https://place.map.kakao.com/315578128#review","서울 노원구 공릉로 208","(지번) 공릉동 208-18","월~금 11:00 ~ 21:00","https://place.map.kakao.com/315578128?openhour=1","02-977-9392"
`;

document.body.innerHTML = convertCsvToHtml(csvString);