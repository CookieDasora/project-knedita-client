export function isPwaInstalled() {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    //@ts-expect-error standalone does not exists in navigator types
    window.navigator.standalone === true
  )
}

export function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
}

export function showAlertIfMobile() {
  if (isMobileDevice() && !isPwaInstalled()) {
    return true
  }
  return false
}
