class UsersController < ApplicationController

    def create
        user = User.create!(user_params)
        # render json accordingly with a 201 status code for invalid records will be handled in application controller
        render json: { user: user, message: "sign up successful" }, status: 201
    end

    private

    def user_params
        params.permit(:username, :name, :password, :password_confirmation, :image)
    end
    
end
