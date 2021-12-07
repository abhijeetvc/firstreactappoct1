import { bindActionCreators } from 'redux'
import {addCounter} from './actions'
import {connect} from 'react-redux'

function AddCounter(props){

    const check=e=>{
        e.preventDefault()
        props.dispatch(addCounter())
    }

    return(
        <div>
            <button onClick={check}>Add</button>
        </div>
    )
}

function mapDispatchToProps(dispatch){

    return{
        actions: bindActionCreators(addCounter,dispatch)
    }
}

export default connect(mapDispatchToProps)(AddCounter)