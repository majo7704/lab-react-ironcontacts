import React from 'react'


function Contact(props) {
  return (
        <tr class="contact-table">
          <td><img src={props.pictureUrl} width="150" height="200" alt="" /></td>
          <td>{props.name}</td>
          <td>{props.popularity}</td>
          {/* <input onChange={props.changeEvent} value={props.children}/>  */}
          <button onClick={() => { props.remove(props.index) }}>Remove</button>
      
        </tr>
  )
}

export default Contact;