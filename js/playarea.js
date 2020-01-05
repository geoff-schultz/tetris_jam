export {PlayArea};

class PlayArea {
    playAreaArray = [];

    constructor(){
        this.buildPlayArea();
        this.renderPlayArea();
    };

    buildPlayArea(){
        this.playAreaArray = [];
        for(let i = 0; i < 20; i++){
            this.playAreaArray.push([])
            $("#playarea").append(`<div class=row>`)
            for(let j = 0; j < 10; j++){
                this.playAreaArray[i].push(0)
                $("#playarea").append(`<div class="square block0">&nbsp;</div>`)
            }
            $("#playarea").append(`</div>`)
        }
    
    }

    renderPlayArea(){
        $("#playarea").html("")
        this.playAreaArray.forEach((row, rInd)=>{
            $("#playarea").append(`<div class=row>`)
            row.forEach((col, cInd)=>{
                $("#playarea").append(`<div class="square block${col}">&nbsp;</div>`)
            })
            $("#playarea").append(`</div>`)
        })
    }

    checkFullRows(){
        let removedRowsCount = 0;
        this.playAreaArray.forEach((row, i)=>{
            if(row.find((b)=> b == 0) == undefined){
                this.playAreaArray.splice(i,1)
                this.playAreaArray.unshift([[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]])
                removedRowsCount++;
            }
        })
        return removedRowsCount;
    }

    addBlockToPlayArea(blockPosition, blockType) {
        blockPosition.forEach((b)=>{
            this.playAreaArray[b[0]][b[1]] = blockType;
        })
    }

    removeABlock(oldPosition){
        for(let i = 0; i < oldPosition.length; i++){
            this.playAreaArray[oldPosition[i][0]][oldPosition[i][1]] = 0;
        }
    }

    checkNewPosition(curPosition, newPosition, blockType) {
        let oldPosition = []
        curPosition.forEach((row, i)=>{
            oldPosition.push([])
            row.forEach((col, j)=>{
                oldPosition[i].push(col)
            })
        })

        for(let i = 0; i < curPosition.length; i++){
            this.playAreaArray[oldPosition[i][0]][oldPosition[i][1]] = 0;
            if(newPosition[i][0] > 19 || newPosition[i][0] < 0){
                this.addBlockToPlayArea(curPosition, blockType)
                return false;
            }
        }

        for(let i = 0; i < newPosition.length; i++){
            if(this.playAreaArray[newPosition[i][0]][newPosition[i][1]] !== 0){
                this.addBlockToPlayArea(curPosition, blockType)
                return false;
            }
        }
        return true;
    }

    blockSpawnClear(spawnPosition){
        for(let i = 0; i < spawnPosition.length; i++){
            if(this.playAreaArray[spawnPosition[i][0]][spawnPosition[i][1]] != 0){
            return false;
            }
        }
        return true;
    }

}