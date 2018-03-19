import React from 'react';
import PropTypes from 'proptypes';
import { Popup, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class ViewCategory extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            category_name: props.category.category_name,
            category_description: props.category.category_description
        }
    }
    render(){
        return  <Popup
                    trigger={<Button><i className="fas fa-exclamation-circle"/></Button>}
                    header={this.state.category_name}
                    content={this.state.category_description}
                 />
    }
}

ViewCategory.propTypes = {
    category: PropTypes.instanceOf(Object).isRequired
}
export default ViewCategory;
