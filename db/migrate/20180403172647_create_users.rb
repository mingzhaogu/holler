class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.string :image_url
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :first_name
      t.string :last_name

      t.timestamps

      t.index :username, unique: true
      t.index :session_token, unique: true
    end
  end
end
