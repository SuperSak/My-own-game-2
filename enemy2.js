class Enemy2{
    constructor(x,y,w,h){
        this.enemy=createSprite(x,y,w,h)
        this.enemy.shapeColor = rgb(Math.round(random(0,255)),Math.round(random(0,255)),Math.round(random(0,255)))
        this.hitbox1=createSprite(x,y-h/2+5,w,10)
    }
    exist(){
        this.enemy.collide(ground)
        if(mario.isTouching(this.hitbox1)){
            this.enemy.destroy()
            this.hitbox1.destroy()
        }
        /**if(mario.isTouching(this.hitbox2)){
            mario.destroy()
        }**/
        this.hitbox1.x = this.enemy.x
        if(mario.x > this.enemy.x){
            this.enemy.velocityX = 5
        }
        if(mario.x < this.enemy.x){
            this.enemy.velocityX = -5
        }
        this.enemy.debug()
    }
    fire(){

    }
}