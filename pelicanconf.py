import datetime


AUTHOR = "Ricardo Madriz"
SITENAME = "Ricardo's blog"
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

# Blogroll
LINKS = (
    ("Pelican", "https://getpelican.com/"),
    ("Python.org", "https://www.python.org/"),
    ("Jinja2", "https://palletsprojects.com/p/jinja/"),
)

# Social widget
SOCIAL = (
    ("github", "https://github.com/richin13"),
    ("twitter", "https://twitter.com/richin13"),
    ("linkedin", "https://linkedin.com/in/ricardomadriz"),
)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True

OUTPUT_PATH = "./output"
THEME = "./custom-theme"

# Additional settings
SITESUBTITLE = "Software Engineer"
CURRENTYEAR = datetime.datetime.now().year
