import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    

    renderDish(dish) {
        if(dish != null) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle heading>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>

            )
        }
        else {
            return(
                <div></div>
            )
        }
    }
    renderComments(dish) {
        if(dish != null) {
            const comments = dish.comments.map((comment) =>{
                return(
                    <div key={comment.id} >
                        <li className="col-12 col-md-12">{comment.comment}</li>
                        <li className="col-12 col-md-12">-- {comment.author} , {comment.date}</li>
                    </div>
                )
            })
            return(
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments}
                    </ul>
                </div>
            );
        }
        else {
            return(
                <div></div>
            )
        }
    }

    render() { 
        return (
            <div className="row">
                <div className="col-12 col-md-5">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.selectedDish)}
                </div>
            </div>  
            
        );
    }
}
 
export default DishDetail;