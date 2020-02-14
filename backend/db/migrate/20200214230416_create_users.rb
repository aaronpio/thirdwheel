class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :email
      t.string :name
      t.string :password
      t.integer :age
      t.integer :points
      t.text :bio
      t.string :city
      t.references :gender, null: false, foreign_key: true
      t.string :image_url
      t.boolean :is_looking

      t.timestamps
    end
  end
end
