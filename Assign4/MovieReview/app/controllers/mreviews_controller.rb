class MreviewsController < ApplicationController
	def index
	  @reviews = Review.find(params[:review_id])
	end
	def create
	  @review = Review.find(params[:review_id])
	  @mreview = @review.mreviews.create(mreview_params)
	  redirect_to review_path(@review)
	end
	def destroy
	  @review = Review.find(params[:review_id])
	  @mreview = @review.mreviews.find(params[:id])
	  @mreview.destroy
	  redirect_to review_path(@review)
	end
private
  def mreview_params
    params.require(:mreview).permit(:reviewer, :comment)
  end
end
