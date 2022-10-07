class Playlist < ActiveRecord::Base

  has_many :songitems
  has_many :tracks, through: :songitems

end