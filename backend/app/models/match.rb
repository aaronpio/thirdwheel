class Match < ApplicationRecord
  belongs_to :user, class_name: "User", foreign_key: "matchmaker_id"
  belongs_to :user, class_name: "User", foreign_key: "user1_id"
  belongs_to :user, class_name: "User", foreign_key: "user2_id"
end
