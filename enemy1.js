class Enemy1{
    constructor(x,y,w,h){
        this.enemy=createSprite(x,y,w,h)
        this.enemy.shapeColor = rgb(Math.round(random(0,255)),Math.round(random(0,255)),Math.round(random(0,255)))
        this.hitbox1=createSprite(x,y-h/2+5,w,10)
        this.hitbox1.shapeColor = "blue"
        this.hitbox2=createSprite(x,y+5,w,h-10)
        this.hitbox2.shapeColor = "red"
        this.hitbox1.visible = false
        this.hitbox2.visible = false
    }
    exist(){
        this.enemy.velocityY += 1.666666666666666666666666
        this.enemy.collide(ground)
        if(mario.isTouching(this.hitbox1)){
            this.enemy.destroy()
            this.hitbox1.destroy()
            this.hitbox2.destroy()
        }
        if(mario.isTouching(this.hitbox2)){
            mario.destroy()
        }
        this.hitbox1.x = this.enemy.x
        this.hitbox2.x = this.enemy.x
        if(mario.x > this.enemy.x){
            this.enemy.velocityX = 5
        }
        if(mario.x < this.enemy.x){
            this.enemy.velocityX = -5
        }
        if(this.enemy.y >= 350 && (mario.y+20) < this.enemy.y){
            this.enemy.velocityY = -15
        }
    }
}