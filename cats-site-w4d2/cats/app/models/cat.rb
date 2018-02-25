class Cat < ApplicationRecord
  COLORS = ['black', 'yellow', 'gray', 'golden', 'flaming', 'purple']
  validates :color, presence: true, inclusion: { in: COLORS }
  validates :birth_date, presence: true
  validates :name, presence: true
  validates :sex, presence: true, inclusion: { in: ['M', 'F']}
  validates :description, presence: true

  def age
    ((Date.today - self.birth_date) / 365).floor
  end

  has_many :rental_requests,
  class_name: 'CatRentalRequest',
  foreign_key: :cat_id,
  primary_key: :id,
  dependent: :destroy

end
