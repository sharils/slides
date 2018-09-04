import { bindActionCreators } from 'redux';

export function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleNavMenu: sidebar,
  }, dispatch);
}

connect(mapStateToProps, mapDispatchToProps)(Card);
