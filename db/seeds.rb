# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Article.destroy_all
Comment.destroy_all
User.destroy_all

admin = User.create!(username: 'admin', email: 'admin@email.com', password: 'password')

puts "#{User.count} users created"

test1 = Article.create!(title: 'article 1', content: 'this is a test', user: admin)

puts "#{Article.count} articles created"
