.PHONY: cypress
cypress:
	docker run -it -v $(PWD):/e2e -w /e2e cypress/included:3.4.0 $@
