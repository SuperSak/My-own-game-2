class Ground{
    constructor(x,y,w,h){
        this.ground=createSprite(x,y,w,h)
        this.ground.shapeColor = rgb(math.round(random(0,255)),math.round(random(0,255)),math.round(random(0,255)))
    }
}