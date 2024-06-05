let ADMIN_PASSWORD = "admin";

export function ChangePassword(password) {
  ADMIN_PASSWORD = password;
}

export function getAdminPassword() {
  return ADMIN_PASSWORD;
}
