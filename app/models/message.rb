class Message
  include ActiveModel::Model
  include ActiveModel::Conversion
  include ActiveModel::Validations

  attr_accessor :name, :company, :email, :content

  validates :name, presence: true
  validates :company, presence: true
  validates :email, presence: true, email: true
  validates :content, presence: true
end