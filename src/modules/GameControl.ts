//引入其他类
import Snake from "./Snake";
import ScorePanel from "./ScorePanel";
import Food from "./Food";
// 游戏控制器，控制其他的所有类
class GameControl{
    snake: Snake;
    scorePanel: ScorePanel;
    food: Food;

    // 创建一个属性来存储蛇的移动方向 （也就是按键的方向）
    direction: string = '';
    // 创建一个属性用来记录游戏是否结束
    isLive = true;

    constructor(){
        this.snake = new Snake();
        this.scorePanel = new ScorePanel();
        this.food = new Food();

        this.init();
    }

    // 游戏初始化方法
    init(){
        // 绑定键盘按键按下的事件
        document.addEventListener('keydown',this.keydownHandler.bind(this))
        // 调用run方法，使蛇移动
        this.run();
    }

    /* 
    ArrowUp Up
    ArrowDown Down
    ArrowLeft Left
    ArrowRight Right
    */

    // 创建一个键盘按下的相应函数
    keydownHandler(event: KeyboardEvent){
        //需要检查event.key的值事发后合法（用户是否按了正确的方向键）
        //修改direction属性
        this.direction = event.key;
    }
    
    // 创建一个控制蛇一定的方法
    run(){
        /* 
        根据方向(this.direction)来使蛇的位置改变
        向上 top减少
        向下 top增加
        向左 left减少
        向右 left向右
        */   

        //获取蛇现在的坐标
        let X = this.snake.X;
        let Y = this.snake.Y;

        // 根据按键方向来修改X和Y的值
        switch(this.direction){
            case 'ArrowUp':
            case 'Up':
                Y -= 10;
                break;
            case 'ArrowDown':
            case 'Down':
                Y += 10;
                break;
            case 'ArrowLeft':
            case 'Left':
                X -= 10;
                break;
            case 'ArrowRight':
            case 'Right':
                X += 10;
                break;
        }

        // 检查蛇是否吃到了食物
        this.checkEat(X,Y);

        try {
            //修改蛇的X和Y
        this.snake.X = X;
        this.snake.Y = Y;
        } catch (error) {
            alert(error.message);
            this.isLive = false;
        }
   
        // 开启一个定时调用
        this.isLive && setTimeout(this.run.bind(this),300 - (this.scorePanel.level - 1) * 30);
    }

    // 定义一个方法，用来检查蛇是否吃到食物1
    checkEat(X:number,Y:number){
        if (X=== this.food.X && Y=== this.food.Y){
            // 食物的位置要进行充值
            this.food.change();
            // 分数增加
            this.scorePanel.addScore();
            // 蛇要增加一节
            this.snake.addBody();
        }
    }
}

export default GameControl;