class Tiny < ApplicationRecord

    def self.random(url_param)
        Tiny.all.sample(1)
    end
    
end    
