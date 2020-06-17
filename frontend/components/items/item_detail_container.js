import { connect } from 'react-redux';
import ItemDetail from './item_detail';
import { selectPokemonItem } from '../../reducers/selector'


const mapStateToProps = (state, ownProps) => ({
    items: selectPokemonItem(state, ownProps.match.params.itemId)
});



export default connect(
  mapStateToProps
)(ItemDetail);