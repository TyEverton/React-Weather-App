import React, {Component, Fragment} from "react"

import './index.css'

class AutoComplete extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: '',
    }
  }
  onChange = (event) => {
    const { suggestions } = this.props
    const userInput = event.currentTarget.value

    const filteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1,
    )
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: event.currentTarget.value,
    })
  }
  onClick = (event) => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: event.currentTarget.innerText
    })
  }
}
