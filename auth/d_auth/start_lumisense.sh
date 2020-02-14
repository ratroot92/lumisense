#!/bin/bash

NAME="OSINT_System"                              #Name of the application (*)
DJANGODIR=/home/asd/OSINT_System             # Django project directory (*)
Lumi_system=/home/asd/Desktop/development/django/lumisense/auth

echo "Starting $NAME as `whoami`"

# Activate the virtual environment
cd $DJANGODIR
source $Lumi_system/bin/activate

# Start your OSINT Project
# Programs meant to be run under supervisor should not daemonize themselves (do not use --daemon)
exec $Lumi_system/bin/python $DJANGODIR/manage.py runserver 0:8000
#exec /var/www/osint/OSINT_System/manage.py run_huey 
