import React from 'react'
import {connect} from 'react-redux'
import {changedSortValue, changedFilterValue} from '../redux/actions'

const SearchBar = ({sortValue, onSortChange, onFilterChange}) => {
  return (
    <div>

      <strong>Sort by:</strong>&nbsp;&nbsp;
      <label>
        <input type="radio" name="sortGroup" value="Alphabetically" checked={sortValue === "Alphabetically"} onChange={onSortChange}/>&nbsp;
        Alphabetically
      </label>&nbsp;&nbsp;
      <label>
        <input type="radio" name="sortGroup" value="Price" checked={sortValue === "Price"} onChange={onSortChange}/>&nbsp;
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>&nbsp;&nbsp;
        <select onChange={onFilterChange}>
          <option value="All">All</option>
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
    onSortChange: e => dispatch(changedSortValue(e)),
    onFilterChange: e => dispatch(changedFilterValue(e))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
