import React, {PropTypes, Component} from 'react'

class CountdownForm extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <form className='countdown-form' onSubmit={(e) => this.onSubmitSec(e)}>
        <input type="text" placeholder="輸入總秒數" ref="secField"/>
        <button className="button expanded">開始倒數</button>
      </form>
    )
  }

  onSubmitSec(e) {
    e.preventDefault()
    const setTotalSec = this.props.setTotalSec
    const setCountStatus = this.props.setCountStatus
    const inputField = this.refs.secField.value

    if (inputField.length > 0 && inputField.match(/^[0-9]*$/) ){
      const totalSec = Number(inputField)
      this.refs.secField.value = ""
      setTotalSec(totalSec)
      setCountStatus('counting')
    } else {
      this.refs.secField.focus()
    }

  }
}

// CountdownForm.propTypes = {
//   setTotalSec: PropTypes.func,
//   setCountStatus: PropTypes.func
// }

export default CountdownForm
