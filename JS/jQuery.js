console.log("jquery.jsを読み込みました")

// セレクタ
let a = $("#a").text();
console.log(a);

let b = $(".b").text();
console.log(b);

let some = $("p").text();
console.log(some);


// $("#a").hide();

// メソッド
// toggle
function toggle() {
    // クリックでid = aのpタグのテキストを非表示
    // $("#a").hide();

    // 再度クリックで表示
    // $("#a").show();

    // 表示、非表示の自動判断
    $("#a").toggle();
}

function slide() {
    // スライドダウン
    // $("#a").slideDown();

    // スライドアップ
    // $("#a").slideUp();

    // スライドアップ＆ダウン
    $("#a").slideToggle();
}

function fade() {
    // フェードイン
    // $("#a").slideDown();

    // スライドアウト
    // $("#a").slideUp();

    // スライドアップ＆ダウン
    $("#a").slideToggle();
}

function color() {
    // 色指定
    $("#a").css("color", "red");

    // サイズ変更
    $("#a").css("fontsize", "50px");
}

function customAnimate() {
    // JSON(Javascript Object Notation)形式でプロパティ値を渡す
    $("#a").animate({
        "fontSize": "50px",
    }).animate({
        "fontSize": "20px",
    });
}

// イベントハンドラ
// focasイベントを取得
$("#input_1").on("focus", function () {
    console.log("インプットタグがフォーカスされました");
});

// clickイベントを取得
$("#h3").on("click", function () {
    console.log("ボタンがクリックされました");
    // nextで指定したタグの次の兄弟要素を指定（今回はdivタグ）
    // $("h3").next().slideToggle();

    // this指定で、クリックしたときのみに処理されるようにする
    $(this).next().slideToggle();

});