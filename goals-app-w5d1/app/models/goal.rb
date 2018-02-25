class Goal < ApplicationRecord
  validates :name, :user, :status, :public, presence:true
  
  belongs_to :user
  
  has_many :comments
end
