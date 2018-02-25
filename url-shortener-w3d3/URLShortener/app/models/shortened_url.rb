require 'securerandom'
class ShortenedUrl < ApplicationRecord
  validates :long_url, presence: true
  validates :short_url, uniqueness: true

  before_create { |url| url.short_url = ShortenedUrl.random_code }

  belongs_to :submitter,
    class_name: :User,
    foreign_key: :user_id,
    primary_key: :id

  has_many :visits,
    class_name: :Visit,
    foreign_key: :shortened_url_id,
    primary_key: :id

  has_many :visitors,
    Proc.new { distinct },
    through: :visits,
    source: :visitors

  def num_clicks
    self.visits.count
  end

  def num_uniques
    self.visitors.count
  end

  def num_recent_uniques
    self.visits.where("created_at = ?", 10.minutes.ago).distinct.count
  end


  def self.random_code
    while true
      code = SecureRandom.urlsafe_base64
      return code unless ShortenedUrl.exists?(short_url: code)
    end
  end

  # def self.from_long_url(user, long_url)
  #   # shortened_url = ShortenedUrl.new
  #   # shortened_url.long_url = long_url
  #   # shortened_url.short_url = ShortenedUrl.random_code
  #   # shortened_url.user = user
  #   # shortened_url.save
  #   ShortenedUrl.create!(
  #     long_url: long_url,
  #     short_url: ShortenedUrl.random_code,
  #     user: user
  #   )
  # end



end
