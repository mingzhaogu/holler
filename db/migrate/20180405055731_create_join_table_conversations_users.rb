class CreateJoinTableConversationsUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :conversation_users do |t|
      t.integer :conversation_id
      t.integer :user_id

      t.index :conversation_id
      t.index([:user_id, :conversation_id], unique: true)
    end
  end
end
