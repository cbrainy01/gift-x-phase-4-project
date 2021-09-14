class PeopleController < ApplicationController

    def show
        person = Person.find(params[:id])
        render json: person, status: 200
    end

    def index
        people = Person.all
        render json: people, status: 200
    end

    def create
        person = Person.create!(person_params)
        render json: person, status: 201
    end

    def update
        person = Person.find(params[:id])
        person.update!(person_params)
        render json: person, status: 200
    end

    def destroy
        person = Person.find(params[:id])
        person.destroy
        render json: { message: "sucessfully deletd" }
        # head :no_content 
    end

    private

    def person_params
        params.permit(:name, :image, :info, :user_id)
    end

end
