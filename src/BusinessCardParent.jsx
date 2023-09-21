import { Component } from "react";

import BusinessCardDisplay from "./BusinessCarDisplay";
import BusinessCardForm from "./BusinessCardForm";

export default class BusinessCardParent extends Component {
    constructor(){
        super();
    
        this.state = {
            editMode: false,
            name: "Dirk",
            email: "hola@nnn.com"
        }
    
    }

    /**
	 * Description placeholder
	 *
	 * @param stateKeyId - String, should match a key in this.state for BusinessCardParent.
	 * @param newStateValue - String, should be the new value we want to set for the state key in BusinessCardParent.
	 */
    updateState = (stateKeyId, newStateValue) => {
        this.setState({
            [stateKeyId]: newStateValue
        })
    }


    render(){
        if (this.state.editMode){
            return(
                <BusinessCardForm  name={this.state.name} email={this.state.email} />
            )

        } else {
            return(
                <div>
                    <BusinessCardDisplay email={this.state.email}
                    name={this.state.name}
                    setParentState={this.updateState}
                    
                    />

                    
                </div>
            )
        }
    }
}



