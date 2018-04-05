class UpdateConversationsUsers < ActiveRecord::Migration[5.1]
  def change
    drop_table :conversations_users

    create_table :conversations_users, id: false do |t|
      t.integer :conversation_id
      t.integer :user_id

      t.index :conversation_id, unique: true
      t.index([:user_id, :conversation_id], unique: true)
    end
  end
end
