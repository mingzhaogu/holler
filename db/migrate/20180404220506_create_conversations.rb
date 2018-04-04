class CreateConversations < ActiveRecord::Migration[5.1]
  def change
    create_table :conversations do |t|
      t.string :chat_name

      t.timestamps
    end
  end
end
