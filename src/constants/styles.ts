export const container: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  flex: 1,
  // width:'100%',
  maxWidth: '100%',
  height: 400,
  backgroundColor: 'transparent',
  overflow: 'hidden',
};

export const nav: React.CSSProperties = {
  width: 300,
};

export const background: React.CSSProperties = {
  backgroundColor: '#000000',
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  width: 300,
};

export const toggleContainer: React.CSSProperties = {
  outline: 'none',
  border: 'none',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  cursor: 'pointer',
  position: 'absolute',
  top: 18,
  left: 15,
  width: 50,
  height: 50,
  borderRadius: '50%',
  background: 'transparent',
};

export const list: React.CSSProperties = {
  listStyle: 'none',
  padding: 25,
  margin: 0,
  position: 'absolute',
  top: 80,
  width: 230,
};

export const listItem: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: 0,
  margin: 0,
  listStyle: 'none',
  marginBottom: 20,
  cursor: 'pointer',
};

export const iconPlaceholder: React.CSSProperties = {
  width: 40,
  height: 40,
  borderRadius: '50%',
  flex: '40px 0',
  marginRight: 20,
};

export const textPlaceholder: React.CSSProperties = {
  borderRadius: 5,
  width: 200,
  height: 20,
  flex: 1,
};
