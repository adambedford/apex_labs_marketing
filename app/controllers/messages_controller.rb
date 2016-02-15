class MessagesController < ApplicationController
  def new
    @message = Message.new
  end

  def create
    @message = Message.new(message_params)

    respond_to do |format|
      if @message.valid?
        ContactMailer.new_message(@message).deliver

        format.html { redirect_to contact_path, notice: 'Your messages has been sent.' }
        format.json { render json: @message }
      else
        format.html { render :new, alert: 'An error occurred while delivering this message.' }
        format.json { render json: @message.errors.full_messages, status: :unprocessable_entity }
      end
    end

  end

  private

  def message_params
    params.require(:message).permit(:name, :company, :email, :content)
  end
end