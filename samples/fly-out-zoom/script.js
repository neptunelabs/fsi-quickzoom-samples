function changeImage(buttonID) {
  let img
  let curImage = document.getElementById('image')
  switch (buttonID) {
    case '0':
      img =
        '{{&fsi.server}}/{{&fsi.context}}/server?type=image&source=images/samples/ssi/furniture/living-room-5979692.jpg&rect=0.14095,0.12033,0.54629,0.76519&width=640'
      break
    case '1':
      img =
        '{{&fsi.server}}/{{&fsi.context}}/server?type=image&source=images/samples/ssi/furniture/living-room-5979695.jpg&rect=0.14419,0,0.66719,1&width=640'
      break
    case '2':
      img =
        '{{&fsi.server}}/{{&fsi.context}}/server?type=image&source=images/samples/ssi/furniture/living-room-5979693.jpg&rect=0,0.24299,1,0.66706&width=640'
      break
    default:
      img =
        '{{&fsi.server}}/{{&fsi.context}}/server?type=image&source=images/samples/ssi/furniture/living-room-5979692.jpg&rect=0.14095,0.12033,0.54629,0.76519&width=640'
  }
  curImage.src = img
}
