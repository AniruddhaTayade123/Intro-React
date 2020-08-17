import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: [
                {
                  id: 0,
                  name:'Pizza',
                  image: 'assets/images/pizza.png',
                  category: 'mains',
                  label:'Hot',
                  price:'499',
                  description:'Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
               {
                  id: 1,
                  name:'Cutlet',
                  image: 'assets/images/cutlet.png',
                  category: 'appetizer',
                  label:'',
                  price:'99',
                  description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce.'                        },
                {
                  id: 2,
                  name:'Donut',
                  image: 'assets/images/donut.png',
                  category: 'dessert',
                  label:'New',
                  price:'99',
                  description:'A simple, plain donut soaked in sugar syrup.'                        },
               {
                  id: 3,
                  name:'Cheese Cake',
                  image: 'assets/images/cheesecake.png',
                  category: 'dessert',
                  label:'',
                  price:'299',
                  description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        }
               ],
        };
    }
    
    
    render() {
        const menu = this.state.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 mt-5">
                <Media tag="li">
                  <Media left middle>
                      <Media object src={dish.image} alt={dish.name} />
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>{dish.name}</Media>
                    <p>{dish.description}</p>
                  </Media>
                </Media>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
              <Media list>
                  {menu}
              </Media>
            </div>
          </div>
        );
    }
}

export default Menu;