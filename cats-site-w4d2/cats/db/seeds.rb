# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Cat.destroy_all
colors = ['black', 'yellow', 'gray', 'golden', 'flaming', 'purple']
sex = ['M', 'F']
name_parts = %w(ba rho ta ma ni pha ra bo sys nalli ums zy)
description_words = %w(fuzzy cuddly purring flat_faced long_haired gentle violent indifferent large tiny)

120.times do
  Cat.create!(birth_date: "#{rand(1015)+1000}/0#{rand(9)+1}/#{rand(17)+10}", color: colors.sample,
  name: name_parts.sample(3).join, sex: sex.sample, description: description_words.sample(4).join(" "))
end

CatRentalRequest.destroy_all

12.times do
  start_year = rand(1015)+1000
  end_year = start_year + 3
  status = ['pending', 'approved', 'denied']

  CatRentalRequest.create!(cat_id: Cat.all.sample.id, start_date: "#{start_year}/0#{rand(9)+1}/#{rand(17)+10}",
  end_date: "#{end_year}/0#{rand(9)+1}/#{rand(17)+10}", status: status.sample)

end
