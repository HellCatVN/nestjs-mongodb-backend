# clear all log
clear
echo '---------------------------DEBUG-----------------------------';
echo '';
echo 'run nodemon to debug code by restart server after change code';
echo '';
echo '---------------------------BEGIN-----------------------------';
echo ''
echo 'npm version'
npm -v
echo ''
echo 'node version'
node -v

echo 'setup NODE_ENV=development';

export NODE_ENV=development
export APP_URL=
export PORT=3000
export DB_HOST=
export DB_PORT=
export DB_USERNAME=
export DB_PASSWORD=
export DB_NAME=

echo ''
echo 'Deploy Application';
yarn start:dev


