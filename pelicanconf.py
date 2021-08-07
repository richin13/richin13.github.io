#!/usr/bin/env python
# -*- coding: utf-8 -*- #

AUTHOR = "Ricardo Madriz"
SITENAME = "Ricardo"
SITEURL = ""

PATH = "content"

TIMEZONE = "America/Costa_Rica"

DEFAULT_LANG = "en"

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Social widget
SOCIAL = (
    ("github", "https://github.com/richin13"),
    ("twitter", "https://twitter.com/richin13cr"),
)

# Navbar menu items
MENUITEMS = (
    ("Home", "/"),
)

DEFAULT_PAGINATION = 5

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True

OUTPUT_PATH = "."
THEME = "./custom-theme"
