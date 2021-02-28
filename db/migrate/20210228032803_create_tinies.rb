class CreateTinies < ActiveRecord::Migration[6.1]
  def change
    create_table :tinies do |t|
      t.string :letter
      t.string :name
      t.string :fate
      t.string :image
    end
  end
end
