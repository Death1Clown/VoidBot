window-password {"admin1access"}
window-function {"logadminaccess"}
function logadminaccess {
  _set {"admin-access"} = {"client-token"} + {text:"-"} + {"timelaps-runpassword"}
}
function runpassword {
  if {"window-password"} {text:"admin1access"}
}
