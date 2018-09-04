import { bindActionCreators } from 'redux';

export const mapDispatchToProps = {
  toggleNavMenu: sidebar,
};

connect(mapStateToProps, mapDispatchToProps)(Card);
