// index.js
/* 팝업, 뒤 배경 숨기기 */
/* 팝업, 뒤 배경 객체 등록 */
const popup = document.querySelector('.write_popup');/* 태그는 바뀌지 않으니깐 const */
const popup_bg = document.querySelector('.popup_bg');
console.log(popup); // 오류검사
console.log(popup_bg); // 오류검사 
// popup,popup_bg 숨기기
popup.style.display='none'; //초기 숨기기
popup_bg.style.display='none'; //초기 숨기기
// 글쓰기 버튼 눌렀을 때 팝업창 보여주기
function popupShow() {
    /* 보이는 작업 처리 시 원래 객체가 가지던 CSS display속성으로 되돌린다. */
    /* 후보군 : flex, block, inline, inline-block */
    popup.style.display='flex'; //write_popup css에서 display:flex로 했기때문에 여기 값도 flex로 설정 그래야 디자인이 풀리지 않는다.
    popup_bg.style.display='block';
}
// 배경 눌렀을때 팝업창 닫히기
function popupHide(){
    popup.style.display='none';
    popup_bg.style.display='none';
}