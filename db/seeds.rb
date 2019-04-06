require 'HTTParty'
require 'json'
u = User.create(email: "test@test.com", password: "password")
10.times do
  response = HTTParty.get("https://randomyoutube.net/api/getvid?api_token=YJ6uyPwGHjdrjJOyE8ItnG1YKeNxk9bmhDIB0iH3M72VGBSqMx14Aw6SLEmT")
  parsed = JSON.parse(response.body)
  v = Video.create(title: Faker::Book.title, duration: rand() + rand(5) , genre: Faker::Book.genre, description: Faker::Lorem.sentences(3), trailer: "https://www.youtube.com/watch?v=" + parsed["vid"], user_id: u.id)
end

puts " 1 user with 10 videos seeded"