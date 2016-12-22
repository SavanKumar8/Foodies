
import React from 'react';

import SearchComponent from './SearchComponent.jsx';
import RestaurantBoxComponent from './RestaurantBoxComponent.jsx';


export default class HomeComponent extends React.Component{
constructor(){
super();
this.state={restaurants:[]};

this.setRestaurantAr=this.setRestaurantAr.bind(this);

}

setRestaurantAr(restAr) {
this.setState({restaurants:restAr});

}




render(){
var d=this.state.data;
var a=this.state.articles;
return(
<div>

<SearchComponent newsSource={this.setRestaurantAr.bind(this)}/>
<RestaurantBoxComponent  />


</div>

)
}

}
