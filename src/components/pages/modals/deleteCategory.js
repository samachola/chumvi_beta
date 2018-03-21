import React from 'react';
import PropTypes from 'proptypes';
import { connect } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { deleteCategoryRequest } from '../../../actions/auth';

export class DeleteCategory extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            categoryID: props.category.id,
            error: ''
        }
    }
    
    delete = (e) => {
        e.preventDefault();
        this.props.deleteCategoryRequest(this.state.categoryID)
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
                <Modal.Header className="modalheader">are you sure you want to delete the category {this.props.category.category_name} ..?</Modal.Header>
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

DeleteCategory.propTypes = {
    category: PropTypes.instanceOf(Object).isRequired,
    deleteCategoryRequest: PropTypes.func.isRequired
}

export default connect(null, { deleteCategoryRequest })(DeleteCategory);
