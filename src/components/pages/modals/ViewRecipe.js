import React from 'react';
import PropTypes from 'proptypes';
import { Button, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

// View a single Recipe
export class ViewRecipe extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    
    render(){
        return (
            <Modal trigger={<Button><i className="fas fa-exclamation-circle"/></Button>}>
                <Modal.Header className="modalheader">View Recipe</Modal.Header>
                <Modal.Content image>
                    <Modal.Description>
                        <div className="view-recipe">
                            <div className="title"><h2>{ this.props.recipe.title }</h2></div>
                            <div className="content">
                                <p className="ingredients"><span>ingredients: </span>{ this.props.recipe.ingredients } </p>
                                <p className="steps">
                                    <span>procedure: </span>
                                    { this.props.recipe.steps }
                                </p>
                            </div>
                            
                        </div>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }

}

ViewRecipe.propTypes = {
    // map recipe state to props
    recipe: PropTypes.instanceOf(Object).isRequired
}

export default ViewRecipe;
