document.getElementById("omikujiButton").addEventListener("click", function() {
    // おみくじの結果を定義
    const results = ["1等: 大吉", "2等: 中吉", "3等: 小吉", "4等: 吉", "5等: 凶"];
    
    // ランダムにおみくじの結果を選択
    const randomIndex = Math.floor(Math.random() * results.length);
    const selectedResult = results[randomIndex];
    
    // 結果を表示
    document.getElementById("result").textContent = selectedResult;
    
    // ボタンの表示を切り替え
    document.getElementById("omikujiButton").style.display = "none";
    document.getElementById("retryButton").style.display = "inline-block";
});

document.getElementById("retryButton").addEventListener("click", function() {
    // 「もう一度引く」ボタンをクリックしたとき、初期状態に戻す
    document.getElementById("result").textContent = "結果がここに表示されます";
    document.getElementById("omikujiButton").style.display = "inline-block";
    document.getElementById("retryButton").style.display = "none";
});
