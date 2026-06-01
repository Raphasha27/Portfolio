.PHONY: install dev build lint clean deploy

install:
	cd v2 && npm install

dev:
	cd v2 && npm run dev

build:
	cd v2 && npm run build

lint:
	cd v2 && npm run lint

clean:
	rm -rf v2/node_modules v2/.next v2/dist
