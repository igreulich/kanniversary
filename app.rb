require 'rubygems'
require 'sinatra'
require 'haml'

get '/' do
  @title = 'Happy Kardashian!'
  haml :index
end