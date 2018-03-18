import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => (
  <div className="ch-home">
            <div className="ch-categories">
                <div className="intro">
                    <h2> my Categories</h2>
                    <div className="add">
                        <Link to="/">ADD</Link>
                    </div>
                </div>
                <div className="categories">
                    <div className="category-item">
                        <h2>Breakfast</h2>

                        <div className="actions">
                            <i className="fas fa-exclamation-circle"/>
                            <i className="fas fa-edit"/>
                            <i className="fas fa-trash-alt"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ch-recipes">
                <div className="recipes">

                    <div className="recipe">
                        <div className="meta">
                            <p>Breakfast</p>
                        </div>

                        <h2>Recipe Item</h2>

                        <div className="actions">
                            <i className="fas fa-exclamation-circle"/>
                            <i className="fas fa-edit"/>
                            <i className="fas fa-trash-alt"/>
                        </div>
                    </div>

                    <div className="recipe">
                        <div className="meta">
                            <p>Breakfast</p>
                        </div>

                        <h2>Recipe Item</h2>

                        <div className="actions">
                            <i className="fas fa-exclamation-circle"/>
                            <i className="fas fa-edit"/>
                            <i className="fas fa-trash-alt"/>
                        </div>
                    </div>

                    <div className="recipe">
                        <div className="meta">
                            <p>Breakfast</p>
                        </div>

                        <h2>Recipe Item</h2>

                        <div className="actions">
                            <i className="fas fa-exclamation-circle"/>
                            <i className="fas fa-edit"/>
                            <i className="fas fa-trash-alt"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>

);
export default Dashboard;
