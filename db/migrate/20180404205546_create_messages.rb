class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.integer :sender_id, null: false
      t.integer :conversation_id, null: false
      t.text :body, null: false
      t.string :type, null: false, default: 'text'

      t.timestamps

      t.index :sender_id
      t.index :conversation_id
    end
  end
end
