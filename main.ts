controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.setGameOverMessage(false, "You gave up. (2/4)")
    game.gameOver(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.setGameOverMessage(false, "You gave up. (2/4)")
    game.gameOver(false)
})
info.onCountdownEnd(function () {
    game.setGameOverMessage(true, "You kept going. (3/4)")
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    info.changeCountdownBy(15)
    mySprite.setImage(assets.image`myImage18`)
    mySprite.setKind(SpriteKind.Enemy)
})
info.onLifeZero(function () {
    sprites.destroy(mySprite)
    game.setGameOverMessage(false, "You couldn't do it. (1/4)")
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    info.changeLifeBy(randint(-1, 1))
    info.changeCountdownBy(randint(-20, 10))
    info.setScore(randint(1, 7500))
})
info.onScore(7500, function () {
    game.setGameOverMessage(true, "You found help. (4/4)")
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    info.changeCountdownBy(20)
    mySprite.setImage(assets.image`myImage18`)
    mySprite.setKind(SpriteKind.Enemy)
})
let Video_Games: Sprite = null
let mySprite: Sprite = null
let Evil_you = sprites.create(assets.image`myImage15`, SpriteKind.Enemy)
Evil_you.setPosition(137, 7)
mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
mySprite.setPosition(3, 109)
info.setLife(3)
scene.setBackgroundColor(9)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
Evil_you.sayText("YOU CAN'T DO IT", 4000, false)
Evil_you.follow(mySprite, 55)
info.startCountdown(90)
game.setGameOverScoringType(game.ScoringType.HighScore)
let Essay = sprites.createProjectileFromSide(assets.image`myImage14`, 50, 72)
Essay.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
Essay.setBounceOnWall(true)
Essay = sprites.createProjectileFromSide(assets.image`myImage14`, 24, 86)
Essay.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
Essay.setBounceOnWall(true)
Essay = sprites.createProjectileFromSide(assets.image`myImage14`, 84, 82)
Essay.setBounceOnWall(true)
Essay.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
game.onUpdateInterval(5000, function () {
    mySprite.setImage(assets.image`myImage17`)
    mySprite.setKind(SpriteKind.Player)
})
game.onUpdateInterval(5000, function () {
    Video_Games = sprites.create(assets.image`myImage4`, SpriteKind.Food)
    Video_Games.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
})
