Meteor.startup(function () {
  smtp = {
    username: 'info@studycz.com',
    password: '4ye2jdanuahp',
    server:   'smtp.zoho.com',
    port: 465
  };

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});

Meteor.methods({
  sendEmail: function (email, text, name) {
    check([email, text, name], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    var fulltext = "Имя: " + name + "\n\nEmail: " + email +  "\n\nСообщение:\n" +text;
    var fulltextsend = "Здравствуйте, " + name +
      ".\n\nЭтим письмом я подтверждаю получение Вашего сообщения через контактную форму на сайте StudyCZ.com.\n"
    +"\nЯ ознакомлюсь с ним и постараюсь оперативно Вам ответить на указанный Вами email ("+ email+ ") в порядке очереди." +
        "\n\nЕсли у Вас уже сейчас появились дополнительные вопросы или пожелания, то Вы можете задать их, ответив на это письмо."
      + "\n\nСпасибо за то, что решили воспользоваться моими услугами.\nc уважением, " +
      "Алексеев Алексей StudyCZ.com\n\nТекст Вашего сообщения:\n\"" + text + "\"" ;
    var subj = `Сообщение со StudyCZ от ${name}`;

    //actual email sending method
    Email.send({
      to: 'info@studycz.com',
      from: 'info@studycz.com',
      subject: subj,
      text: fulltext
    });
    console.log("email is received");
    Email.send({
      to: email,
      from: 'info@studycz.com',
      subject: "Подтверждение получения сообщения со StudyCZ.com",
      text: fulltextsend
    });
    console.log("email is sent");
  }
});