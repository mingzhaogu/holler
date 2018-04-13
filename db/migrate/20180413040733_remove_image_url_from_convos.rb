class RemoveImageUrlFromConvos < ActiveRecord::Migration[5.1]
  def change
    remove_column :conversations, :image_url, :string
  end
end
