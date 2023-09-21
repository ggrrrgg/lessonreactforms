import { Component } from "react";

export default class BusinessCardForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            name:this.props.name,
            email: this.props.email
        }
    }

    handleChangeInput = (event) => {
        this.props.setParentState(event.target.name, event.target.value);
    }

    render(){
        return(
            <form>
				{/* htmlFor instead of for for the JSX compiler */}
				<label htmlFor="nameInput" >Name:</label>
				<input type="text" name="nameInput" id="nameInput"
                value={this.props.name}
                onChange={this.handleChangeInput} />
			</form>
        )
    }
}