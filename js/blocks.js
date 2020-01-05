
export { Block };

class Block {
    currentPosition;
    blockType;

    constructor(){
        this.blockType = Math.floor(Math.random()*7+1);
        this.currentPosition = this.blockTypes[this.blockType]["pattern"];
        }

    blockTypes = [
        null,
        {"name": "iBlock", "pattern": [[0,4],[1,4],[2,4],[3,4]]},
        {"name": "rlBlock", "pattern": [[0,4],[1,4],[2,4],[2,5]]},
        {"name": "llBlock", "pattern": [[0,4],[1,4],[2,4],[2,3]]},
        {"name": "sqBlock", "pattern": [[0,4],[0,5],[1,4],[1,5]]},
        {"name": "rsBlock", "pattern": [[0,4],[1,4],[1,5],[2,5]]},
        {"name": "lsBlock", "pattern": [[0,5],[1,5],[1,4],[2,4]]},
        {"name": "tBlock", "pattern": [[0,5],[1,5],[2,5],[1,6]]},
    ]

    getBlockPosition(){
        let newPosition = []
        this.currentPosition.forEach((row, i)=>{
            newPosition.push([])
            row.forEach((col, j)=>{
                newPosition[i].push(col)
            })
        })
        return newPosition;
    }

    setCurrentPosition(newPosition) {            
        this.currentPosition.forEach((row, i)=>{
            row.forEach((col, j)=>{
                this.currentPosition[i][j] = newPosition[i][j]
            })
        })
    }

    getBlockType(){
        let bt = this.blockType;
        return bt;
    }

    rotateBlock(){
        let newPosition;
        let cp = this.currentPosition
        switch(this.blockType){
            case 1:
                if(cp[0][1] == cp[1][1]){
                    newPosition = [[cp[2][0],cp[2][1]-2], [cp[2][0],cp[2][1]-1], [cp[2][0],cp[2][1]], [cp[2][0],cp[2][1]+1]];
                }
                else {
                    newPosition = [[cp[2][0]-2,cp[2][1]], [cp[2][0]-1,cp[2][1]], [cp[2][0],cp[2][1]], [cp[2][0]+1,cp[2][1]]];
                }
                break;
            case 2:
                if(cp[0][0] < cp[1][0]){
                    newPosition = [[cp[1][0],cp[1][1]+1], [cp[1][0],cp[1][1]], [cp[1][0],cp[1][1]-1], [cp[1][0]+1,cp[1][1]-1]];
                }
                else if(cp[0][1] > cp[1][1]){
                    newPosition = [[cp[1][0]+1,cp[1][1]], [cp[1][0],cp[1][1]], [cp[1][0]-1,cp[1][1]], [cp[1][0]-1,cp[1][1]-1]];
                }
                else if(cp[0][0] > cp[1][0]){
                    newPosition = [[cp[1][0],cp[1][1]-1], [cp[1][0],cp[1][1]], [cp[1][0],cp[1][1]+1], [cp[1][0]-1,cp[1][1]+1]];
                }
                else {
                    newPosition = [[cp[1][0]-1,cp[1][1]], [cp[1][0],cp[1][1]], [cp[1][0]+1,cp[1][1]], [cp[1][0]+1,cp[1][1]+1]];
                }
                break;
            case 3:
                if(cp[0][0] < cp[1][0]){
                    newPosition = [[cp[1][0],cp[1][1]+1], [cp[1][0],cp[1][1]], [cp[1][0],cp[1][1]-1], [cp[1][0]-1,cp[1][1]-1]];
                }
                else if(cp[0][1] > cp[1][1]){
                    newPosition = [[cp[1][0]+1,cp[1][1]], [cp[1][0],cp[1][1]], [cp[1][0]-1,cp[1][1]], [cp[1][0]-1,cp[1][1]+1]];
                }
                else if(cp[0][0] > cp[1][0]){
                    newPosition = [[cp[1][0],cp[1][1]-1], [cp[1][0],cp[1][1]], [cp[1][0],cp[1][1]+1], [cp[1][0]+1,cp[1][1]+1]];
                }
                else {
                    newPosition = [[cp[1][0]-1,cp[1][1]], [cp[1][0],cp[1][1]], [cp[1][0]+1,cp[1][1]], [cp[1][0]+1,cp[1][1]-1]];
                }
                break;
            case 4:
                newPosition = [[cp[0][0],cp[0][1]], [cp[1][0],cp[1][1]], [cp[2][0],cp[2][1]], [cp[3][0],cp[3][1]]];
                break;
            case 5:
                if(cp[0][1] == cp[1][1]){
                    newPosition = [[cp[1][0],cp[1][1]+1], [cp[1][0],cp[1][1]], [cp[1][0]+1,cp[1][1]], [cp[1][0]+1,cp[1][1]-1]];
                }
                else {
                    newPosition = [[cp[1][0]-1,cp[1][1]], [cp[1][0],cp[1][1]], [cp[1][0],cp[1][1]+1], [cp[1][0]+1,cp[1][1]+1]];
                }
                break;
            case 6:
                if(cp[0][1] == cp[1][1]){
                    newPosition = [[cp[1][0],cp[1][1]-1], [cp[1][0],cp[1][1]], [cp[1][0]+1,cp[1][1]], [cp[1][0]+1,cp[1][1]+1]];
                }
                else {
                    newPosition = [[cp[1][0]-1,cp[1][1]], [cp[1][0],cp[1][1]], [cp[1][0],cp[1][1]-1], [cp[1][0]+1,cp[1][1]-1]];
                }
                break;
            case 7:
                if(cp[1][0] < cp[3][0]){
                    newPosition = [[cp[1][0]-1,cp[1][1]], [cp[1][0],cp[1][1]], [cp[1][0]+1,cp[1][1]], [cp[1][0],cp[1][1]-1]];
                }
                else if(cp[1][1] > cp[3][1]){
                    newPosition = [[cp[1][0],cp[1][1]-1], [cp[1][0],cp[1][1]], [cp[1][0],cp[1][1]+1], [cp[1][0]-1,cp[1][1]]];
                }
                else if(cp[1][0] > cp[3][0]){
                    newPosition = [[cp[1][0]+1,cp[1][1]], [cp[1][0],cp[1][1]], [cp[1][0]-1,cp[1][1]], [cp[1][0],cp[1][1]+1]];
                }
                else {
                    newPosition = [[cp[1][0],cp[1][1]-1], [cp[1][0],cp[1][1]], [cp[1][0],cp[1][1]+1], [cp[1][0]+1,cp[1][1]]];
                }
                break;
            }
            return newPosition;
    }

    move(direction){
        let newPosition = []
        this.currentPosition.forEach((row, i)=>{
            newPosition.push([])
            row.forEach((col, j)=>{
                newPosition[i].push(col)
            })
        })

        for(let i = 0; i < this.currentPosition.length; i++){
                newPosition[i][1] += direction;
            }

        return newPosition;
    }

    dropBlock() {
        let newPosition = []
        this.currentPosition.forEach((row, i)=>{
            newPosition.push([])
            row.forEach((col, j)=>{
                newPosition[i].push(col)
            })
        })

        for(let i = 0; i < this.currentPosition.length; i++){
                newPosition[i][0] += 1;
            }

        return newPosition;
    }



}