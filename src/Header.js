import React, {Component} from "react"


class Header extends Component {

    handleHeaderClicked(){
        alert(this.props.currUser)
    }

    render(){
        let {currUser} = this.props
        return (
             <div>Header {currUser}</div>
        )
    }
}
export default Header