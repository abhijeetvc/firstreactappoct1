
import {connect} from 'react-redux'

function Counter(props){
    console.log(props);
    return(
        <div>
            <p>{props.count}</p>
        </div>
    )
}

// mapStateToProps : map state to the props

function mapStateToProps(state){
    return{
        count:state.counterReducer
    }
}

export default connect(mapStateToProps)(Counter)

// Connect to store