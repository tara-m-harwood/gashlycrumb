class AddDangerAndTypeToTinies < ActiveRecord::Migration[6.1]
  def change
    add_column :tinies, :danger, :string
    add_column :tinies, :category, :string
  end
end
