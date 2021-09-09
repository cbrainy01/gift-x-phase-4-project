# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create(username: "mike", password: "apple", password_confirmation: "apple", name: "Michael Scott")
user2 = User.create(username: "sam", password: "apple", password_confirmation: "apple", name: "Samuel Jackson")
user3 = User.create(username: "tim", password: "apple", password_confirmation: "apple", name: "Timothey Smith")