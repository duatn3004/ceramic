/**
 * 슬라이드 요소 관리
 */
new Swiper('.promotion .swiper', {
    // direction: 'horizontal', // 수평 슬라이드
    autoplay: { // 자동 재생 여부
      delay: 1000 // 3초마다 슬라이드 바뀜
    },
    loop: true, // 반복 재생 여부
    slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    pagination: { // 페이지 번호 사용
      el: '.promotion .swiper-pagination', // 페이지 번호 요소
      clickable: true // 사용자의 페이지 번호 제어 여부
    },
    navigation: { // 슬라이드 이전/다음 버튼 사용
      prevEl: '.promotion .swiper-button-prev', // 이전 버튼 요소
      nextEl: '.promotion .swiper-button-next' // 다음 버튼 요소
    }
  });

//   수량 선택 및 금액 추가
let plu=document.getElementById('plu');
let min=document.getElementById('min');
let count=document.getElementById('count');
let price=document.getElementById('price');

let cnt=1;
let p=Number(price.getAttribute("for"));
plu.addEventListener('click',()=>{
    cnt++;
    count.innerText=`${cnt}`;
    price.innerText=`${p*cnt}$`;
    console.log(p*cnt);
});

min.addEventListener('click',()=>{
    cnt--;
    if(cnt<1){
        cnt=1;
    }
    count.innerText=`${cnt}`
    price.innerText=`${p*cnt}$`;
    console.log(p*cnt);
});

// 장바구니 화면
var overlay1 = document.getElementById("overlay1");
var cartBtn = document.getElementById("cart_btn");
var go_cart = document.getElementById("go_cart");
var closeBtn = document.getElementById("close1");
let count1=document.getElementById('count1');
let cartPrice=document.getElementById('cartPrice');
let cartMain=document.getElementById('cartMain');
let clear_cart=document.getElementById('clear_cart');


let title=['LILLO GREY VASE','RHONNA POT','KINAI VASE','CREAMIC FRUIT BOWL',
'IVORY DINNER PLATE','KITA BOWL WHITE','RAMONA BOWL','POMNA WHITE MUG',
'SEASHELL BOWL','CERAMIC FRUIT BOWL','KITA BOWL WHITE','WHITE FLOWER',
'EUCALYPTUS','LILIY FLOWER'];
let itemPrice=[13,16,27,15,9,17,17,17,17,7,15,6,20,10];

cartBtn.addEventListener("click", function () {
  // 같은 항목은 누적되게 할 수 있을까??
  // window.localStorage.setItem('str',"");
  let str=window.localStorage.getItem('str');
    str+=`<div class="cartMain">
    <div class="cartPhoto">
    <img src="도자기/상세페이지/cart${this.value}.png">
    </div>
    <div class="cartText">
    <h2>${title[this.value]}</h2>
    <diV>
    <i><label id="count1" for="count">Quantity : ${cnt}</label></i>
    <label id="cartPrice" class="cartPrice" >${p*cnt}$</label>
    </diV>
    </div>
    </div> `;
    window.localStorage.setItem('str',str);
    cartMain.innerHTML=str;
    overlay1.style.display = "block";
});
go_cart.addEventListener("click", function () {
  overlay1.style.display = "none";
    window.location.href="payment.html";
    str=window.localStorage.getItem('str');
    console.log(str);
    payment.innerHTML=str;
});
closeBtn.addEventListener("click", function () {
  overlay1.style
  .display = "none";
});
clear_cart.addEventListener("click", function () {
  // overlay1.style.display = "none";
  str="";
  window.localStorage.setItem('str',str);
  cartMain.innerHTML=str;
  // window.localStorage.clear();
});
