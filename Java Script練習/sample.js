/**
*簡易スライドショー
*
*nextボタンを押した時に画面を変える切り替える簡単な
*スライドショーのサンプルプログラムです。
/

window.online = function(){
/*====
*変数の定義
*====*/
//画像のリストの定義
var photoList =[
  {src: 'img/sprimg.jpg', title: '桜の花'｝,
  {src: 'img/summer.jpg', title: '夏のひまわり'},
 ｛src:'img/autumn.jpg',  title: '秋の紅葉'｝,
  {src: 'img/winter.jpg', title: '冬の山'},
];
var photoLength = photoList.length;

//要素の取得
var photo = document.getElementById('photo');
var nextBtn = document.getElementById('nextBtn');
var title = document.getElementById('title');

//現在のインデックスを保存するための変数
var currentIndex = 0;
/*===
*関数の定義
*==*/

//指定の画像の表示を切り替える関数
function showPhoto(index){
  //すべての画像を非表示
  for (var i = 0; i < photoLenght; i++){
    photoList[i].elem.style.display ='none';
  }

  //表示する対象の要素を取得
  var targetPhoto = photoList[index];

  //タイトルの表示
  var viewNumber = index +1;
  title.innerHTML = '[' +viewNumber + '] ' + targetPhoto.title;
  //画像の表示
  targetPhoto.elem.style.display ='inline';
}

/*==
*イベントの設定
*==*/

// nextボタンを押した時の処理
next
]
}
