/**
 * 遊戲流程
 */
// 普通攻擊
const ATTACK_VALUE = 10;
// 強力攻擊
const STRONG_ATTACK_VALUE = 17;
// 怪物攻擊力
const MONSTER_ATTACK_VALUE = 14;
// 血量回復
const HEAL_VALUE = 20;

// 使用 const 定義 MODE
const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

// 記錄目前Show 到哪一筆 Log
let lastLoggedEntry;

// Log 記錄 
let battleLog = [];

function getMaxLifeValues() {
    // 使用者自訂血量
    const enteredValue = prompt('Maximum life for you and the monster.', '100');

    let parsedValue = parseInt(enteredValue);

    // 如果輸入不是數值 或 小於等於0 則 設定為100
    if (isNaN(parsedValue) || parsedValue <= 0){
        throw { message: 'Invalid user input, not a number!' };
    }

    return parsedValue;
}

let chosenMaxLife;

try {
    chosenMaxLife = getMaxLifeValues();
} catch (error) {
    console.log(error);
    chosenMaxLife = 100;
    alert('You entered something wrong, default value of 100 was used.');
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
// 是否有額外生命
let hasBonusLife = true;

// 設定滿血量數值
adjustHealthBars(chosenMaxLife);

function writeToLog(ev, val, monsterHealth, playerHealth) {
    let logEntry = {
        event: ev,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
    };

    // 重構 使用switch
    // if (ev === LOG_EVENT_PLAYER_ATTACK) {
    //     logEntry.target = 'MONSTER';
    // } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
    //     logEntry.target = 'MONSTER';
    // } else if (ev === LOG_EVENT_MONSTER_ATTACK) {
    //     logEntry.target = 'PLAYER';
    // } else if (ev === LOG_EVENT_PLAYER_HEAL) {
    //     logEntry.target = 'PLAYER';
    // }

    switch (ev) {
        case LOG_EVENT_PLAYER_ATTACK:
            logEntry.target = 'MONSTER';
            break;
        case LOG_EVENT_PLAYER_STRONG_ATTACK:
            logEntry.target = 'MONSTER';
            break;
        case LOG_EVENT_MONSTER_ATTACK:
            logEntry.target = 'PLAYER';
            break;
        case LOG_EVENT_PLAYER_HEAL:
            logEntry.target = 'PLAYER';
            break;
        default:
            logEntry = {};
    }

    battleLog.push(logEntry);
}

function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

// 玩家攻擊回合結束
function endRound() {
    // 利用死亡前的剩餘血量當成BonusLife
    const initialPlayerHealth = currentPlayerHealth;

    // 怪物反擊
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    writeToLog(
        LOG_EVENT_MONSTER_ATTACK,
        playerDamage,
        currentMonsterHealth,
        currentPlayerHealth
    );

    // 檢查是否有額外生命
    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        alert('You would be dead but the bonus life saved you!');
        setPlayerHealth(initialPlayerHealth);
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!');
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'PLAYER WON',
            currentMonsterHealth,
            currentPlayerHealth
        );
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost!');
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'MONSTER WON',
            currentMonsterHealth,
            currentPlayerHealth
        );
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a draw!');
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'A DRAW',
            currentMonsterHealth,
            currentPlayerHealth
        );
    }
    
    if (currentPlayerHealth <= 0 || currentMonsterHealth <= 0) {
        reset();
    }
}

// 攻擊怪物
function attackMonster(mode) {
    const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;

    const logEvent =
        mode === MODE_ATTACK 
            ? LOG_EVENT_PLAYER_ATTACK 
            : LOG_EVENT_PLAYER_STRONG_ATTACK;

    // 重構 使用三元運算符
    // let maxDamage;
    // let logEvent;
    // if (mode === MODE_ATTACK) {
    //     maxDamage = ATTACK_VALUE;
    //     logEvent = LOG_EVENT_PLAYER_ATTACK;
    // } else if (mode === MODE_STRONG_ATTACK) {
    //     maxDamage = STRONG_ATTACK_VALUE;
    //     logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
    // }

    // 攻擊
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;

    writeToLog(
        logEvent,
        damage,
        currentMonsterHealth,
        currentPlayerHealth
    );

    endRound();
}

// 玩家普通攻擊
function attackHandler() {
    attackMonster(MODE_ATTACK);
}

// 玩家強力攻擊
function strongAttackHandler() {
    attackMonster(MODE_STRONG_ATTACK)
}

function healPlayHandler() {
    let healValue;
    // 如果補血血量 大於 距離滿血的狀態，則最多到滿血
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("You can't heal to more than your max initial health.");
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }

    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    writeToLog(
        LOG_EVENT_PLAYER_HEAL,
        healValue,
        currentMonsterHealth,
        currentPlayerHealth
    );
    endRound();
}

function printLogHandler() {
    let i = 0;
    // for of 為 執行每個 element 
    // for (const logEntry of battleLog) {
    //     console.log(`#${i}`);
    //     // for in 為 執行每個 key
    //     for (const key in logEntry) {
    //         console.log(`${key} => ${logEntry[key]}`);
    //     }
    //     i++;
    // }

    // 修改為 點擊 Show Log 每次只顯示一筆
    for (const logEntry of battleLog) {
        // !lastLoggedEntry => lastLoggedEntry = 0 或 undefined 都為 true
        // lastLoggedEntry !== 0 不等於0 為 true
        // !lastLoggedEntry && lastLoggedEntry !== 0 只有 剛初始化時 會為 true
        // 因為如果為第一次 lastLoggedEntry 為 undefined 所以加了 (!lastLoggedEntry && lastLoggedEntry !== 0)
        // 如果只有 !lastLoggedEntry 則 lastLoggedEntry = 0 會為true
        // 如果只有 lastLoggedEntry !== 0 則 lastLoggedEntry > 0 都會為true

        // console.log(`${i} , ${lastLoggedEntry}, ${(!lastLoggedEntry && lastLoggedEntry !== 0)}, ${lastLoggedEntry < i}`);

        if ((!lastLoggedEntry && lastLoggedEntry !== 0) || lastLoggedEntry < i) {
            console.log(`#${i}`);
            for (const key in logEntry) {
                console.log(`${key} => ${logEntry[key]}`)
            }
            lastLoggedEntry = i;
            break;
        }
        i++;
    }
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayHandler);
logBtn.addEventListener('click', printLogHandler);