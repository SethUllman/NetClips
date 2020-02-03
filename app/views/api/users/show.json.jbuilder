json.currentUser do
  json.email @user.email
  json.password @user.password
end