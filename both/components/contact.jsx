var {Textarea, Form, Fields, Field, Label, Input, Icon, } = Semantify;

ContactForm = forms.Form.extend({
  rowCssClass: 'field',
  name: forms.CharField({errorMessages: {required: 'Пожалуйста, введите свое имя',maxLength:"Имя не должно быть длиннее 50 символов"},label:"Имя",maxLength: 50}),
  email: forms.EmailField({errorMessages: {required: 'Пожалуйста, введите Email',invalid:"Неправильный формат Email"},label:"Email"}),
  question: forms.CharField({errorMessages: {required: 'Пожалуйста, введите текст сообщения'},label:"Сообщение",widget: forms.Textarea({attrs: {rows: 5}})})
});

Contact = React.createClass({
  getInitialState() {
    return {submitted: false, submiterror:false,submission:false,client:false}
  },
  componentDidMount() {
    this.setState({client: true})
  },

  /*propTypes: {
    onSignup: React.PropTypes.func.isRequired
  },*/

  _onSubmit: function(e) {
    e.preventDefault()

    var form = this.refs.contactForm.getForm()
    var isValid = form.validate();
    if (isValid) {
      var data = form.data;
      this.setState({submission: true});
      Meteor.call("sendEmail",data.email, data.question, data.name, (error,result) => {
        if(error) {
          this.setState({submiterror: true});
        } else {
          this.setState({submitted: true});
        }
        this.setState({submission: false});
      });

    }
  },
  writeMore() {
    this.setState({submitted: false});
  },
  renderForm() {

    return (
      <div>
        <form onSubmit={this._onSubmit}
              className={this.state.submission
                ? "ui loading form attached fluid segment"
                : "ui form bottom attached fluid segment"}
              noValidate={!this.state.client}>
          <forms.RenderForm form={ContactForm} ref="contactForm"/>
          {this.state.submission
            ? <button className="ui blue submit loading button margintop">Идет отправка...</button>
            : <button className="ui blue submit button margintop">Отправить</button>}
        </form>
    {this.state.submiterror?
      <div className="ui negative message">
        <div className="header">
          <i className="comment icon"></i> Сообщение не было отправлено
        </div>
        <p>Что-то пошло не так.</p>
        <p>Пожалуйста, проверьте правильность заполнения полей формы или напишите мне напрямую на email info@studycz.com</p>
      </div>
      :
      <div></div>
    }
      </div>)
  },
  render() {

  return (
      <div className="ui stackable two column grid">
        <div className="column">
          <div className="ui attached message">
            <div className="header">
              Контактная форма
            </div>
            <p>Через нее Вы можете заказать услугу или задать вопросы</p>
          </div>

          {this.state.submitted ?
            <div className="ui attached positive message">
              <div className="header">
                <i className="comment icon"></i> Сообщение успешно отправлено
              </div>
              <p>Спасибо за обращение. Я обязательно отвечу Вам в ближайшее время.</p>
              <p>с уважением, Алексей Алексеев</p>
            </div>
            :
            this.renderForm()}
          {this.state.submitted ?<div className="ui bottom attached fluid segment">
            <button onClick={this.writeMore} className="ui blue button">Написать еще</button>
          </div>:<div></div>}

          {/*
          <Form className="contact">
            <Field>
              <Label>Email</Label>
              <Input className="icon">
                <input placeholder="Ваш Email" type="text"/>
                <Icon className="user"/>
              </Input>
            </Field>
            <Field>
              <Label>Текст</Label>
              <textarea rows="5"></textarea>
            </Field>
          </Form>*/}
        </div>
        <div className="column">
            <h1>Контакты</h1>
          <p><strong>Телефоны:</strong></p>
          <p>Чехия: +420-608-891-556 <a className="ui green empty circular horizontal label"></a><br />
            Беларусь: +375-29-6969631 <a className="ui red empty circular horizontal label"></a></p>
          <p><strong>Viber:</strong> +420-773-941-675</p>
          <p><strong>email:</strong> info@studycz.com</p>
            <p>вконтакте: <a href="http://vk.com/studyczcom">группа</a> и
              <a href="http://vk.com/studyczcom"> мой профиль</a></p>
        </div>

      </div>
    );
  }
});