import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterProducts, sortProducts } from '../actions/productActions';

class Filter extends Component {
    render() {
        return (
        <div className='row'>
            <div className='col-md-4'></div>
            {this.props.filteredProducts.length} products found.
            <div className='col-md-4'></div>
             <label>
                 Order by
                 <select className="form-control" value={this.props.sort}
                 onChange={(e) => this.props.sortProducts(this.props.filteredProducts, e.target.value)}>
                 <option value="">Select</option>
                 <option value="lowest">Lowest to Highest</option>
                 <option value="highest">Highest to Lowest</option>    
                 </select>
             </label>
            <div className='col-md-4'></div>
            <label>
                 Filter Size
                <select className="form-control" value={this.props.size}
                 onChange={(e) => this.props.filterProducts(this.props.products, e.target.value)}>
                 <option value="">ALL</option>
                 <option value="X">XS</option>
                 <option value="S">S</option> 
                 <option value="M">M</option> 
                 <option value="L">L</option> 
                 <option value="XL">XL</option> 
                 <option value="XXL">XXL</option>  

                </select>
            </label>
        </div>
        )
    }
}
const mapStateToProps = state => ({
    products: state.products.items,
    size: state.products.size,
    sort: state.products.sort,
    filteredProducts: state.products.filteredItems
})

export default connect(mapStateToProps, {filterProducts, sortProducts})(Filter);