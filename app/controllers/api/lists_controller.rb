class Api::ListsController < ApplicationController

  def create
    @movie = Movie.find(params["movie"][:id])
    current_user.movies << @movie
  end

  def index
    @list = current_user.movies
  end

  def destroy
    @list = current_user.lists.find_by(movie_id: params[:id])
    @list.destroy
  end

  private

  def watch_list_params
    params.require(:watch_list).permit(:user_id, :movie_id)
  end

end