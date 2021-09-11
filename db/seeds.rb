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

socks = Gift.create(name: "socks", date: '2021-06-15', rating: 4, fulfilled: true, incoming: true)
guitar = Gift.create(name: "guitar", date: '2021-11-23', rating: 8, fulfilled: false, incoming: false)

adam = Person.create(name: "adam", info: "Loves photography. Favorite brand: Nike")
willy = Person.create(name: "willy", info: "Loves swimming. Favorite brand: Adidas")
# puts valid_date?('2015-11-30')