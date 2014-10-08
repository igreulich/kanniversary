require 'rubygems'
require 'sinatra'
require 'haml'

get '/stylesheets/bootstrap-fix.css' do
  sass :bootstrap_fix
end

get '/stylesheets/application.css' do
  sass :application
end

get '/' do
  @title = 'Happy Kardashian!'
  haml :index
end

get '/hello' do
  "I love you, JBM!"
end
