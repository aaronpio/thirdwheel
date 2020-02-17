class User < ApplicationRecord
  belongs_to :gender
  has_many :looking_for
end
