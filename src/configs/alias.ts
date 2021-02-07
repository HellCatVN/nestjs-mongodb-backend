import * as moduleAlias from 'module-alias';

moduleAlias.addAliases({
  '@modules': __dirname + '/../modules/',
  '@configs': __dirname + '/../configs/',
  '@logger': __dirname + '/../modules/logger/winston',
});
