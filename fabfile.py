from __future__ import with_statement
from fabric.api import *

env.hosts = ['root@royldesign.com']
def update():
  local('npm run build')
  local('rsync -r dist root@royldesign.com:/srv/upyun.com -avh --delete')
