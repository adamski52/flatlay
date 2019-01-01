DROP EXTENSION IF EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

INSERT INTO public.auth_user (
  password,
  username,
  first_name,
  last_name,
  email,
  is_staff,
  is_active,
  is_superuser,
  date_joined
) VALUES (
   -- 'lolwatlol' not my real password.  sorry github :(
  'pbkdf2_sha256$100000$pV6T4Mc5pR0Q$gNtUa8K94RmqF5kAjkiBpR4MmeRnHqhNyU7wQ2C06uY=',
  'admin',
  'jon',
  'adamski',
  'jon.adamski52@gmail.com',
   true,
   true,
   true,
   NOW()
);

DELETE FROM public.skills_skill;

INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'NPM', 100, 'devicon-npm-original-wordmark', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Iconic', 5, 'devicon-ionic-original', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Electron', 5, 'devicon-electron-original', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Yarn', 100, 'devicon-yarn-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Handlebars & Mustache', 100, 'devicon-handlebars-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'CouchDB', 50, 'devicon-couchdb-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Elm', 0, 'devicon-elm-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'CakePHP', 0, 'devicon-cakephp-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Express', 85, 'devicon-express-original', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'IntelliJ', 90, 'devicon-intellij-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Pycharm', 0, 'devicon-pycharm-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Ruby Mine', 0, 'devicon-rubymine-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Webstorm', 100, 'devicon-webstorm-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Tomcat', 70, 'devicon-tomcat-line', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'VueJS', 0, 'devicon-vuejs-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Swift', 0, 'devicon-swift-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Webpack', 80, 'devicon-webpack-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Visual Studio', 70, 'devicon-visualstudio-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Slack', 100, 'devicon-slack-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'TypeScript', 100, 'devicon-typescript-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Babel', 90, 'devicon-babel-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Mocha', 90, 'devicon-mocha-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Jasmine', 100, 'devicon-jasmine-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'SSH', 100, 'devicon-ssh-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'SourceTree', 100, 'devicon-sourcetree-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'PHPStorm', 0, 'devicon-phpstorm-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Protractor', 70, 'devicon-protractor-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Gradle', 50, 'devicon-gradle-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Cucumber', 70, 'devicon-cucumber-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Gitlab', 100, 'devicon-gitlab-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Github', 100, 'devicon-github-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'D3JS', 10, 'devicon-d3js-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Confluence', 100, 'devicon-confluence-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Bitbucket & Stash', 100, 'devicon-bitbucket-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Django', 60, 'devicon-django-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'GIMP', 85, 'devicon-gimp-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'C++', 60, 'devicon-cplusplus-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'C#', 60, 'devicon-csharp-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'C', '60',  'devicon-c-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'NW & Node Webkit', 0, 'devicon-nodewebkit-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'NGINX', 90, 'devicon-nginx-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Erlang', 0, 'devicon-erlang-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Apache', 90, 'devicon-apache-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Redis', 0, 'devicon-redis-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Meteor', 0, 'devicon-meteor-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Heroku', 25, 'devicon-heroku-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Go', 0, 'devicon-go-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Docker', 80, 'devicon-docker-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'AWS', 70, 'devicon-amazonwebservices-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Android', 60, 'devicon-android-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Angular & AngularJS', 100, 'devicon-angularjs-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Apple & macOS', 90, 'devicon-apple-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Atom', 0, 'devicon-atom-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'BackboneJS', 90, 'devicon-backbonejs-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Bootstrap', 90, 'devicon-bootstrap-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Bower', 80, 'devicon-bower-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'CoffeeScript', 80, 'devicon-coffeescript-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'CSS', 90, 'devicon-css3-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), '.NET', 70, 'devicon-dot-net-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Drupal', 90, 'devicon-drupal-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Git', 90, 'devicon-git-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Grunt', 100, 'devicon-grunt-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Gulp', 100, 'devicon-gulp-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'HTML', 100, 'devicon-html5-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Illustrator', 80, 'devicon-illustrator-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Java', 70, 'devicon-java-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'JavaScript & ES6+', 100, 'devicon-javascript-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'jQuery', 90, 'devicon-jquery-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'KrakenJS', 0, 'devicon-krakenjs-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'LESS', 100, 'devicon-less-plain-wordmark', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Linux', 90, 'devicon-linux-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'MongoDB', 80, 'devicon-mongodb-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'MySQL', 90, 'devicon-mysql-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'NodeJS', 95, 'devicon-nodejs-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Oracle', 70, 'devicon-oracle-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Photoshop', 100, 'devicon-photoshop-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'PHP', 85, 'devicon-php-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'PostgreSQL', 75, 'devicon-postgresql-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Python', 75, 'devicon-python-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Ruby on Rails', 25, 'devicon-rails-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'React', 90, 'devicon-react-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Ruby', 25, 'devicon-ruby-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'SASS & SCSS', 100, 'devicon-sass-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Sequelize', 0, 'devicon-sequelize-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Travis', 85, 'devicon-travis-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'VIM', 85, 'devicon-vim-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Windows', 100, 'devicon-windows8-plain', NOW(), '');
INSERT INTO public.skills_skill (id, name, proficiency, icon_class, date_created, date_deleted) VALUES (uuid_generate_v4(), 'Wordpress', 60, 'devicon-wordpress-plain', NOW(), '');