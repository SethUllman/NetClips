class Api::ListsController < ApplicationController

  def create
    @movie = Movie.find(params["movie"][:id])
    current_user.movies << @movie
  end

  def index
    @list = current_user.movies
  end

  def destroy
    @movie = current_user.lists.find_by(movie_id: params[:id])
    @movie.destroy
    @list = current_user.movies
    render '/api/lists/index'
  end

  private

  def watch_list_params
    params.require(:watch_list).permit(:user_id, :movie_id)
  end

end