import React from 'react';
import './ContactForm.css';

import {
    compose,
    withHandlers
} from 'recompose'

import axios from 'axios'

interface ContactFormProps {
    onSubmit: () => undefined
    isSubmitted?: boolean
    submitMessage?: string
}

const ContactForm = ({
    isSubmitted = false,
    submitMessage = 'Thanks!',
    onSubmit,
}: ContactFormProps) => (
    <div className={'ContactForm'} >
        <button onClick={onSubmit}>Contact Us!</button>
    </div>
)

// const handlers = withHandlers(() => {
//     submit: () => {
//         return undefined
//     },
// })

const handlers = withHandlers({
    onSubmit: props => (event: any) => {
      event.preventDefault()
      const url = 'https://raw.githubusercontent.com/triyuga/react-static-content/master/thankyou-2.md'
      axios.get(url).then(({data}) => {
        alert(data);
      })
    //   this.setState({ posts });
    //   props.setState({
        // this.setState({ posts });
    //   })
    }
})

export default compose<ContactFormProps, {}>(
    handlers   
)(ContactForm)