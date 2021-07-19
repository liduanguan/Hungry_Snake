// 引入样式
import './style/index.less'
import Food from './modules/Food'
import ScorePanel from './modules/ScorePanel'
import Snake from './modules/Snake'
import GameControl from './modules/GameControl'

const gameControl = new GameControl();

setInterval(()=>{
    
    console.log(gameControl.direction)
},1000)