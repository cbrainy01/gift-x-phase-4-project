class SessionsController < ApplicationController

    skip_before_action :authorize, only: :create

    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            # byebug
            render json: user
        else
            render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end

    def destroy
        session[:user_id] = nil
        head :no_content
    end

end
