class Video < ActiveRecord::Base

    attr_accessible :url

    belongs_to :model

    validates :url, presence: true

end
