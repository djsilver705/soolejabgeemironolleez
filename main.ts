scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    scaling.scaleByPixels(a, 50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    scaling.scaleByPixels(b, 50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    scaling.scaleByPixels(c, 50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    scaling.scaleByPixels(d, 50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.crowd9, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.play(music.createSoundEffect(WaveShape.Square, 1183, 1094, 235, 205, 506, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
    game.gameOver(false)
})
let d: Sprite = null
let c: Sprite = null
let b: Sprite = null
let a: Sprite = null
let mySprite = sprites.create(assets.image`myImage1`, SpriteKind.Player)
mySprite.setPosition(8, 11)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level`)
scene.cameraFollowSprite(mySprite)
a = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
b = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)
c = sprites.create(assets.image`myImage2`, SpriteKind.Enemy)
d = sprites.create(assets.image`myImage3`, SpriteKind.Enemy)
a.setPosition(6, 90)
b.setPosition(6, 90)
c.setPosition(6, 90)
d.setPosition(6, 90)
a.follow(mySprite, 50)
pause(100)
b.follow(mySprite, 50)
pause(100)
c.follow(mySprite, 50)
pause(100)
d.follow(mySprite, 50)
