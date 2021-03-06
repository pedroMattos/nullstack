import files from './files';

const environment = {client: false, server: true};

environment.development = __dirname.indexOf('.development') > -1;
environment.production = !environment.development;

environment.static = process.argv[2] === '--static';

environment.key = files.key;

Object.freeze(environment);

export default environment;