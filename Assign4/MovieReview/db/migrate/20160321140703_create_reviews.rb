class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.string :movietitle
      t.string :year
      t.string :rating
      t.text :description

      t.timestamps null: false
    end
  end
end
