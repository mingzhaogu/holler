class AddConversationImageToConversations < ActiveRecord::Migration[5.1]
  def change
    add_column :conversations, :image_url, :string
  end
end
