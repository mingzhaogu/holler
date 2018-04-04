class ChangeUserIndexToJoinsIndex < ActiveRecord::Migration[5.1]
  def change
    remove_index :conversations_users, :user_id
    add_index(:conversations_users, [:user_id, :conversation_id], unique: true)
  end
end
