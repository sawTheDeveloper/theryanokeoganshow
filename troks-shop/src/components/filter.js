import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
        <div className='row'>
            <div className='col-md-4'></div>
            {this.props.count} products found.
            <div className='col-md-4'></div>
             <label>
                 Order by
                 <select className="form-control" value={this.props.sort}
                 onChange={this.props.handleChangeSort}>
                 <option value="">Select</option>
                 <option value="lowest">Lowest to Highest</option>
                 <option value="highest">Highest to Lowest</option>    
                 </select>
             </label>
            <div className='col-md-4'></div>
            <label>
                 Filter Size
                <select className="form-control" value={this.props.size}
                 onChange={this.props.handleChangeSize}>
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