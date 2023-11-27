function convertCsvToHtml(csv) {
    const rows = csv.trim().split('\n');
    return rows.map(row => {
        const [_, __, 가게명, 종류, 평점, 리뷰, 주소, 지번, 운영시간, 링크, 전화번호] = row.split('||');
        const ratingStars = 평점 ? `${평점.trim()} ${convertRatingToStars(parseFloat(평점.trim()))}` : '';

        return `
<div class="restaurant-container">
    ${링크 ? `<img src="../images/test.jpg" alt="Food Image" class="food-image">` : ''}
    <div class="restaurant-info">
        <a href="${링크.trim()}"><h2>${가게명.trim()}</h2></a>
        <p>${종류.trim()}</p>
        <div class="rating-and-reviews">
            <span class="rating">${ratingStars}</span>
            ${리뷰 ? `<a href="${리뷰.trim()}" target="_blank">리뷰 보기</a>` : ''}
        </div>
        ${주소 ? `<p class="address">${주소.trim()}</p>` : ''}
        ${지번 ? `<p class="old-address">${지번.trim()}</p>` : ''}
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
"https://map.kakao.com/||카카오맵||쪼매매운떡볶이 공릉점||떡볶이||4.5||https://place.map.kakao.com/16703995#review||서울 노원구 공릉로 208||(지번) 공릉동 208-18||월,화,수,목,금,일 11:00 ~ 22:00||https://place.map.kakao.com/16703995?openhour=1||02-977-1120||
"https://map.kakao.com/||카카오맵||멍텅구리즉석떡볶이 공릉점||떡볶이||2.9||https://place.map.kakao.com/27515257#review||서울 노원구 공릉로51길 14-2||(지번) 공릉동 439-2||월요일||https://place.map.kakao.com/27515257?openhour=1||02-978-4645||
"https://map.kakao.com/||카카오맵||동대문엽기떡볶이 공릉점||떡볶이||1.9||https://place.map.kakao.com/14589157#review||서울 노원구 공릉로 211 2층||(지번) 공릉동 745||매일 11:00 ~ 24:00||https://place.map.kakao.com/14589157?openhour=1||02-971-8592||
"https://map.kakao.com/||카카오맵||김밥천국||분식||3.8||https://place.map.kakao.com/16527403#review||서울 노원구 공릉로 191 1층||(지번) 공릉동 441-97||매일 06:00 ~ 22:00||https://place.map.kakao.com/16527403?openhour=1||02-975-6292||
"https://map.kakao.com/||카카오맵||백남옥손만두||분식||4.2||https://place.map.kakao.com/2105282697#review||서울 노원구 동일로 1078||(지번) 공릉동 386-1||||https://map.kakao.com/#||02-977-4856||
"https://map.kakao.com/||카카오맵||세븐돈까스김밥 공릉점||분식||3.3||https://place.map.kakao.com/20611650#review||서울 노원구 공릉로 173||(지번) 공릉동 413-3||영업시간 월~토 17:00 ~ 23:00||https://place.map.kakao.com/20611650?openhour=1||02-949-4055||
"https://map.kakao.com/||카카오맵||옆집떡볶이||떡볶이||3.7||https://place.map.kakao.com/1116191670#review||서울 노원구 공릉로 223||(지번) 공릉동 440-16||||https://map.kakao.com/#||||
"https://map.kakao.com/||카카오맵||떡볶이는튀김빨 공릉점||떡볶이||4.7||https://place.map.kakao.com/627299209#review||서울 노원구 공릉로 221 1층||(지번) 공릉동 440-10||매일 11:00 ~ 23:00||https://place.map.kakao.com/627299209?openhour=1||02-979-5949||
"https://map.kakao.com/||카카오맵||엄마손김밥||분식||4.5||https://place.map.kakao.com/20748268#review||서울 노원구 공릉로34길 121||(지번) 공릉동 223-15||||https://map.kakao.com/#||02-977-1422||
"https://map.kakao.com/||카카오맵||응급실국물떡볶이 서울공릉점||떡볶이||3.0||https://place.map.kakao.com/1945697503#review||서울 노원구 공릉로 231 중앙빌딩 1층||(지번) 공릉동 435-2||매일 11:00 ~ 23:00||https://place.map.kakao.com/1945697503?openhour=1||02-949-1191||
"https://map.kakao.com/||카카오맵||아빠두리만든떡볶이||떡볶이||5.0||https://place.map.kakao.com/3299731#review||서울 노원구 공릉로 201 2층||(지번) 공릉동 424-3||매일 10:00 ~ 23:00||https://place.map.kakao.com/3299731?openhour=1||||
"https://map.kakao.com/||카카오맵||배떡 공릉점||떡볶이||0.0||https://place.map.kakao.com/733592081#review||서울 노원구 동일로192길 83 1층 102호||(지번) 공릉동 441-145||매일 11:00 ~ 22:00 · 휴게시간 매일 15:00 ~ 16:00||https://place.map.kakao.com/733592081?openhour=1||0503-7503-1964||
"https://map.kakao.com/||카카오맵||크앙분식 과기대점||분식||2.7||https://place.map.kakao.com/2107374617#review||서울 노원구 공릉로 211 동신아파트 상가 1층||(지번) 공릉동 745||매일 11:00 ~ 20:50||https://place.map.kakao.com/2107374617?openhour=1||010-6292-3029||
"https://map.kakao.com/||카카오맵||떡볶이참잘하는집 노원공릉점||떡볶이||3.0||https://place.map.kakao.com/1429559811#review||서울 노원구 동일로186길 53-50 1층||(지번) 공릉동 503-2||||https://map.kakao.com/#||02-979-7171||
"https://map.kakao.com/||카카오맵||청춘떡볶이||떡볶이||4.1||https://place.map.kakao.com/788291248#review||서울 노원구 동일로198길 77||(지번) 공릉동 172-46||월~금 11:00 ~ 20:00||https://place.map.kakao.com/788291248?openhour=1||070-4300-5949||
"https://map.kakao.com/||카카오맵||떡깨비 공릉점||분식||0.0||https://place.map.kakao.com/1841105278#review||서울 노원구 공릉로46길 28 1층||(지번) 공릉동 737||||https://map.kakao.com/#||||
"https://map.kakao.com/||카카오맵||김밥세상||분식||0.0||https://place.map.kakao.com/857833416#review||서울 노원구 공릉로 196||(지번) 공릉동 208-24||||https://map.kakao.com/#||||
"https://map.kakao.com/||카카오맵||땡큐돈까스||분식||5.0||https://place.map.kakao.com/1311569123#review||서울 노원구 공릉로 199||(지번) 공릉동 424||||https://map.kakao.com/#||||
"https://map.kakao.com/||카카오맵||괴짜떡볶이 강북본점||떡볶이||0.0||https://place.map.kakao.com/26877327#review||서울 노원구 동일로198길 64 1층||(지번) 공릉동 431-2||||https://map.kakao.com/#||02-977-8511||
"https://map.kakao.com/||카카오맵||솜씨김밥 공릉점||분식||0.0||https://place.map.kakao.com/1467293147#review||서울 노원구 동일로192길 5||(지번) 공릉동 386-6||||https://map.kakao.com/#||||
"https://map.kakao.com/||카카오맵||맛나수제비||분식||0.0||https://place.map.kakao.com/1936797778#review||서울 노원구 공릉로 173||(지번) 공릉동 413-3||||https://map.kakao.com/#||0503-5286-1611"`;

document.body.innerHTML = convertCsvToHtml(csvString);
console.log(convertCsvToHtml(csvString));