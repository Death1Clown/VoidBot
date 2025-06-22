window-password {"admin1access"}
window-function {"logadminaccess"}
function logadminaccess {
  _set admin-access = client-token + timelaps
}
