class Track < ActiveRecord::Base
has_many :songitems 
has_many :playlists, through: :songitems

end