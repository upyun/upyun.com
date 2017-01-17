from __future__ import with_statement
from fabric.api import *

env.hosts = ['root@royldesign.com']
def update():
  local('npm run build')
  run('rm -rf /srv/upyun.com/dist')
  local('scp -r dist root@royldesign.com:/srv/upyun.com')
