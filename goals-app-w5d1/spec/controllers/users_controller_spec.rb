require 'rails_helper'

RSpec.describe UsersController, type: :controller do

  describe "GET #new" do
    it "returns http success" do
      get :new
      expect(response).to have_http_status(:success)
    end
    
  end

  describe "GET #create" do
        
    it "should save user to database" do 
      get :create, params: {user: {username: 'mystring', password: 'starwars'}}
      expect(User.last.username).to eq("mystring")
    end
    
    it "should render new template if fails to create user" do 
      get :create, params: {user: {username: 'mystring', password: ''}}
      expect(response).to render_template :new
    end
    
    it "should flash errors if fails to create user" do
      get :create, params: {user: {username: 'mystring', password: ''}}
      expect(flash[:errors]).not_to be_nil
    end
    
    it "should ensure new user has session_token" do
      get :create, params: {user: {username: 'mystring', password: 'starwars'}}
      expect(User.last.session_token).not_to be_nil
    end
  end

end
