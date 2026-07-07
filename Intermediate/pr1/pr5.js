// それぞれの要素を取得
const input = document.querySelector("#taskInput");
const button = document.querySelector("#addButton");
const list = document.querySelector("#taskList");

// 追加されたときの処理
function addItem(event) {
    // 入力されたテキスト
    const text = input.value;
    // 空文字の場合は何もしない
    if (text === "") return;

    // DOM要素を追加
    const li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);

    // テキストを空欄にする
    input.value = "";
}

// [追加]ボタンがクリックされたときの処理
button.addEventListener("click", addItem);

