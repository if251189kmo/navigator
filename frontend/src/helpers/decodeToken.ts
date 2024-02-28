import jwtDecode from 'jwt-decode';

const decodeToken = (value: string) => (value ? jwtDecode(value) : undefined);

export { decodeToken };
