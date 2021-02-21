install: # имя цели, поддерживается kebab-case и snake_case
	npm install # для отступа используется табуляция, это важная деталь

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint ..