.PHONY: all assets assets/css

all: assets

assets: assets/css

assets/css: assets/css/default.css

assets/css/default.css: _m4/default.css.m4 _m4/base.css.m4 _m4/navbar.css.m4 _m4/variables.m4
	m4 -I _m4/ $< >> $@

