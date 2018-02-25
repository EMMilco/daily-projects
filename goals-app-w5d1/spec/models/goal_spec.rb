require 'rails_helper'

RSpec.describe Goal, type: :model do
  
  it {should validate_presence_of :name}
  it {should validate_presence_of :user}
  it {should validate_presence_of :status}
  it {should validate_presence_of :public}
  
  
  it {should belong_to(:user).class_name(User)}
  
  
end
