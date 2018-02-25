class CatRentalRequest < ApplicationRecord
  validates :cat_id, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true
  validates :status, presence: true, inclusion: { in: ['pending', 'approved', 'denied']}
  validate :does_not_overlap_approved_request

  belongs_to :cat,
  class_name: 'Cat',
  foreign_key: :cat_id,
  primary_key: :id

  def overlapping_requests
    CatRentalRequest
    .where(cat_id: self.cat_id)
    .where.not(id: self.id)
    .where.not("start_date > :end_date OR end_date < :start_date", start_date: self.start_date, end_date: self.end_date)
  end

  def overlapping_approved_requests
    overlapping_requests.where(status: 'approved')
  end

  def overlapping_pending_requests
    overlapping_requests.where(status: 'pending')
  end

  def does_not_overlap_approved_request
    if overlapping_approved_requests.exists? && self.status != 'denied'
      errors[:cat_request] << ['invalid request']
    end
  end

  def approve!
    if self.status == 'pending'
      CatRentalRequest.transaction do
        self.update(status: 'approved')
        self.overlapping_pending_requests.each do |request|
          request.deny!
        end
      end
    end
  end

  def deny!
    self.update(status: 'denied')
  end

end
