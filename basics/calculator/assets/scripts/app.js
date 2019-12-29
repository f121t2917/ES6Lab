const defaultResult = 0;
// let 作用域在區塊(Block)裡、var 作用域在函數(function)裡
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
    return parseInt(userInput.value);
}

/**
 * 一. 重構
 * 發現add()和subtract()做了同樣的過程，只差在運算符號不一樣
 */
/*
function add() {
    // 避免變數名稱變更後，後面需修改
    // 使用 const 避免修改到
    const enteredNumber = getUserNumberInput();
    
    // `` 模版字符串
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    const calculationDescription = `${currentResult} + ${enteredNumber}`;

    // 
    // 轉成數值除了parseInt 也可以使用 +userInput.value
    // currentResult = currentResult + +userInput.value; 
    // 
    // 數值處理 3 * '3' => 9 是數字
    // 但 3 + '3' => 33  因為js使用了"I can combine text" mode of the + operator 
    // and generates a string instead of a number
    // 
    currentResult = currentResult + enteredNumber;
    outputResult(currentResult, calculationDescription);
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const calculationDescription = `${currentResult} - ${enteredNumber}`;
    currentResult = currentResult - enteredNumber;
    outputResult(currentResult, calculationDescription);
}
*/

/**
 * 一. 重構 將輸出的部份拉出來
 * 
 * @param {*} operator 
 * @param {*} resultBeforeCalc 
 * @param {*} calcNumber 
 */
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calculationDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calculationDescription);
}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
) {
    // 產生 object 記錄 log
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

/**
 * 一. 重構後
 */
function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

/**
 * "Indirect" vs "Direct" Function
 * addBtn加入click Listener
 * 因為addEventListener 不直接調用函數，僅向JavaScript提供函數名稱
 * 當單擊按鈕時，繼續執行添加
 * addBtn.addEventListener('click', add()); => error
 * 如果使用add() JavaScript在解析/執行腳本並註冊事件偵聽器並立即執行添加時會遇到該行，
 * 因為您添加了括號=>這意味著）：  “請執行該函數
 */
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
