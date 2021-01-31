# clear all log
clear
echo 'npm version'
npm -v
echo ''
echo 'node version'
node -v

echo 'setup NODE_ENV=production';

export NODE_ENV=production
export APP_URL=
export PORT=3000
export DB_HOST=
export DB_PORT=
export DB_USERNAME=
export DB_PASSWORD=
export DB_NAME=

echo ''
echo 'Deploy Application';
yarn start:prod


