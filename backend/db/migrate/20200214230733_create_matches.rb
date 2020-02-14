class CreateMatches < ActiveRecord::Migration[6.0]
  def change
    create_table :matches do |t|
      t.integer :user1_rating
      t.integer :user2_rating

      t.timestamps
    end
  end
end
