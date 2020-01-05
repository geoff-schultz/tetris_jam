import {PlayArea} from './playarea.js'
import {Block} from './blocks.js'

let aPlayArea = new PlayArea();
let aBlock = new Block();
let runtime;

function gameOver(){
    clearInterval(runtime);
}

function gameLoop(){
    if(aPlayArea.checkNewPosition(aBlock.getBlockPosition(), aBlock.dropBlock(), aBlock.getBlockType())){
        aBlock.setCurrentPosition(aBlock.dropBlock())
        aPlayArea.removeABlock(aBlock.getBlockPosition())
        aPlayArea.addBlockToPlayArea(aBlock.getBlockPosition(), aBlock.getBlockType())
        aPlayArea.renderPlayArea()
    }
    else {
        if(aPlayArea.checkFullRows() > 0){
            console.log("score whoop");
        }
        aBlock = new Block();
        if(aPlayArea.blockSpawnClear(aBlock.getBlockPosition()) == true){
            aPlayArea.addBlockToPlayArea(aBlock.getBlockPosition(), aBlock.getBlockType());
            aPlayArea.renderPlayArea();
        }
        else{
            gameOver();
        }
    }

}

//function calls and runtime



$(document).ready(()=>{
    // let aPlayArea = new PlayArea();
    // let aBlock = new Block();
    aPlayArea.addBlockToPlayArea(aBlock.getBlockPosition(), aBlock.getBlockType());
    aPlayArea.renderPlayArea();
    runtime = setInterval(gameLoop, 200)
    document.addEventListener("keydown", function(event){
        switch(event.keyCode){
            case 32:
                if(aPlayArea.checkNewPosition(aBlock.getBlockPosition(), aBlock.rotateBlock(), aBlock.getBlockType())){
                    aBlock.setCurrentPosition(aBlock.rotateBlock())
                    aPlayArea.removeABlock(aBlock.getBlockPosition())
                    aPlayArea.addBlockToPlayArea(aBlock.getBlockPosition(), aBlock.getBlockType())
                    aPlayArea.renderPlayArea()
                }
                break;
            case 37:
                if(aPlayArea.checkNewPosition(aBlock.getBlockPosition(), aBlock.move(-1), aBlock.getBlockType())){
                    aBlock.setCurrentPosition(aBlock.move(-1))
                    aPlayArea.removeABlock(aBlock.getBlockPosition())
                    aPlayArea.addBlockToPlayArea(aBlock.getBlockPosition(), aBlock.getBlockType())
                    aPlayArea.renderPlayArea()
                }
                break;
            case 39:
                if(aPlayArea.checkNewPosition(aBlock.getBlockPosition(), aBlock.move(1), aBlock.getBlockType())){
                    aBlock.setCurrentPosition(aBlock.move(1))
                    aPlayArea.removeABlock(aBlock.getBlockPosition())
                    aPlayArea.addBlockToPlayArea(aBlock.getBlockPosition(), aBlock.getBlockType())
                    aPlayArea.renderPlayArea()
                }
                break;
            case 40:
                if(aPlayArea.checkNewPosition(aBlock.getBlockPosition(), aBlock.dropBlock(), aBlock.getBlockType())){
                    aBlock.setCurrentPosition(aBlock.dropBlock())
                    aPlayArea.removeABlock(aBlock.getBlockPosition())
                    aPlayArea.addBlockToPlayArea(aBlock.getBlockPosition(), aBlock.getBlockType())
                    aPlayArea.renderPlayArea()
                }
                else {
                    if(aPlayArea.checkFullRows() > 0){
                        console.log("score whoop");
                    }
                    aBlock = new Block();
                    if(aPlayArea.blockSpawnClear(aBlock.getBlockPosition()) == true){
                        aPlayArea.addBlockToPlayArea(aBlock.getBlockPosition(), aBlock.getBlockType());
                        aPlayArea.renderPlayArea();
                    }
                    else{
                        gameOver();
                    }
                }
                break;
        }

    });
    
})