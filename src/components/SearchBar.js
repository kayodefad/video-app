import React from 'react'

class SearchBar extends React.Component {
  state = { term: '' }

  onInputChange = e => {
    this.setState({ term: e.target.value })
  }

  onInputSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.onInputSubmit} className='ui form'>
          <div className='field'>
            <label>Video Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={this.onInputChange}
              placeholder="Search"
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
