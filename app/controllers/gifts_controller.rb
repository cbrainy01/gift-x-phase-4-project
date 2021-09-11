class GiftsController < ApplicationController

    def show
        gift = Gift.find(params[:id])
        render json: gift, status: 200
    end
    
    def index
        gifts = Gift.all 
        render json: gifts, status: 200
    end

    def create
        gift = Gift.create!(gift_params)
        render json: gift, status: 201
    end

    def update
        gift = Gift.find(params[:id])
        gift.update!(gift_params)
        render json: gift, status: 200
    end

    def destroy
        gift = Gift.find(params[:id])
        gift.destroy 
        render json: { message: "sucessfully deleted"}
        # head :no_content
    end

    private

    def gift_params
        params.permit(:name, :date, :rating, :fulfilled, :incoming)
    end

end
