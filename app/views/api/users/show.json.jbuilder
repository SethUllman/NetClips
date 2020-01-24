# json.extract! @user
# , :id, :email, :@user.movies

json.currentUser do
  json.email @user.email
  json.password @user.password
  json.movies @user.movies
end