module.exports = {
  apps : [{
    script: 'index.js',
  }, {
    script: 'index.js'
  }],
   
  // Deployment Configuration
  deploy : {
    production : {
       "user" : "root",
       "host" : ["127.0.0.1"],
       "ref"  : "origin/master",
       "repo" : "git@github.com:Hemachandra1233/pm2-demo.git",
       "path" : "/var/www/pm2-demo",
       "post-deploy" : "npm install"
    }
  }
};
