let urlGloable = '192.168.43.15'

function changeUseful (url) {
  let temp = 'https://' + urlGloable + url.slice(16)
  alert(temp)
  return temp
}

export {
  changeUseful
}
