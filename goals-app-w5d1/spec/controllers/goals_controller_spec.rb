require 'rails_helper'

RSpec.describe GoalsController, type: :controller do
  
  describe "GET #new" do
    it "returns http success" do
      get :new
      expect(response).to have_http_status(:success)
    end
  end
  
  
  describe "GET #create" do
        
    it "should save goal to database" do 
      get :create, params: {goal: {name: 'mystring', user_id: create(:user).id, status: 'in progress', public: false}}
      expect(Goal.last.name).to eq("mystring")
    end
    
    it "should render new template if fails to create goal" do 
      get :create, params: {goal: {name: 'mystring', user_id: create(:user).id, status: '', public: false}}
      expect(response).to render_template :new
    end
    
    it "should flash errors if fails to create goal" do
      get :create, params: {goal: {name: 'mystring', user_id: create(:user).id, status: '', public: false}}
      expect(flash[:errors]).not_to be_nil
    end
    
  end
end
