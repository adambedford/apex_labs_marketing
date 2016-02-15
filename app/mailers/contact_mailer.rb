class ContactMailer < ActionMailer::Base
  default from: "mailer@apexlabs.io"
  default to: "info@apexlabs.io"

  def new_message(message)
    @message = message
    mail subject: "Contact Request from #{message.name}"
  end
end
