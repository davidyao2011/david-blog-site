import React from "react"
import contactStyles from "./contactForm.module.scss"

class ContactForm extends React.Component {
  render() {
    return (
      <div class={contactStyles.formControl}>
        <form
          className={contactStyles.formStyle}
          action={this.props.action}
          method="post"
        >
          <label>Name</label>
          <input
            name="name"
            type="text"
            class={contactStyles.feedbackInput}
            placeholder="Name"
          />
          <label>Email</label>
          <input
            name="email"
            type="text"
            class={contactStyles.feedbackInput}
            placeholder="Email"
          />
          <label>Comments</label>
          <textarea
            name="text"
            class={contactStyles.feedbackInput}
            placeholder="Comment"
          ></textarea>
          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    )
  }
}

export default ContactForm
