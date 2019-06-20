import React from 'react'
import {connect} from 'react-redux'
import {changedSortValue} from '../redux/actions'

const SearchBar = ({sortValue, onSortChange}) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" name="sortGroup" value="Alphabetically" checked={sortValue === "Alphabetically"} onChange={onSortChange}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" name="sortGroup" value="Price" checked={sortValue === "Price"} onChange={onSortChange}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={null}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  )
}

const mapStateToProps = state => ({
  sortValue: state.sortValue
})

const mapDispatchToProps = dispatch => {
  return {
    onSortChange: e => dispatch(changedSortValue(e))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
