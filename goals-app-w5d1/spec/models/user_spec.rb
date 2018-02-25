require 'rails_helper'

RSpec.describe User, type: :model do  
  
  it {should validate_presence_of :username}
  it {should validate_presence_of :password_digest}
  
  it {should validate_length_of(:password).is_at_least(6)}
  
  # it {should have_many(:comments).class_name(Comment)}
  it {should have_many(:goals).class_name(Goal)}
  
  
  describe "User::find_by_credentials" do
    before :each do
      create(:user)
    end
    it "should return user if it exists" do
      # debugger
      expect(User.find_by_credentials('MyString', 'starwars')).to be_instance_of(User)
    end
    it "should return nil if password is incorrect" do
      expect(User.find_by_credentials('MyString', '1')).to be_nil
    end
    
    it "should return nil if user doesn't exist" do
      expect(User.find_by_credentials('ghisrogrshbgyugsuygbkshuyvhg', '2')).to be_nil
    end
  end
end
