class ChangeTypeInMessagesToMessageType < ActiveRecord::Migration[5.1]
  def change
    rename_column :messages, :type, :message_type
  end
end
