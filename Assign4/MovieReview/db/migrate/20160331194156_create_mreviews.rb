class CreateMreviews < ActiveRecord::Migration
  def change
    create_table :mreviews do |t|
      t.string :reviewer
      t.string :comment
      t.references :review, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
