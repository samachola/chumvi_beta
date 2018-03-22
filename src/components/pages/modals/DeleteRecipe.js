import React from 'react';
import PropTypes from 'proptypes';
import { connect } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { deleteRecipeRequest } from '../../../actions/auth';

export class DeleteRecipe extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            recipeID: props.recipe.id,
            error: ''
        }
    }
    
    delete = (e) => {
        e.preventDefault();
        this.props.deleteRecipeRequest(this.state.recipeID)
                       .then(() => window.location.reload() )
                       .catch(err => this.setState({ error: err.response.data.message }));
    }
    cancel = (e) => {
        e.preventDefault();
        window.location.reload();
    };
    
    render(){
        return (
            <Modal trigger={<Button><i className="fas fa-trash-alt"/></Button>}>
                <Modal.Header className="modalheader">are you sure you want to delete {this.props.recipe.title} ..?</Modal.Header>
                <Modal.Content image>
                    <Modal.Description>
                        
                        <div className="err">
                            <p>{ this.state.error }</p>
                        </div>

                        <div className="cta">
                            <button onClick={ this.delete }>Yes</button>
                            <button onClick={ this.cancel }>No</button>
                        </div>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }

}

DeleteRecipe.propTypes = {
    recipe: PropTypes.instanceOf(Object).isRequired,
    deleteRecipeRequest: PropTypes.func.isRequired
}

export default connect(null, { deleteRecipeRequest })(DeleteRecipe);
