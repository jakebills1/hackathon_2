source "https://rubygems.org"

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem "rails", "~> 5.2.3"
# Use postgresql as the database for Active Record
gem "pg", ">= 0.18", "< 2.0"
# Use Puma as the app server
gem "puma", "~> 3.11"
# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", ">= 1.1.0", require: false
# Adds user authentication
gem "devise_token_auth", "~> 1.0.0"

group :development, :test do
  # Call 'pry' anywhere in the code to stop execution and get a debugger console
  gem "pry"
  # Generates test data
  gem "faker", :git => "https://github.com/stympy/faker.git", :branch => "master"
end

group :development do
  gem "listen", ">= 3.0.5", "< 3.2"
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
end
