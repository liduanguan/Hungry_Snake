class ScorePanel{
    score = 0;
    level = 1;
    scoreEle : HTMLElement;
    levelEle : HTMLElement;

    //设置一个变量限制等级
    maxLevel: number;

    //设置一个变量表示多少分时升级
    upScore: number;

    constructor(maxLevel: number = 10, upScore: number = 10){
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;

    }

    //设置加分的方法
    addScore(){
        // 使分数增加
        this.scoreEle.innerHTML = ++this.score + '';
        // 判断分数是多少
        if ( this.score%this.upScore === 0)
            this.levelUp();
    }

    //提升等级的方法
    levelUp(){
        if( this.level < this.maxLevel )
            this.levelEle.innerHTML = ++this.level + '';
    }
}

export default ScorePanel;