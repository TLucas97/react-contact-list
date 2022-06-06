import React from 'react'

class AddContact extends React.Component {
  state = {
    name: '',
    email: '',
  }

  add = (e) => {
    e.preventDefault()
    if (this.state.name === '' && this.state.email === '') {
      alert('Preencha os campos')
      return
    }
    this.props.contactGetter({ name: this.state.name, email: this.state.email })
    setTimeout(() => {
      this.setState({ name: '', email: '' })
    }, 1000)
  }
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center align-items-center flex-column pt-3">
          <h5>Adicionar contato</h5>
          <form onSubmit={this.add}>
            <div className="d-flex justify-content-center align-items-center flex-column">
              <input
                value={this.state.name}
                type="text"
                placeholder="Nome"
                className="mt-3 mb-2"
                onChange={(e) => this.setState({ name: e.target.value })}
              />
              <input
                value={this.state.email}
                type="email"
                placeholder="Email"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
              <button className="btn btn-primary mt-3">Adicionar</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddContact
