class AddAttachmentAvatarToUsers < ActiveRecord::Migration[5.1]
  def self.up
    change_table :conversations do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :conversations, :image
  end
end
