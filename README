Node.js on OpenShift Express
==============================

This git repository helps you get up and running quickly w/ a node.js installation
on OpenShift Express. 
 
Running on OpenShift
----------------------------

Create an account at http://openshift.redhat.com/

Create a nodejs-0.6 application (you can call your application whatever you want)

    rhc app create -a nodejs -t nodejs-0.6

Add this upstream repo

    cd etherpad
    git remote add upstream -m master git://github.com/openshift/nodejs-example.git
    git pull -s recursive -X theirs upstream master
    # note that the git pull above can be used later to pull updates
    # the rm and ln is there until I can figure out github and symbolic links 
Then push the repo upstream

    git push

That's it, you can now checkout your application at:

    http://nodejs-$yournamespace.rhcloud.com

