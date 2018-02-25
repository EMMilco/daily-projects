class CreateGoals < ActiveRecord::Migration[5.1]
  def change
    create_table :goals do |t|
      t.string :name
      t.integer :user_id
      t.string :status
      t.boolean :public

      t.timestamps
    end
  end
end
