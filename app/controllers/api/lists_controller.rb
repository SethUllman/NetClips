class Api::ListsController < ApplicationController

  def create
    @movie = Movie.find(params["movie"][:id])
    current_user.movies << @movie
  end

  def index
    @list = current_user.movies
  end

  def destroy
    @movie = current_user.movies.find(params[:movie_id])
    current_user.movies - @movie
  end

  private

  def watch_list_params
    params.require(:watch_list).permit(:user_id, :movie_id)
  end

end