# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



ActiveRecord::Base.transaction do
  User.destroy_all
    user1 = User.create!(email: '1@1.com')
    user2 = User.create!(email: '2@2.com')
    user3 = User.create!(email: '3@3.com')
    user4 = User.create!(email: '4@4.com')
    user5 = User.create!(email: '5@5.com')
    user6 = User.create!(email: '6@6.com')

  ShortenedUrl.destroy_all
    shortened_url1 = ShortenedUrl.create!(long_url:'www.appacademy.com', user_id: user1.id)
    shortened_url2 = ShortenedUrl.create!(long_url:'www.hackreactor.com', user_id: user2.id)
    shortened_url3 = ShortenedUrl.create!(long_url:'www.fullstack.com', user_id: user3.id)
    shortened_url4 = ShortenedUrl.create!(long_url:'www.google.com', user_id: user4.id)
    shortened_url5 = ShortenedUrl.create!(long_url:'www.facebook.com', user_id: user4.id)
    shortened_url6 = ShortenedUrl.create!(long_url:'www.apple.com', user_id: user4.id)

  Visit.destroy_all
    visit1 = Visit.create!(user_id: user1.id, shortened_url_id: shortened_url1.id)
    visit1 = Visit.create!(user_id: user1.id, shortened_url_id: shortened_url1.id)
    visit1 = Visit.create!(user_id: user1.id, shortened_url_id: shortened_url2.id)
    visit1 = Visit.create!(user_id: user2.id, shortened_url_id: shortened_url1.id)
    visit1 = Visit.create!(user_id: user3.id, shortened_url_id: shortened_url1.id)

end
