# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
# Rails.application.config.assets.precompile += %w( admin.js admin.css )

# Version of your assets, change this if you want to expire all your assets.
# Rails.application.config.assets.precompile += %w(manager.js material.js axios.js)
# Rails.application.config.assets.precompile += %w(chat.scss manager.scss lp.scss mailer.scss)
# Rails.application.config.assets.precompile += %w(modules/*.css pages/*.css)
Rails.application.config.assets.precompile += %w(components/*.js)
Rails.application.config.assets.precompile += %w(serverside/*.js)
Rails.application.config.assets.precompile += %w(*.js *.css)
Rails.application.config.assets.precompile << /(^[^_\/]|\/[^_])[^\/]*(\.js|\.css)$/

