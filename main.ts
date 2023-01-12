controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart = darts.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . d d . . . . . . . . . 
        . . . . . 8 d d . . . . . . . . 
        . . . . . e d d d . . . . . . . 
        . . . . . 8 d d d . . . . . . . 
        . . . . . e d d . . . . . . . . 
        . . . . . e d . . . . . . . . . 
        . . . . . e . . . . . . . . . . 
        . . . . . e . . . . . . . . . . 
        . . . . . e . . . . . . . . . . 
        . . . . . e . . . . . . . . . . 
        `, SpriteKind.Projectile, mySprite.x, mySprite.y)
    myDart.throwDart()
})
info.onLifeZero(function () {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite2.destroy()
    mySprite2.destroy(effects.fire, 100)
    mySprite2 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 9 9 f f f . . . . 
        . . . f f f 9 9 9 9 f f f . . . 
        . . f f f 9 9 9 9 9 9 f f f . . 
        . . f f 9 9 9 9 9 9 9 9 9 f . . 
        . . f 9 9 f f f f f f 9 9 f . . 
        . . f f f f 9 9 9 9 f f f f . . 
        . f f 9 f 9 f 9 9 f 9 f 9 f f . 
        . f 9 9 9 9 f 9 9 f 9 9 9 9 f . 
        . . f 9 9 9 9 9 9 9 9 9 9 f . . 
        . . . f 9 9 9 f f 9 9 9 f . . . 
        . . b b f b b 9 b b b f b b . . 
        . . 9 b f 9 b b b 9 b f b 9 . . 
        . . 9 9 f 9 9 b b b b f 9 9 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Enemy)
    mySprite2.setPosition(randint(0, 140), randint(0, 160))
    info.changeScoreBy(1)
    if (info.score() == 10) {
        tiles.setCurrentTilemap(tilemap`level2`)
    }
    if (info.score() == 20) {
        tiles.setCurrentTilemap(tilemap`level3`)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
let myDart: Dart = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
game.setDialogFrame(img`
    8888.....88....888....888...8888.
    867788..8768..86768..8678.887768.
    8767768.877788676768877788677678.
    87767768676778776778776786776778.
    .877876667767877677876778678778..
    .867786686766867676866766687768..
    ..8666868867688686886768686668...
    .88866688888888888888888866688...
    8777768866666666666666668886688..
    86767768666666666666666688677778.
    .8776678666666666666666686776768.
    ..87766866666666666666668766778..
    ..8888886666666666666666866778...
    .86776886666666666666666888888...
    8677776866666666666666668867768..
    87666688666666666666666686777768.
    86777768666666666666666688666678.
    .8677688666666666666666686777768.
    ..88888866666666666666668867768..
    ..8776686666666666666666888888...
    .87766786666666666666666866778...
    8676776866666666666666668766778..
    87777688666666666666666686776768.
    .8866888666666666666666688677778.
    ..88666888888888888888888666888..
    ..8666868676886868867688686668...
    .867786667668676768667686687768..
    .877876877678776778767766678778..
    87767768767787767787767686776778.
    876776887778867676887778.8677678.
    867788.8768..86768..8678..887768.
    8888...888....888....88.....8888.
    .................................
    `)
scene.setBackgroundColor(9)
game.showLongText("God of war 2", DialogLayout.Center)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f d d f f f . . . . 
    . . . f f f d d d 2 f f f . . . 
    . . f f f d d d d 2 d f f f . . 
    . . f f d d d d d 2 d d d f . . 
    . . f d d f f f f f d d d f . . 
    . . f f f f d d 2 d f f f f . . 
    . f f d f d f d 2 f d f d f f . 
    . f d d d d f d d f 2 d d d f . 
    . . f d d d d d d d d d d f . . 
    . . . f c b e f f e d 2 f . . . 
    . . d d f c e e e e 2 f 2 d . . 
    . . d d f b c d d 2 d f d 2 . . 
    . . d d f d b c d 2 d f d d . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
mySprite2 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 9 9 f f f . . . . 
    . . . f f f 9 9 9 9 f f f . . . 
    . . f f f 9 9 9 9 9 9 f f f . . 
    . . f f 9 9 9 9 9 9 9 9 9 f . . 
    . . f 9 9 f f f f f f 9 9 f . . 
    . . f f f f 9 9 9 9 f f f f . . 
    . f f 9 f 9 f 9 9 f 9 f 9 f f . 
    . f 9 9 9 9 f 9 9 f 9 9 9 9 f . 
    . . f 9 9 9 9 9 9 9 9 9 9 f . . 
    . . . f 9 9 9 f f 9 9 9 f . . . 
    . . b b f b b 9 b b b f b b . . 
    . . 9 b f 9 b b b 9 b f b 9 . . 
    . . 9 9 f 9 9 b b b b f 9 9 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Enemy)
info.setLife(5)
mySprite.setPosition(5, 15)
forever(function () {
    while (true) {
        pause(1000)
        mySprite2.x = mySprite2.x + 10
    }
})
forever(function () {
    mySprite2.setStayInScreen(true)
    mySprite2.setBounceOnWall(true)
})
