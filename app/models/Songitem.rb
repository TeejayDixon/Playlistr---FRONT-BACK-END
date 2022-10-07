class Songitem < ActiveRecord::Base
belongs_to :track
belongs_to :playlist
end