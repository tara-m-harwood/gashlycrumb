class TiniesController < ApplicationController
    def index
        @tinies = Tiny.all
        render json: @tinies
    end
    
    def show
        @tiny = Tiny.find_by(id: params[:id])
        render json: @tiny
    end

    def create
        @tiny = Tiny.create(letter: params[:letter],
                            name: params[:name],
                            fate: params[:fate],
                            image: params[:image])
        render json: @tiny
    end
    
    def update
        @tiny = Tiny.find_by(id: params[:id])
        @tiny.update(letter: params[:letter],
                     name: params[:name],
                     fate: params[:fate],
                     image: params[:image])
        render json: @tiny
    end
    
    def destroy
        @tiny = Tiny.find_by(id: params[:id])
        @tiny.destroy
        render json: @tiny
    end

    def random
        console.log("something")
    end
    
end
