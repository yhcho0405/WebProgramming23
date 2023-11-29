const inputString = `
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
"https://map.kakao.com/||카카오맵||맛나수제비||분식||0.0||https://place.map.kakao.com/1936797778#review||서울 노원구 공릉로 173||(지번) 공릉동 413-3||||https://map.kakao.com/#||0503-5286-1611""https://map.kakao.com/||카카오맵||동학||호프,요리주점||4.2||https://place.map.kakao.com/16329163#review||서울 노원구 공릉로51길 6 1층||(지번) 공릉동 439-15||월,일요일||https://place.map.kakao.com/16329163?openhour=1||070-8951-7283||
"https://map.kakao.com/||카카오맵||시작이밤이다||호프,요리주점||4.3||https://place.map.kakao.com/400355799#review||서울 노원구 동일로190길 33 현대빌라 101호||(지번) 공릉동 393-10||영업시간 매일 17:00 ~ 02:00||https://place.map.kakao.com/400355799?openhour=1||010-7148-3119||
"https://map.kakao.com/||카카오맵||잔월||일본식주점||4.3||https://place.map.kakao.com/22080142#review||서울 노원구 동일로192길 38 지하1층||(지번) 공릉동 393-15||영업시간 월~토 18:00 ~ 04:00||https://place.map.kakao.com/22080142?openhour=1||||
"https://map.kakao.com/||카카오맵||지금보고싶다 공릉점||호프,요리주점||4.7||https://place.map.kakao.com/1319008981#review||서울 노원구 동일로192길 63 2층||(지번) 공릉동 389-9||영업시간 매일 17:00 ~ 03:00||https://place.map.kakao.com/1319008981?openhour=1||||
"https://map.kakao.com/||카카오맵||미라쥬펍||호프,요리주점||5.0||https://place.map.kakao.com/1615142340#review||서울 노원구 동일로184길 69-9 2층||(지번) 공릉동 506-32||영업시간 매일 17:00 ~ 02:00||https://place.map.kakao.com/1615142340?openhour=1||02-6012-9433||
"https://map.kakao.com/||카카오맵||서봉포차||실내포장마차||4.0||https://place.map.kakao.com/25548212#review||서울 노원구 동일로192길 58 2층||(지번) 공릉동 392-18||영업시간 매일 18:00 ~ 06:00||https://place.map.kakao.com/25548212?openhour=1||02-948-3777||
"https://map.kakao.com/||카카오맵||공주포차 공릉점||실내포장마차||3.8||https://place.map.kakao.com/26489140#review||서울 노원구 동일로190길 43-5 1층||(지번) 공릉동 393-16||||https://map.kakao.com/#||02-975-7959||
"https://map.kakao.com/||카카오맵||네온서울 공릉점||호프,요리주점||5.0||https://place.map.kakao.com/1887890864#review||서울 노원구 동일로192길 62 지하1층||(지번) 공릉동 392-25||영업시간 매일 17:00 ~ 03:00||https://place.map.kakao.com/1887890864?openhour=1||||
"https://map.kakao.com/||카카오맵||쿠마||일본식주점||4.7||https://place.map.kakao.com/1312653889#review||서울 노원구 동일로192길 37 1층||(지번) 공릉동 388-4||영업시간 월,수,목,금,토,일 17:00 ~ 02:00||https://place.map.kakao.com/1312653889?openhour=1||010-2345-8135||
"https://map.kakao.com/||카카오맵||초아||일본식주점||5.0||https://place.map.kakao.com/708970275#review||서울 노원구 동일로192다길 51 테라파크뷰 1층 101호||(지번) 공릉동 366-15||영업시간 월~토 17:00 ~ 01:00||https://place.map.kakao.com/708970275?openhour=1||02-978-8295||
"https://map.kakao.com/||카카오맵||호노야||일본식주점||4.6||https://place.map.kakao.com/1870855999#review||서울 노원구 공릉로 191-5||(지번) 공릉동 441-76||||https://map.kakao.com/#||||
"https://map.kakao.com/||카카오맵||키라키라윤 공릉점||일본식주점||5.0||https://place.map.kakao.com/1069660792#review||서울 노원구 동일로184길 69-9 3,4층||(지번) 공릉동 506-32||영업시간 매일 18:00 ~ 02:00||https://place.map.kakao.com/1069660792?openhour=1||||
"https://map.kakao.com/||카카오맵||비어셀러||호프,요리주점||5.0||https://place.map.kakao.com/27224016#review||서울 노원구 공릉로 198 3층||(지번) 공릉동 208-5||영업시간 월~토 17:30 ~ 02:00||https://place.map.kakao.com/27224016?openhour=1||02-948-5876||
"https://map.kakao.com/||카카오맵||역전할머니맥주 서울공릉점||호프,요리주점||2.4||https://place.map.kakao.com/840587562#review||서울 노원구 동일로192길 80 1층||(지번) 공릉동 441-59||||https://map.kakao.com/#||02-972-1982||
"https://map.kakao.com/||카카오맵||샵다모토리||호프,요리주점||4.7||https://place.map.kakao.com/918856255#review||서울 노원구 동일로 1078 1층||(지번) 공릉동 386-1||월~금 14:30 ~ 17:00||https://place.map.kakao.com/918856255?openhour=1||||
"https://map.kakao.com/||카카오맵||도요남||호프,요리주점||4.1||https://place.map.kakao.com/942230075#review||서울 노원구 동일로190길 43-6 EnS빌딩 1층 101호||(지번) 공릉동 392-4||영업시간 월,화,수,목,일 17:00 ~ 24:00||https://place.map.kakao.com/942230075?openhour=1||02-977-8592||
"https://map.kakao.com/||카카오맵||달 루프탑||술집||4.5||https://place.map.kakao.com/1455581025#review||서울 노원구 동일로192길 11 하나빌딩 6층||(지번) 공릉동 386-2||영업시간 월~토 18:00 ~ 24:00||https://place.map.kakao.com/1455581025?openhour=1||||
"https://map.kakao.com/||카카오맵||크라운호프 공릉점||호프,요리주점||4.5||https://place.map.kakao.com/922326715#review||서울 노원구 동일로192길 14||(지번) 공릉동 395||||https://map.kakao.com/#||||
"https://map.kakao.com/||카카오맵||비어썸||호프,요리주점||4.9||https://place.map.kakao.com/773992177#review||서울 노원구 동일로192길 46 송암빌딩 지하1층||(지번) 공릉동 392-2||||https://map.kakao.com/#||02-972-4399||
"https://map.kakao.com/||카카오맵||막걸리나||술집||4.3||https://place.map.kakao.com/1725826036#review||서울 노원구 공릉로 190 지하1층||(지번) 공릉동 419-13||||https://map.kakao.com/#||||
"https://map.kakao.com/||카카오맵||만취||호프,요리주점||4.0||https://place.map.kakao.com/1184075306#review||서울 노원구 공릉로 173 1층||(지번) 공릉동 413-3||영업시간 월~토 18:00 ~ 02:00||https://place.map.kakao.com/1184075306?openhour=1||010-2510-5077||
"https://map.kakao.com/||카카오맵||여기꼬치네||술집||5.0||https://place.map.kakao.com/1489078017#review||서울 노원구 동일로192길 62 2층||(지번) 공릉동 392-25||영업시간 매일 17:00 ~ 03:00||https://place.map.kakao.com/1489078017?openhour=1||02-6083-5957||
"https://map.kakao.com/||카카오맵||코코스 공릉점||호프,요리주점||0.0||https://place.map.kakao.com/1731742103#review||서울 노원구 동일로192길 83 2층||(지번) 공릉동 441-145||영업시간 매일 16:00 ~ 04:00||https://place.map.kakao.com/1731742103?openhour=1||||
"https://map.kakao.com/||카카오맵||미미포차||실내포장마차||5.0||https://place.map.kakao.com/2003758727#review||서울 노원구 동일로192길 46 지층||(지번) 공릉동 392-2||영업시간 월,수,목,금,토 18:00 ~ 04:00||https://place.map.kakao.com/2003758727?openhour=1||||
"https://map.kakao.com/||카카오맵||철길부산집 공릉점||호프,요리주점||5.0||https://place.map.kakao.com/383128492#review||서울 노원구 동일로190길 43-6 1층 102호||(지번) 공릉동 392-4||||https://map.kakao.com/#||||
"https://map.kakao.com/||카카오맵||퀸즈홀덤&펍||술집||0.0||https://place.map.kakao.com/1927468407#review||서울 노원구 공릉로 223 지하1층||(지번) 공릉동 440-16||||https://map.kakao.com/#||||
"https://map.kakao.com/||카카오맵||곤조||일본식주점||5.0||https://place.map.kakao.com/547712247#review||서울 노원구 공릉로 245||(지번) 공릉동 462-5||월요일||https://place.map.kakao.com/547712247?openhour=1||||
"https://map.kakao.com/||카카오맵||라디오스타||호프,요리주점||0.0||https://place.map.kakao.com/12754484#review||서울 노원구 동일로 1073 3층||(지번) 공릉동 383-8||영업시간 월,화,수,목,일 17:00 ~ 02:00||https://place.map.kakao.com/12754484?openhour=1||||
"https://map.kakao.com/||카카오맵||에이스생맥주광장||호프,요리주점||0.0||https://place.map.kakao.com/23641431#review||서울 노원구 동일로 1065||(지번) 공릉동 398-5||||https://map.kakao.com/#||02-975-9017||
"https://map.kakao.com/||카카오맵||다락방||호프,요리주점||0.0||https://place.map.kakao.com/416958636#review||서울 노원구 공릉로46길 18 윤탁노블레스 102호||(지번) 공릉동 421-47||||https://map.kakao.com/#||""https://map.kakao.com/||카카오맵||리틀파스타 공릉본점||이탈리안||3.7||https://place.map.kakao.com/19693976#review||서울 노원구 동일로198길 78 청교프라자 2층||(지번) 공릉동 434-2||월,화,수,목,금,일 10:30 ~ 21:30||https://place.map.kakao.com/19693976?openhour=1||02-974-0201||
"https://map.kakao.com/||카카오맵||핏짜굽는언니 공릉점||피자||3.0||https://place.map.kakao.com/21525800#review||서울 노원구 동일로198길 58 1층||(지번) 공릉동 431-4||월~토 11:00 ~ 22:00||https://place.map.kakao.com/21525800?openhour=1||02-979-0234||
"https://map.kakao.com/||카카오맵||7일간의양심||스테이크,립||3.8||https://place.map.kakao.com/118701285#review||서울 노원구 동일로192길 5||(지번) 공릉동 386-6||영업시간 매일 17:00 ~ 01:00||https://place.map.kakao.com/118701285?openhour=1||02-949-8786||
"https://map.kakao.com/||카카오맵||루이스버거 공릉점||햄버거||2.4||https://place.map.kakao.com/1753610905#review||서울 노원구 동일로198길 78 청교프라자 2층||(지번) 공릉동 434-2||매일 10:30 ~ 21:30||https://place.map.kakao.com/1753610905?openhour=1||02-977-0766||
"https://map.kakao.com/||카카오맵||플렉스버거||햄버거||||https://place.map.kakao.com/754311770#review||서울 노원구 동일로192길 88 오성빌딩 1층 101호||(지번) 공릉동 441-26||매일 11:00 ~ 21:30||https://place.map.kakao.com/754311770?openhour=1||02-971-3250||
"https://map.kakao.com/||카카오맵||서오릉피자 공릉점||피자||4.9||https://place.map.kakao.com/1591277646#review||서울 노원구 동일로192길 26 1층||(지번) 공릉동 393-1||매일 11:00 ~ 22:00||https://place.map.kakao.com/1591277646?openhour=1||02-973-1818||
"https://map.kakao.com/||카카오맵||피자마루 서울공릉점||피자||3.2||https://place.map.kakao.com/8130440#review||서울 노원구 공릉로 196 1층||(지번) 공릉동 208-24||매일 11:00 ~ 23:00||https://place.map.kakao.com/8130440?openhour=1||02-979-1082||
"https://map.kakao.com/||카카오맵||바이루시아||이탈리안||5.0||https://place.map.kakao.com/1305441074#review||서울 노원구 공릉로 204 동부아파트 상가동 1층 106호||(지번) 공릉동 705||||https://map.kakao.com/#||||
"https://map.kakao.com/||카카오맵||빽보이피자 공릉점||피자||3.0||https://place.map.kakao.com/1113492819#review||서울 노원구 공릉로 201||(지번) 공릉동 424-3||||https://map.kakao.com/#||1668-1894||
"https://map.kakao.com/||카카오맵||피자스쿨 공릉점||피자||3.4||https://place.map.kakao.com/8136049#review||서울 노원구 동일로192길 87 1층||(지번) 공릉동 441-152||월요일||https://place.map.kakao.com/8136049?openhour=1||02-979-5567||
"https://map.kakao.com/||카카오맵||GTS 버거 공릉점||햄버거||4.7||https://place.map.kakao.com/590397011#review||서울 노원구 동일로190길 49 지하||(지번) 공릉동 392-8||||https://map.kakao.com/#||||
"https://map.kakao.com/||카카오맵||오렌지몽키파스타앤 마르코죤스피자||양식||5.0||https://place.map.kakao.com/937745460#review||서울 노원구 공릉로 223 도곡빌딩 2층||(지번) 공릉동 440-16||||https://map.kakao.com/#||||
"https://map.kakao.com/||카카오맵||파스타입니다 공릉점||이탈리안||0.0||https://place.map.kakao.com/1233213470#review||서울 노원구 동일로192길 46||(지번) 공릉동 392-2||||https://map.kakao.com/#||||
"https://map.kakao.com/||카카오맵||보딩샐러드키친||양식||5.0||https://place.map.kakao.com/2015002492#review||서울 노원구 동일로192길 92 1층||(지번) 공릉동 441-24||||https://map.kakao.com/#||||
"https://map.kakao.com/||카카오맵||마리오피자 공릉점||피자||0.0||https://place.map.kakao.com/1061864341#review||서울 노원구 공릉로 196||(지번) 공릉동 208-24||||https://map.kakao.com/#||||
"https://map.kakao.com/||카카오맵||GTSBURGER 공릉점||양식||0.0||https://place.map.kakao.com/1305066679#review||서울 노원구 동일로190길 49||(지번) 공릉동 392-8||||https://map.kakao.com/#||0507-2079-2029""https://map.kakao.com/||카카오맵||일상다반||일식집||2.9||https://place.map.kakao.com/27325995#review||서울 노원구 동일로186길 77-17||(지번) 공릉동 504-28||월~금 14:30 ~ 17:00||https://place.map.kakao.com/27325995?openhour=1||02-971-0666||
"https://map.kakao.com/||카카오맵||기린||일본식라면||4.4||https://place.map.kakao.com/270488437#review||서울 노원구 공릉로 209||(지번) 공릉동 441-18||월~토 11:30 ~ 20:30 · 휴게시간 월~토 15:00 ~ 17:00||https://place.map.kakao.com/270488437?openhour=1||||
"https://map.kakao.com/||카카오맵||공릉우동집||돈까스,우동||3.8||https://place.map.kakao.com/16555583#review||서울 노원구 동일로192길 42||(지번) 공릉동 392-1||월~토 11:00 ~ 02:00||https://place.map.kakao.com/16555583?openhour=1||02-976-1199||
"https://map.kakao.com/||카카오맵||네코정||일식||3.9||https://place.map.kakao.com/1422521863#review||서울 노원구 동일로192길 77 동신아파트 104동 상가 2층||(지번) 공릉동 745||월~토 14:30 ~ 16:00||https://place.map.kakao.com/1422521863?openhour=1||070-4110-5224||
"https://map.kakao.com/||카카오맵||로지다이닝키친||일식||4.3||https://place.map.kakao.com/395667039#review||서울 노원구 공릉로43길 18 1층||(지번) 공릉동 408-125||월~토 11:30 ~ 21:00 · 휴게시간 월~토 15:00 ~ 17:00||https://place.map.kakao.com/395667039?openhour=1||02-974-0100||
"https://map.kakao.com/||카카오맵||참치세상||참치회||4.7||https://place.map.kakao.com/24064837#review||서울 노원구 공릉로 204||(지번) 공릉동 705||영업시간 월~금 17:30 ~ 02:00||https://place.map.kakao.com/24064837?openhour=1||||
"https://map.kakao.com/||카카오맵||아이엠돈까스||돈까스,우동||3.8||https://place.map.kakao.com/27404804#review||서울 노원구 동일로198길 64 1층||(지번) 공릉동 431-2||월 11:20 ~ 15:00||https://place.map.kakao.com/27404804?openhour=1||02-976-0316||
"https://map.kakao.com/||카카오맵||스시쟁이||초밥,롤||2.8||https://place.map.kakao.com/21766457#review||서울 노원구 공릉로 197||(지번) 공릉동 424-4||매일 11:30 ~ 24:00||https://place.map.kakao.com/21766457?openhour=1||02-972-5944||
"https://map.kakao.com/||카카오맵||로지스시 공릉점||일식||4.0||https://place.map.kakao.com/27473705#review||서울 노원구 동일로192길 87 2층||(지번) 공릉동 441-152||월~토 13:30 ~ 17:00||https://place.map.kakao.com/27473705?openhour=1||02-972-4003||
"https://map.kakao.com/||카카오맵||맛보면못참치||참치회||5.0||https://place.map.kakao.com/27442498#review||서울 노원구 동일로192길 77 동신아파트 104동 상가 202호||(지번) 공릉동 745||월~토 11:30 ~ 24:00||https://place.map.kakao.com/27442498?openhour=1||02-949-3779||
"https://map.kakao.com/||카카오맵||숲속왕돈까스||돈까스,우동||4.3||https://place.map.kakao.com/20748264#review||서울 노원구 공릉로51길 4 2층||(지번) 공릉동 440-18||월~토 10:00 ~ 22:00||https://place.map.kakao.com/20748264?openhour=1||010-9156-0711||
"https://map.kakao.com/||카카오맵||참치여라||참치회||4.1||https://place.map.kakao.com/614570625#review||서울 노원구 동일로193길 8 신대림아파트 상가 1층 101호||(지번) 공릉동 379-9||영업시간 월~토 17:00 ~ 23:00||https://place.map.kakao.com/614570625?openhour=1||010-6831-4139||
"https://map.kakao.com/||카카오맵||길동우동 공릉점||돈까스,우동||3.5||https://place.map.kakao.com/959006328#review||서울 노원구 동일로192길 5 1층||(지번) 공릉동 386-6||월,수,목,금,토,일 09:30 ~ 23:00||https://place.map.kakao.com/959006328?openhour=1||02-949-8828||
"https://map.kakao.com/||카카오맵||바우네수제왕돈까스||돈까스,우동||4.2||https://place.map.kakao.com/27322801#review||서울 노원구 공릉로 239||(지번) 공릉동 172-4||||https://map.kakao.com/#||02-973-9431||
"https://map.kakao.com/||카카오맵||몽키 본점||돈까스,우동||4.1||https://place.map.kakao.com/27322570#review||서울 노원구 공릉로 223||(지번) 공릉동 440-16||||https://map.kakao.com/#||02-973-3545||
"https://map.kakao.com/||카카오맵||호시타코야끼 공릉점||일식||3.0||https://place.map.kakao.com/1249584446#review||서울 노원구 공릉로 208 1층 10호||(지번) 공릉동 208-18||매일 12:00 ~ 02:00||https://place.map.kakao.com/1249584446?openhour=1||||
"https://map.kakao.com/||카카오맵||반갑다연어야 공릉점||일식||2.8||https://place.map.kakao.com/950204443#review||서울 노원구 공릉로 207||(지번) 공릉동 441-19||월~토 11:30 ~ 03:00||https://place.map.kakao.com/950204443?openhour=1||02-972-9590||
"https://map.kakao.com/||카카오맵||돈까스회관 공릉점||돈까스,우동||4.0||https://place.map.kakao.com/229652101#review||서울 노원구 공릉로 204 상가동 1층 101호||(지번) 공릉동 705||매일 10:00 ~ 21:00||https://place.map.kakao.com/229652101?openhour=1||02-975-5880||
"https://map.kakao.com/||카카오맵||정직유부 공릉점||초밥,롤||5.0||https://place.map.kakao.com/1258239562#review||서울 노원구 공릉로 204 상가동 1층 104호||(지번) 공릉동 705||월~토 08:30 ~ 20:00 · 휴게시간 월~토 15:00 ~ 16:00||https://place.map.kakao.com/1258239562?openhour=1||02-977-6566||
"https://map.kakao.com/||카카오맵||스시요이||초밥,롤||0.0||https://place.map.kakao.com/27405105#review||서울 노원구 동일로192길 42 웰빙타워 2층||(지번) 공릉동 392-1||||https://map.kakao.com/#||||
"https://map.kakao.com/||카카오맵||모두의유부||일식||5.0||https://place.map.kakao.com/66506688#review||서울 노원구 공릉로 208 1층 6호||(지번) 공릉동 208-18||월~금 10:30 ~ 21:00 · 휴게시간 매일 15:00 ~ 16:00||https://place.map.kakao.com/66506688?openhour=1||070-8860-8697||
"https://map.kakao.com/||카카오맵||스시타카다||초밥,롤||0.0||https://place.map.kakao.com/26473805#review||서울 노원구 동일로186길 54||(지번) 공릉동 509-1||월요일||https://place.map.kakao.com/26473805?openhour=1||02-975-5554||
"https://map.kakao.com/||카카오맵||도쿄식탁||일식||3.6||https://place.map.kakao.com/1208428590#review||서울 노원구 공릉로46길 9 2층||(지번) 공릉동 422-2||월~토 11:00 ~ 21:00 · 휴게시간 월~토 15:00 ~ 17:00||https://place.map.kakao.com/1208428590?openhour=1||02-977-8762||
"https://map.kakao.com/||카카오맵||미소야 공릉점||돈까스,우동||1.7||https://place.map.kakao.com/7889776#review||서울 노원구 공릉로46길 6 현대프라자 1층 105호||(지번) 공릉동 421-19||매일 11:30 ~ 22:00||https://place.map.kakao.com/7889776?openhour=1||02-948-5840||
"https://map.kakao.com/||카카오맵||오이시타코야끼 공릉점||일식||0.0||https://place.map.kakao.com/120233753#review||서울 노원구 동일로192길 90||(지번) 공릉동 441-25||||https://map.kakao.com/#||0507-899-2307||
"https://map.kakao.com/||카카오맵||카츠와이찌||돈까스,우동||0.0||https://place.map.kakao.com/58072237#review||서울 노원구 공릉로43길 11 1층||(지번) 공릉동 408-138||||https://map.kakao.com/#||070-4833-0106||
"https://map.kakao.com/||카카오맵||미야코||일식집||4.0||https://place.map.kakao.com/16298911#review||서울 노원구 동일로192길 11||(지번) 공릉동 386-2||||https://map.kakao.com/#||02-949-0003||
"https://map.kakao.com/||카카오맵||이비꼬 공릉역점||일식집||0.0||https://place.map.kakao.com/2078139299#review||서울 노원구 동일로 1078||(지번) 공릉동 386-1||||https://map.kakao.com/#||||
"https://map.kakao.com/||카카오맵||혼참치 노원점||일식||0.0||https://place.map.kakao.com/1400676933#review||서울 노원구 동일로196길 14||(지번) 공릉동 375-9||||https://map.kakao.com/#||""https://map.kakao.com/||카카오맵||공덕관||중국요리||2.5||https://place.map.kakao.com/16765207#review||서울 노원구 동일로192길 38 1,2층||(지번) 공릉1동 393-15||매일 11:00 ~ 21:00||https://place.map.kakao.com/16765207?openhour=1||02-974-9090||
"https://map.kakao.com/||카카오맵||중국집||중국요리||3.6||https://place.map.kakao.com/1482296127#review||서울 노원구 공릉로51길 7 2층||(지번) 공릉동 440-11||매일 10:30 ~ 21:00||https://place.map.kakao.com/1482296127?openhour=1||02-979-5353||
"https://map.kakao.com/||카카오맵||가원양꼬치||양꼬치||4.9||https://place.map.kakao.com/366183593#review||서울 노원구 동일로192길 46||(지번) 공릉동 392-2||월요일||https://place.map.kakao.com/366183593?openhour=1||070-4133-0539||
"https://map.kakao.com/||카카오맵||뽕신 공릉동점||중국요리||4.3||https://place.map.kakao.com/17247659#review||서울 노원구 동일로 1078||(지번) 공릉동 386-5||매일 11:00 ~ 21:00||https://place.map.kakao.com/17247659?openhour=1||||
"https://map.kakao.com/||카카오맵||라화방마라탕||중식||3.2||https://place.map.kakao.com/315578128#review||서울 노원구 공릉로 208||(지번) 공릉동 208-18||월~금 11:00 ~ 21:00||https://place.map.kakao.com/315578128?openhour=1||02-977-9392||
"https://map.kakao.com/||카카오맵||용문각||중국요리||4.9||https://place.map.kakao.com/9277533#review||서울 노원구 동일로 1106 1층||(지번) 공릉동 362-1||월요일||https://place.map.kakao.com/9277533?openhour=1||02-977-1255||
"https://map.kakao.com/||카카오맵||샹츠마라||중국요리||3.9||https://place.map.kakao.com/139212943#review||서울 노원구 공릉로 229-1 공릉동비발디캐슬 101동 1103,1104호||(지번) 공릉동 437-4||매일 11:00 ~ 22:30 · 휴게시간 매일 15:30 ~ 16:30||https://place.map.kakao.com/139212943?openhour=1||||
"https://map.kakao.com/||카카오맵||왕짜장||중국요리||3.0||https://place.map.kakao.com/11648405#review||서울 노원구 공릉로 201||(지번) 공릉동 424-3||월~토 10:00 ~ 22:00||https://place.map.kakao.com/11648405?openhour=1||02-972-9822||
"https://map.kakao.com/||카카오맵||춘리마라탕 공릉점||중식||5.0||https://place.map.kakao.com/2064157302#review||서울 노원구 공릉로 199 2층||(지번) 공릉동 424-8||월,화,목,금,토,일 11:00 ~ 23:30||https://place.map.kakao.com/2064157302?openhour=1||02-977-8511||
"https://map.kakao.com/||카카오맵||쌍둥이가원양꼬치||양꼬치||4.0||https://place.map.kakao.com/1199098275#review||서울 노원구 동일로192길 46||(지번) 공릉동 392-2||매일 14:00 ~ 03:00||https://place.map.kakao.com/1199098275?openhour=1||070-4133-0539||
"https://map.kakao.com/||카카오맵||신미방마라탕 공릉점||중국요리||4.4||https://place.map.kakao.com/79841784#review||서울 노원구 동일로190길 40 1층||(지번) 공릉동 502-25||매일 11:00 ~ 23:30||https://place.map.kakao.com/79841784?openhour=1||||
"https://map.kakao.com/||카카오맵||복쓰부||중국요리||4.4||https://place.map.kakao.com/1067983447#review||서울 노원구 공릉로 196||(지번) 공릉동 208-24||월요일||https://place.map.kakao.com/1067983447?openhour=1||02-979-0689||
"https://map.kakao.com/||카카오맵||탕화쿵푸 공릉점||중국요리||4.7||https://place.map.kakao.com/1212790145#review||서울 노원구 공릉로 203 2층||(지번) 공릉동 424-2||월~토 11:00 ~ 21:50||https://place.map.kakao.com/1212790145?openhour=1||02-975-0630||
"https://map.kakao.com/||카카오맵||보배반점 공릉점||중국요리||5.0||https://place.map.kakao.com/945249788#review||서울 노원구 동일로192길 16||(지번) 공릉동 395-3||||https://map.kakao.com/#||02-977-2410||
"https://map.kakao.com/||카카오맵||8월의중식 공릉산업대점||중식||3.0||https://place.map.kakao.com/495843596#review||서울 노원구 동일로192길 46||(지번) 공릉동 392-2||||https://map.kakao.com/#||02-971-6003||
"https://map.kakao.com/||카카오맵||마라하오 공릉점||중식||0.0||https://place.map.kakao.com/1982059211#review||서울 노원구 동일로192길 20 지하1층 201호||(지번) 공릉동 395-14||||https://map.kakao.com/#||||
"https://map.kakao.com/||카카오맵||중식당친친||중식||0.0||https://place.map.kakao.com/1278709333#review||서울 노원구 동일로192길 18||(지번) 공릉동 395-13||||https://map.kakao.com/#||0507-899-9988""https://map.kakao.com/||카카오맵||원조이모네연탄불곱창||곱창,막창||2.6||https://place.map.kakao.com/21412672#review||서울 노원구 동일로192길 46||(지번) 공릉동 392-2||영업시간 월~토 16:30 ~ 22:30||https://place.map.kakao.com/21412672?openhour=1||02-973-4658||
"https://map.kakao.com/||카카오맵||화로상회 공릉점||육류,고기||4.0||https://place.map.kakao.com/1677550004#review||서울 노원구 공릉로46길 6 현대프라자 1층 111호||(지번) 공릉동 421-19||매일 12:00 ~ 23:00||https://place.map.kakao.com/1677550004?openhour=1||02-979-2292||
"https://map.kakao.com/||카카오맵||마포생고기||육류,고기||3.6||https://place.map.kakao.com/12991364#review||서울 노원구 동일로190길 39 1, 2층||(지번) 공릉동 393-5||매일 00:00 ~ 24:00||https://place.map.kakao.com/12991364?openhour=1||02-979-6776||
"https://map.kakao.com/||카카오맵||청학골||갈비||1.8||https://place.map.kakao.com/8580028#review||서울 노원구 동일로192길 6||(지번) 공릉동 395-1||매일 00:00 ~ 24:00||https://place.map.kakao.com/8580028?openhour=1||02-978-0055||
"https://map.kakao.com/||카카오맵||오름제주고기 본점||육류,고기||2.2||https://place.map.kakao.com/903435269#review||서울 노원구 동일로192길 85 1층||(지번) 공릉동 441-136||매일 12:00 ~ 23:00||https://place.map.kakao.com/903435269?openhour=1||02-973-9290||
"https://map.kakao.com/||카카오맵||국민소곱창 공릉점||곱창,막창||4.4||https://place.map.kakao.com/2140415713#review||서울 노원구 동일로192길 88 오성빌딩 1층||(지번) 공릉동 441-26||영업시간 월,화 17:30 ~ 23:00||https://place.map.kakao.com/2140415713?openhour=1||02-975-9923||
"https://map.kakao.com/||카카오맵||굴다리 전주콩나물국밥 본점||국밥||4.2||https://place.map.kakao.com/17209056#review||서울 노원구 동일로198길 32 1층||(지번) 공릉동 366-1||매일 09:00 ~ 22:00||https://place.map.kakao.com/17209056?openhour=1||02-978-7202||
"https://map.kakao.com/||카카오맵||공릉회수산||회||3.6||https://place.map.kakao.com/16906339#review||서울 노원구 공릉로 179 2층||(지번) 공릉동 408-8||매일 12:00 ~ 24:00||https://place.map.kakao.com/16906339?openhour=1||02-971-4383||
"https://map.kakao.com/||카카오맵||춘천닭갈비 서울과기대점||닭요리||4.8||https://place.map.kakao.com/16936111#review||서울 노원구 동일로192길 56||(지번) 공릉동 392-27||매일 11:30 ~ 23:00||https://place.map.kakao.com/16936111?openhour=1||02-975-2345||
"https://map.kakao.com/||카카오맵||백세마인보쌈 공릉본점||족발,보쌈||4.2||https://place.map.kakao.com/1315949532#review||서울 노원구 공릉로 187||(지번) 공릉동 408-4||매일 11:30 ~ 22:00||https://place.map.kakao.com/1315949532?openhour=1||02-972-1656||
"https://map.kakao.com/||카카오맵||무봉리토종순대국 공릉점||순대||3.3||https://place.map.kakao.com/1741509421#review||서울 노원구 동일로192길 63 1층||(지번) 공릉동 389-9||매일 00:00 ~ 24:00||https://place.map.kakao.com/1741509421?openhour=1||02-977-7396||
"https://map.kakao.com/||카카오맵||이정림수제햄부대찌개||찌개,전골||4.5||https://place.map.kakao.com/381875424#review||서울 노원구 공릉로 207 세림빌딩 2층 202호||(지번) 공릉동 441||매일 11:00 ~ 22:00 · 휴게시간 매일 15:00 ~ 16:00||https://place.map.kakao.com/381875424?openhour=1||0507-1339-3804||
"https://map.kakao.com/||카카오맵||향토곱창||곱창,막창||2.9||https://place.map.kakao.com/16819810#review||서울 노원구 동일로191길 10||(지번) 공릉동 383-18||매일 11:00 ~ 24:00||https://place.map.kakao.com/16819810?openhour=1||02-972-3492||
"https://map.kakao.com/||카카오맵||청교옥||냉면||3.8||https://place.map.kakao.com/88388237#review||서울 노원구 공릉로 225 나동 1층||(지번) 공릉동 438-2||매일 09:30 ~ 21:30||https://place.map.kakao.com/88388237?openhour=1||02-949-1519||
"https://map.kakao.com/||카카오맵||원조강영숙봉평메밀촌 본점||국수||4.3||https://place.map.kakao.com/17223169#review||서울 노원구 공릉로 191-6 1층||(지번) 공릉동 441-40||매일 10:30 ~ 21:30||https://place.map.kakao.com/17223169?openhour=1||02-971-6953||
"https://map.kakao.com/||카카오맵||전봇대연탄불막창구이||곱창,막창||3.4||https://place.map.kakao.com/23106158#review||서울 노원구 동일로192길 45 1층||(지번) 공릉1동 388-6||영업시간 매일 16:30 ~ 01:00||https://place.map.kakao.com/23106158?openhour=1||02-949-7677||
"https://map.kakao.com/||카카오맵||찬이네곱창||곱창,막창||5.0||https://place.map.kakao.com/1064474316#review||서울 노원구 공릉로51길 7||(지번) 공릉동 440-11||영업시간 월~토 18:00 ~ 23:00||https://place.map.kakao.com/1064474316?openhour=1||02-974-3121||
"https://map.kakao.com/||카카오맵||수돈재 공릉점||육류,고기||3.3||https://place.map.kakao.com/1472202260#review||서울 노원구 동일로192길 5 1층||(지번) 공릉동 386-6||매일 10:30 ~ 22:00||https://place.map.kakao.com/1472202260?openhour=1||02-977-2016||
"https://map.kakao.com/||카카오맵||오늘손칼국수앤찜 공릉점||해물,생선||3.9||https://place.map.kakao.com/26418668#review||서울 노원구 동일로192길 5 2층||(지번) 공릉동 386-6||매일 10:00 ~ 22:00||https://place.map.kakao.com/26418668?openhour=1||02-973-9252||
"https://map.kakao.com/||카카오맵||삼정종합어시장||회||4.3||https://place.map.kakao.com/201802381#review||서울 노원구 동일로192길 47 2층||(지번) 공릉동 389-7||매일 11:30 ~ 24:00||https://place.map.kakao.com/201802381?openhour=1||02-978-8945||
"https://map.kakao.com/||카카오맵||강나루유황오리주물럭 제1본점||오리||2.3||https://place.map.kakao.com/16061965#review||서울 노원구 공릉로43길 11||(지번) 공릉동 408-138||매일 11:00 ~ 22:00||https://place.map.kakao.com/16061965?openhour=1||02-972-5454||
"https://map.kakao.com/||카카오맵||김가네찜칼국수||한식||4.7||https://place.map.kakao.com/536237723#review||서울 노원구 공릉로 181 1층||(지번) 공릉동 408-6||매일 10:00 ~ 22:00||https://place.map.kakao.com/536237723?openhour=1||02-978-8880||
"https://map.kakao.com/||카카오맵||추운돼지삼겹살 공릉점||삼겹살||3.5||https://place.map.kakao.com/1563510748#review||서울 노원구 동일로186길 77-21||(지번) 공릉동 504-20||영업시간 매일 16:00 ~ 23:00||https://place.map.kakao.com/1563510748?openhour=1||02-948-9111||
"https://map.kakao.com/||카카오맵||명문대||해물,생선||4.3||https://place.map.kakao.com/724570590#review||서울 노원구 동일로192다길 7||(지번) 공릉동 389-11||월요일||https://place.map.kakao.com/724570590?openhour=1||02-949-2203||
"https://map.kakao.com/||카카오맵||압구정찌개마을 공릉본점||찌개,전골||3.2||https://place.map.kakao.com/20748457#review||서울 노원구 동일로191길 8||(지번) 공릉동 383-17||매일 00:00 ~ 24:00||https://place.map.kakao.com/20748457?openhour=1||02-493-0097||
"https://map.kakao.com/||카카오맵||열화철판||곱창,막창||3.0||https://place.map.kakao.com/174772884#review||서울 노원구 동일로192길 90 2층||(지번) 공릉동 441-25||매일 11:00 ~ 24:00 · 휴게시간 매일 15:00 ~ 17:00||https://place.map.kakao.com/174772884?openhour=1||02-6013-5892||
"https://map.kakao.com/||카카오맵||참맛감자탕||감자탕||3.9||https://place.map.kakao.com/773352732#review||서울 노원구 동일로192길 41 1층||(지번) 공릉동 388-5||매일 00:00 ~ 24:00||https://place.map.kakao.com/773352732?openhour=1||02-974-5533||
"https://map.kakao.com/||카카오맵||웰빙왕십리곱창||곱창,막창||3.4||https://place.map.kakao.com/21331942#review||서울 노원구 공릉로 208 1층||(지번) 공릉동 208-18||매일 14:00 ~ 05:00||https://place.map.kakao.com/21331942?openhour=1||||
"https://map.kakao.com/||카카오맵||싱싱오징어바다 과기대점||회||2.9||https://place.map.kakao.com/16330146#review||서울 노원구 동일로192길 30 1층||(지번) 공릉동 393-5||영업시간 월~금 16:00 ~ 05:00||https://place.map.kakao.com/16330146?openhour=1||02-976-8081||
"https://map.kakao.com/||카카오맵||온고을 본점||닭요리||3.0||https://place.map.kakao.com/16472635#review||서울 노원구 동일로 1065||(지번) 공릉동 398-5||매일 10:00 ~ 22:00||https://place.map.kakao.com/16472635?openhour=1||02-975-8200"`;

const regex = /https:\/\/place\.map\.kakao\.com\/(\d+)#review/g;
const matches = [];
let match;

while ((match = regex.exec(inputString)) !== null) {
  matches.push(match[1]);
}
const resultString = '[' + matches.join(', ') + ']';

// 클립보드에 복사
const textarea = document.createElement('textarea');
textarea.value = resultString;
document.body.appendChild(textarea);
textarea.select();
document.execCommand('copy');
document.body.removeChild(textarea);

console.log("추출한 배열이 클립보드에 복사되었습니다.");