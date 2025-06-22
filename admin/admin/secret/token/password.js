window-password {"noadminpasslog"}
window-function {"logadminaccess"}
function logadminaccess {
  _set admin-access = client-token + timelaps
}
