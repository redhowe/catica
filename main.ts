controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Furball = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . e e e c c c c e . . . . 
        . . . e d d d d d d d d e . . . 
        . . e b d d d d d b b b b c . . 
        . . f b d d d d d d d d d f . . 
        . . f b d d d d d d d d d f . . 
        . . f b d b b b b d d d d c . . 
        . . f b d d d d d d d d d c . . 
        . . f b d d d d d d d b b c . . 
        . . e b d d d d d d d d d e . . 
        . . e b d d d d d d d d d e . . 
        . . . c b b b b b b b b e . . . 
        . . . . c c f f f e e e . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SuperCat, 200, 0)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    music.magicWand.play()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    music.powerDown.play()
    info.changeLifeBy(-1)
})
let DogBot: Sprite = null
let Furball: Sprite = null
let SuperCat: Sprite = null
SuperCat = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . e . . . 
    . . c c c . . . . e . 4 4 . . . 
    . c d d d c . . . e 4 5 e . . . 
    . c d d b b c . c 4 5 5 e c . . 
    . . c d d d c c 3 c c c c 3 c . 
    . . c c c c c c d d d d d d c . 
    . c b b b d d c d d d d d d d c 
    c b d d d d d d d d d d d d d c 
    c b d d d d d d 3 f d f f d f c 
    c b d d d d d d d d d d d d d c 
    c b d d d d d d d d d d d d d c 
    c b b d d d d d d d d d d d c . 
    c b c c c c c c c c c d d c . . 
    . c . . . . . . . . . c c . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
SuperCat.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(SuperCat, 0, 200)
game.onUpdateInterval(500, function () {
    DogBot = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . b b b . . . . b b b . . . . 
        . b b b b b . . b b b b b . . . 
        . b b c c b b b b c c b b . . . 
        . b c c b b b b b b c c b . . . 
        . . . b b b b b b b b . . . . . 
        . . . b 1 b b b b 1 b . . . . . 
        . . . b b b c c b b b . . . . . 
        . . . c b b b b b b 6 . . . b . 
        . . . . 5 6 5 6 5 6 c c . b b . 
        . . . . c b b b b b b c c b . . 
        . . . . b b b b b c b b . . . . 
        . . . . b . . . b . . b . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    DogBot.setVelocity(-100, 0)
    DogBot.setPosition(180, randint(0, 120))
})
