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
"https://map.kakao.com/","카카오맵","원조이모네연탄불곱창","곱창,막창","2.6","https://place.map.kakao.com/21412672#review","서울 노원구 동일로192길 46","(지번) 공릉동 392-2","영업시간 월~토 16:30 ~ 22:30","https://place.map.kakao.com/21412672?openhour=1","02-973-4658",
"https://map.kakao.com/","카카오맵","화로상회 공릉점","육류,고기","4.0","https://place.map.kakao.com/1677550004#review","서울 노원구 공릉로46길 6 현대프라자 1층 111호","(지번) 공릉동 421-19","매일 12:00 ~ 23:00","https://place.map.kakao.com/1677550004?openhour=1","02-979-2292",
"https://map.kakao.com/","카카오맵","마포생고기","육류,고기","3.6","https://place.map.kakao.com/12991364#review","서울 노원구 동일로190길 39 1, 2층","(지번) 공릉동 393-5","매일 00:00 ~ 24:00","https://place.map.kakao.com/12991364?openhour=1","02-979-6776",
"https://map.kakao.com/","카카오맵","청학골","갈비","1.8","https://place.map.kakao.com/8580028#review","서울 노원구 동일로192길 6","(지번) 공릉동 395-1","매일 00:00 ~ 24:00","https://place.map.kakao.com/8580028?openhour=1","02-978-0055",
"https://map.kakao.com/","카카오맵","오름제주고기 본점","육류,고기","2.2","https://place.map.kakao.com/903435269#review","서울 노원구 동일로192길 85 1층","(지번) 공릉동 441-136","매일 12:00 ~ 23:00","https://place.map.kakao.com/903435269?openhour=1","02-973-9290",
"https://map.kakao.com/","카카오맵","국민소곱창 공릉점","곱창,막창","4.4","https://place.map.kakao.com/2140415713#review","서울 노원구 동일로192길 88 오성빌딩 1층","(지번) 공릉동 441-26","영업시간 월,화 17:30 ~ 23:00","https://place.map.kakao.com/2140415713?openhour=1","02-975-9923",
"https://map.kakao.com/","카카오맵","굴다리 전주콩나물국밥 본점","국밥","4.2","https://place.map.kakao.com/17209056#review","서울 노원구 동일로198길 32 1층","(지번) 공릉동 366-1","매일 09:00 ~ 22:00","https://place.map.kakao.com/17209056?openhour=1","02-978-7202"
"https://map.kakao.com/","카카오맵","공릉회수산","회","3.6","https://place.map.kakao.com/16906339#review","서울 노원구 공릉로 179 2층","(지번) 공릉동 408-8","매일 12:00 ~ 24:00","https://place.map.kakao.com/16906339?openhour=1","02-971-4383",
"https://map.kakao.com/","카카오맵","춘천닭갈비 서울과기대점","닭요리","4.8","https://place.map.kakao.com/16936111#review","서울 노원구 동일로192길 56","(지번) 공릉동 392-27","매일 11:30 ~ 23:00","https://place.map.kakao.com/16936111?openhour=1","02-975-2345",
"https://map.kakao.com/","카카오맵","백세마인보쌈 공릉본점","족발,보쌈","4.2","https://place.map.kakao.com/1315949532#review","서울 노원구 공릉로 187","(지번) 공릉동 408-4","매일 11:30 ~ 22:00","https://place.map.kakao.com/1315949532?openhour=1","02-972-1656",
"https://map.kakao.com/","카카오맵","무봉리토종순대국 공릉점","순대","3.3","https://place.map.kakao.com/1741509421#review","서울 노원구 동일로192길 63 1층","(지번) 공릉동 389-9","매일 00:00 ~ 24:00","https://place.map.kakao.com/1741509421?openhour=1","02-977-7396",
"https://map.kakao.com/","카카오맵","이정림수제햄부대찌개","찌개,전골","4.5","https://place.map.kakao.com/381875424#review","서울 노원구 공릉로 207 세림빌딩 2층 202호","(지번) 공릉동 441","매일 11:00 ~ 22:00 · 휴게시간 매일 15:00 ~ 16:00","https://place.map.kakao.com/381875424?openhour=1","0507-1339-3804",
"https://map.kakao.com/","카카오맵","향토곱창","곱창,막창","2.9","https://place.map.kakao.com/16819810#review","서울 노원구 동일로191길 10","(지번) 공릉동 383-18","매일 11:00 ~ 24:00","https://place.map.kakao.com/16819810?openhour=1","02-972-3492",
"https://map.kakao.com/","카카오맵","청교옥","냉면","3.8","https://place.map.kakao.com/88388237#review","서울 노원구 공릉로 225 나동 1층","(지번) 공릉동 438-2","매일 09:30 ~ 21:30","https://place.map.kakao.com/88388237?openhour=1","02-949-1519",
"https://map.kakao.com/","카카오맵","원조강영숙봉평메밀촌 본점","국수","4.3","https://place.map.kakao.com/17223169#review","서울 노원구 공릉로 191-6 1층","(지번) 공릉동 441-40","매일 10:30 ~ 21:30","https://place.map.kakao.com/17223169?openhour=1","02-971-6953",
"https://map.kakao.com/","카카오맵","전봇대연탄불막창구이","곱창,막창","3.4","https://place.map.kakao.com/23106158#review","서울 노원구 동일로192길 45 1층","(지번) 공릉1동 388-6","영업시간 매일 16:30 ~ 01:00","https://place.map.kakao.com/23106158?openhour=1","02-949-7677",
"https://map.kakao.com/","카카오맵","찬이네곱창","곱창,막창","5.0","https://place.map.kakao.com/1064474316#review","서울 노원구 공릉로51길 7","(지번) 공릉동 440-11","영업시간 월~토 18:00 ~ 23:00","https://place.map.kakao.com/1064474316?openhour=1","02-974-3121",
"https://map.kakao.com/","카카오맵","수돈재 공릉점","육류,고기","3.3","https://place.map.kakao.com/1472202260#review","서울 노원구 동일로192길 5 1층","(지번) 공릉동 386-6","매일 10:30 ~ 22:00","https://place.map.kakao.com/1472202260?openhour=1","02-977-2016",
"https://map.kakao.com/","카카오맵","오늘손칼국수앤찜 공릉점","해물,생선","3.9","https://place.map.kakao.com/26418668#review","서울 노원구 동일로192길 5 2층","(지번) 공릉동 386-6","매일 10:00 ~ 22:00","https://place.map.kakao.com/26418668?openhour=1","02-973-9252",
"https://map.kakao.com/","카카오맵","삼정종합어시장","회","4.3","https://place.map.kakao.com/201802381#review","서울 노원구 동일로192길 47 2층","(지번) 공릉동 389-7","매일 11:30 ~ 24:00","https://place.map.kakao.com/201802381?openhour=1","02-978-8945",
"https://map.kakao.com/","카카오맵","강나루유황오리주물럭 제1본점","오리","2.3","https://place.map.kakao.com/16061965#review","서울 노원구 공릉로43길 11","(지번) 공릉동 408-138","매일 11:00 ~ 22:00","https://place.map.kakao.com/16061965?openhour=1","02-972-5454",
"https://map.kakao.com/","카카오맵","김가네찜칼국수","한식","4.7","https://place.map.kakao.com/536237723#review","서울 노원구 공릉로 181 1층","(지번) 공릉동 408-6","매일 10:00 ~ 22:00","https://place.map.kakao.com/536237723?openhour=1","02-978-8880",
"https://map.kakao.com/","카카오맵","추운돼지삼겹살 공릉점","삼겹살","3.5","https://place.map.kakao.com/1563510748#review","서울 노원구 동일로186길 77-21","(지번) 공릉동 504-20","영업시간 매일 16:00 ~ 23:00","https://place.map.kakao.com/1563510748?openhour=1","02-948-9111",
"https://map.kakao.com/","카카오맵","명문대","해물,생선","4.3","https://place.map.kakao.com/724570590#review","서울 노원구 동일로192다길 7","(지번) 공릉동 389-11","월요일","https://place.map.kakao.com/724570590?openhour=1","02-949-2203",
"https://map.kakao.com/","카카오맵","압구정찌개마을 공릉본점","찌개,전골","3.2","https://place.map.kakao.com/20748457#review","서울 노원구 동일로191길 8","(지번) 공릉동 383-17","매일 00:00 ~ 24:00","https://place.map.kakao.com/20748457?openhour=1","02-493-0097",
"https://map.kakao.com/","카카오맵","열화철판","곱창,막창","3.0","https://place.map.kakao.com/174772884#review","서울 노원구 동일로192길 90 2층","(지번) 공릉동 441-25","매일 11:00 ~ 24:00 · 휴게시간 매일 15:00 ~ 17:00","https://place.map.kakao.com/174772884?openhour=1","02-6013-5892",
"https://map.kakao.com/","카카오맵","참맛감자탕","감자탕","3.9","https://place.map.kakao.com/773352732#review","서울 노원구 동일로192길 41 1층","(지번) 공릉동 388-5","매일 00:00 ~ 24:00","https://place.map.kakao.com/773352732?openhour=1","02-974-5533",
"https://map.kakao.com/","카카오맵","웰빙왕십리곱창","곱창,막창","3.4","https://place.map.kakao.com/21331942#review","서울 노원구 공릉로 208 1층","(지번) 공릉동 208-18","매일 14:00 ~ 05:00","https://place.map.kakao.com/21331942?openhour=1","",
"https://map.kakao.com/","카카오맵","싱싱오징어바다 과기대점","회","2.9","https://place.map.kakao.com/16330146#review","서울 노원구 동일로192길 30 1층","(지번) 공릉동 393-5","영업시간 월~금 16:00 ~ 05:00","https://place.map.kakao.com/16330146?openhour=1","02-976-8081",
"https://map.kakao.com/","카카오맵","온고을 본점","닭요리","3.0","https://place.map.kakao.com/16472635#review","서울 노원구 동일로 1065","(지번) 공릉동 398-5","매일 10:00 ~ 22:00","https://place.map.kakao.com/16472635?openhour=1","02-975-8200"`;

document.body.innerHTML = convertCsvToHtml(csvString);